
const copyTxtBtn = () => {
  let el = document.getElementById("textinputbox");
  navigator.clipboard.writeText(el.value);
};

const cutTxtBtn = () => {
  let el = document.getElementById("textinputbox");
  navigator.clipboard.writeText(el.value);
  el.value = "";
};

const pasteTxtBtn = () => {
  let el = document.getElementById("textinputbox");
  navigator.clipboard.readText().then((txt) => {
    el.value += txt;
  });
};

const transfUpperBtn = () => {
  let el = document.getElementById("textinputbox");
  let str = el.value;
  el.value = str.toUpperCase();
};

const transfLowerTxtBtn = () => {
  let el = document.getElementById("textinputbox");
  let str = el.value;
  el.value = str.toLowerCase();
};

const transfCapitalyTxtBtn = () => {
  // Capitalise first letter of Paragraph 
  let el = document.getElementById("textinputbox");
  let str = el.value;
  // to be continued 
};

const removeExtraSpaceBtn = () => {
  let el = document.getElementById("textinputbox");
  let str = el.value;
  let newStr = str.replace(/\s+/g, " ").trim();
  el.value = newStr;
};

const doNothingTxtBtn = () => {
  // doing nothing 
};

const countWords = () => {
  let el = document.getElementById("textinputbox");
  let str = el.value;
  let newStr = str.replace(/\s+/g, " ").trim();
  let strArr = newStr.split(" ");
  console.log(strArr);
  if (strArr == "") {
    return "0";
  } else {
    return strArr.length;
  }
}

const countChars = () => {
  let el = document.getElementById("textinputbox");
  let str = el.value;
  return str.length;
}

const countVowels = () => {
  let el = document.getElementById("textinputbox");
  let str = el.value;
  let re = /[aeiou]/g;
  let res = str.match(re);
  if (res) {
    return res.length;
  } else {
    return "0";
  }
}

export {
  copyTxtBtn,
  cutTxtBtn,
  pasteTxtBtn,
  transfUpperBtn,
  transfLowerTxtBtn,
  transfCapitalyTxtBtn,
  removeExtraSpaceBtn,
  doNothingTxtBtn,
  countWords,
  countChars,
  countVowels
};
