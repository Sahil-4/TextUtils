import React from 'react'

export default function Inputarea(props) {
    return (
        <>
        <textarea className="textinputbox" id="textinputbox" onChange={props.handleOnChangeTextarea}></textarea>
        </>
    )
}
