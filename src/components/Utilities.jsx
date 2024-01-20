/* eslint-disable react/prop-types */
export const Button = ({text, className, button = "button", handleClick}) => {
    return (
        <>
            <button onClick={handleClick} type={button} className={className}>{text}</button>
        </>
    )
}