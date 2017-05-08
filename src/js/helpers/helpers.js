export function underscoreToSpace(string) {
  const spacedString = string.split('_').join(' ');
  return spacedString;
}

export function isUrl(s) {
   const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
   return regexp.test(s);
}
