function titleCase (str) {
  let titleCased = "";
    for (let i = 0; i < str.length; i++) {
      if (i === 0) {
        titleCased += str[i].toUpperCase();
      } else if (str[i - 1] === " ") {
        titleCased += str[i].toUpperCase();
      } else {
        titleCased += str[i].toLowerCase();
      }
    }
  return titleCased;
}