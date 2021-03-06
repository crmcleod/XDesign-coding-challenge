import React from 'react'

const Button = ({ buttonFunction, buttonId, buttonText, icon, functionParams }) => {

    const handleClick = () => {
        buttonFunction(functionParams)
    }
    return(
        <>
            <button onClick={ handleClick } id={ buttonId }> { buttonText } <img alt="" src={ icon }/> </button>
        </>
    )
}
export default Button