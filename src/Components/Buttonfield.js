import React from "react";

export default function Buttonfield(props) {
  return (
    <div className="parentCont4Buttons">
      <div className="childCont4Buttons1">
        <button className="btn" onClick={props.uperrTxtBtn}>Transform Uppercase</button>
        <button className="btn" onClick={props.lowerTxtBtn}>Transform Lowercase</button>
        <button className="btn" onClick={props.capitalyTxtBtn}n>Capitalize Paragraphs</button>
        <button className="btn" onClick={props.doNothingTxtBtn}n>Do Nothing</button>
      </div>
      <div className="childCont4Buttons2">
        <button className="btn" onClick={props.copyBtn}>Copy</button>
        <button className="btn" onClick={props.cutBtn}>Cut</button>
        <button className="btn" onClick={props.pasteBtn}>Paste</button>
        <button className="btn" onClick={props.removeExtraSpaceBtn}>Remove Extra Spaces</button>
      </div>
    </div>
  );
}
