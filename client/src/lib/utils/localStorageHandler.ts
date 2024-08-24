export const setStorage = <T>(key: string, value: T) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getStorage = (key: string) =>
  JSON.parse(localStorage.getItem(key) as string);
