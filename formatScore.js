export function formatScore(correct, total) {
  const pct = Math.round((correct / total) * 100);
  return `${correct}/${total} (${pct}%)`;
}
