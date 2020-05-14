const createMatchRegExp = (specificityList) => {
  let specIndex = 0;

  return (codeString) => {
    let match;

    while (
      specificityList[specIndex] &&
      !(match = specificityList[specIndex](codeString))
    ) {
      specIndex++;
    }

    return match;
  };
};

module.exports = { createMatchRegExp };
