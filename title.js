const stringArray = ["this is a test", "another example", "title case"];

const convertToTitleCaps = (strArray) => {
  return strArray.map((str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  });
};

const titleCasedArray = convertToTitleCaps(stringArray);
console.log(titleCasedArray);
