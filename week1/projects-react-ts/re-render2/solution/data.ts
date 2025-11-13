

/**
 * Mock data (Generate 1000+ items)
 * How this function works:
 * https://chatgpt.com/c/690a8996-3db0-8328-9e65-815a227048f1
 */
export const data = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `Item ${i + 1}`,
}));