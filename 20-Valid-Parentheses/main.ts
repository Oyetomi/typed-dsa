function isValid(s: string): boolean {
  const characters: string[] = [];
  for (let c = 0; c < s.length; c++) {
    if (s[c] === '(') {
      characters.push(s[c]);
    } else if (s[c] === ')') {
      if (characters.length === 0) {
        return false;
      }
      if (characters[characters.length - 1] === '(') {
        characters.pop();
      } else {
        return false;
      }
    } else if (s[c] === '{') {
      characters.push(s[c]);
    } else if (s[c] === '}') {
      if (characters.length === 0) {
        return false;
      }
      if (characters[characters.length - 1] === '{') {
        characters.pop();
      } else {
        return false;
      }
    } else if (s[c] === '[') {
      characters.push(s[c]);
    } else if (s[c] === ']') {
      if (characters.length === 0) {
        return false;
      }
      if (characters[characters.length - 1] === '[') {
        characters.pop();
      } else {
        return false;
      }
    }
  }
  return characters.length === 0;
}
