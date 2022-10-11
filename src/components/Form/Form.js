import React, { useState } from "react";


const Form = (props) =>{
    const [color2, setColor2] = useState("")
    const [height, setheight] = useState("")
    const [width, setwidth] = useState("")
    const [validar, setValidar] = useState("")

    const onChangeHeight = (e) =>{
        setheight(e.target.value);
    }

    const onChangeWidth = (e) =>{
        setwidth(e.target.value);
    }

    const changeColor2 = (e) =>{
        setColor2(e.target.value);
    }
    
    const send = (e) =>{
        e.preventDefault();
        if(color2 == "" || height == "" || width == ""){
            setValidar("Please put the missing values")
        }else{
        const allthebox = {
            color : color2,
            height : height,
            width : width
        }
        props.changeColor(allthebox);
        setColor2("");
        setheight("");
        setwidth("");
        setValidar("");
    }
    }


    return(
        <div>
            <form onSubmit={send}>
                { validar?<h1>{validar}</h1>:""}
                <label>Color: </label>
                <input type="text" name="color" onChange={changeColor2} value={color2}/>
                <label>Height: </label>
                <input type="text" name="height" onChange={onChangeHeight} value={height}/>(px)
                <label>Width: </label>
                <input type="text" name="width" onChange={onChangeWidth} value={width}/>(px)
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}
export default Form;