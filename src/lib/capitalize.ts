export const capitalize = (str: string) => {
  return str.split("/")[1].charAt(0).toUpperCase() + str.split("/")[1].slice(1);
};
