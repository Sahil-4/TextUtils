
import React, { useState } from "react";
import "./App.css";
import Inputarea from "./Components/Inputarea";
import Buttonfield from "./Components/Buttonfield";
import Summarybox from "./Components/Summarybox";
import {
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
} from "./funcs.mjs";

function App() {
  const [TotalWords, setTotalWords] = useState(0);
  const [TotalChars, setTotalChars] = useState(0);
  const [TotalVowels, setTotalVowels] = useState(0);

  const handleOnChangeTextarea = () => {
    setTotalWords(countWords);
    setTotalChars(countChars);
    setTotalVowels(countVowels);
  }

  return (
    <>
      <h1 className="headingname">Play with Text</h1>
      <Inputarea handleOnChangeTextarea={handleOnChangeTextarea}></Inputarea>
      <Buttonfield
        copyBtn={copyTxtBtn}
        cutBtn={cutTxtBtn}
        pasteBtn={pasteTxtBtn}
        uperrTxtBtn={transfUpperBtn}
        lowerTxtBtn={transfLowerTxtBtn}
        capitalyTxtBtn={transfCapitalyTxtBtn}
        removeExtraSpaceBtn={removeExtraSpaceBtn}
        doNothingTxtBtn={doNothingTxtBtn}
      ></Buttonfield>
      <Summarybox
        countWords={TotalWords}
        TotalChars={TotalChars}
        TotalVowels={TotalVowels}
      ></Summarybox>
    </>
  );
}

export default App;
