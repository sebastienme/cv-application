/* eslint-disable react/prop-types */
export const Button = ({text, className, button = "button", onClick}) => {
    return (
        <>
            <button onClick={onClick} type={button} className={className}>{text}</button>
        </>
    )
}