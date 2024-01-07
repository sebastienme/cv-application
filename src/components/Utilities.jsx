/* eslint-disable react/prop-types */
export const Button = ({text, className, button = "button", handleSubmit}) => {
    return (
        <>
            <button onClick={handleSubmit} type={button} className={className}>{text}</button>
        </>
    )
}