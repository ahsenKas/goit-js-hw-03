function slugify(header) {
  const lowerCaseString = header.toLowerCase();
  const wordsArray = lowerCaseString.split(' ');
  const slug = wordsArray.join('-');
  return slug;
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a YOUNG developer in TWO weeks")); // "how-to-become-a-young-developer-in-two-weeks"