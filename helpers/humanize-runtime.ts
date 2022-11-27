const humanizeRuntime = (amount: number) => {
  if (!amount) return "Unknown";
  if (amount < 60) {
    return `0h ${amount}m`;
  }
  if (amount < 120) {
    return `1h ${amount - 60}m`;
  }
  if (amount < 180) {
    return `2h ${amount - 120}m`;
  }
  return `3h ${amount - 180}m`;
};

export default humanizeRuntime;
