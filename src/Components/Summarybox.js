import React from 'react'

export default function Summarybox(props) {
    return (
        <div className="summarybox">
            <h1>Summary</h1>
            <span className="txtSums">Total Words : {props.countWords}</span>
            <span className="txtSums">Total Characters : {props.TotalChars}</span>
            <span className="txtSums">Total Vowels : {props.TotalVowels}</span>
        </div>
    )
}
