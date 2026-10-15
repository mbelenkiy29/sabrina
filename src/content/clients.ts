// Logo wall slots. Replace each with the client's mono (black) SVG logo.
export const clientLogos = Array.from({ length: 8 }, (_, i) => ({
  id: `client-${i + 1}`,
  label: `Client logo ${String(i + 1).padStart(2, "0")}`,
}));
