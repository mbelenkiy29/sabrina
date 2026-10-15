/**
 * Seedance 2.5 text-to-video via the official Higgsfield SDK.
 *
 *   npm run higgsfield:example
 *
 * Reads HF_CREDENTIALS ("key-id:key-secret") from the environment or
 * .env.local. Runs server-side only; the credential is never printed.
 * This makes a billable generation request.
 */
import {
  APIError,
  AuthenticationError,
  BadInputError,
  CredentialsMissedError,
  NotEnoughCreditsError,
  TimeoutError,
  ValidationError,
  createHiggsfieldClient,
} from "@higgsfield/client/v2";

const MODEL = "bytedance/seedance-2.5/text-to-video";

const input = {
  prompt: "A cinematic scene at sunset",
  duration: 5,
  resolution: "720p",
  aspect_ratio: "16:9",
};

// Video generation can outlast the SDK's 5-minute default.
const MAX_WAIT_MS = 20 * 60 * 1000;

function fail(message: string): never {
  console.error(`✗ ${message}`);
  process.exit(1);
}

// Never include the error object itself: request errors can carry the
// Authorization header in their config.
function describeError(error: unknown): string {
  if (error instanceof CredentialsMissedError) {
    return "No Higgsfield credentials found. Set HF_CREDENTIALS in .env.local.";
  }
  if (error instanceof AuthenticationError) {
    return "Authentication failed (401). Check that HF_CREDENTIALS is a valid key-id:key-secret pair.";
  }
  if (error instanceof NotEnoughCreditsError) {
    return "Request refused with HTTP 403. The SDK reports this as insufficient credits; it can also mean the API or a network proxy denied access.";
  }
  if (error instanceof ValidationError || error instanceof BadInputError) {
    return `The API rejected the input (${error.statusCode}): ${JSON.stringify(error.details ?? error.message)}`;
  }
  if (error instanceof APIError) {
    return `API error ${error.statusCode}: ${error.message}`;
  }
  if (error instanceof TimeoutError) {
    return `No final status after ${MAX_WAIT_MS / 60000} minutes. The request may still finish; check the Higgsfield dashboard.`;
  }
  if (error instanceof Error) {
    const code = (error as { code?: string }).code;
    return `${error.name}${code ? ` [${code}]` : ""}: ${error.message}`;
  }
  return "Unknown error.";
}

const credentials = process.env.HF_CREDENTIALS?.trim();
if (!credentials) {
  fail("HF_CREDENTIALS is not set. Add HF_CREDENTIALS=key-id:key-secret to .env.local.");
}
const [keyId, keySecret, ...rest] = credentials.split(":");
if (!keyId || !keySecret || rest.length > 0) {
  fail("HF_CREDENTIALS must be in key-id:key-secret format.");
}

const client = createHiggsfieldClient({
  credentials,
  // Some keys are accepted via these headers but get 401 from the v2
  // "Authorization: Key" header alone, so send both.
  headers: { "hf-api-key": keyId, "hf-secret": keySecret },
  // The submit is billable: never resend it automatically.
  maxRetries: 0,
  pollInterval: 5000,
  maxPollTime: MAX_WAIT_MS,
});

console.log(
  `Submitting ${MODEL}: "${input.prompt}" (${input.duration}s, ${input.resolution}, ${input.aspect_ratio}). Waiting for completion…`,
);

let result: Awaited<ReturnType<typeof client.subscribe>>;
try {
  result = await client.subscribe(MODEL, { input, withPolling: true });
} catch (error) {
  fail(describeError(error));
}

const requestId = result.request_id ?? "unknown";
// The SDK's type omits "canceled", but the API can return it.
const status: string = result.status;

switch (status) {
  case "completed": {
    const url = result.video?.url;
    if (!url) fail(`Request ${requestId} completed but returned no video URL.`);
    console.log(`✓ Completed (request ${requestId})`);
    console.log(`Video URL: ${url}`);
    break;
  }
  case "nsfw":
    fail(`Request ${requestId} was blocked by content moderation. No video was generated.`);
  case "failed":
    fail(`Request ${requestId} failed. No video was generated.`);
  case "canceled":
    fail(`Request ${requestId} was canceled. No video was generated.`);
  default:
    fail(`Request ${requestId} ended with unexpected status "${status}". No video URL returned.`);
}
