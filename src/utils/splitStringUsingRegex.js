/**
 * Splits a string into an array of individual characters using a regular expression.
 *
 * @param {string} str - The input string to be split.
 * @return {string[]} An array of individual characters from the input string.
 */
export const splitStringUsingRegex = (str) => {
  const char = [];
  const regex = /[\s\S]/gu;

  let match;

  while((match = regex.exec(str)) !== null){
    char.push(match[0])
  }

  return char;
}