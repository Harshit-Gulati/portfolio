export const truncateText = (text: string) => {
  if (text.length < 75) return text;
  return text.slice(0, 75).trim() + "...";
};
