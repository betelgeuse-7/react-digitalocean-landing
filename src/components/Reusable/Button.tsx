import React from 'react';
import s from "./Button.module.css"

interface ButtonProps {
    color: string
    bg: string
}

const Button: React.FC<ButtonProps> = ({children, color, bg}) => {
    const style = {backgroundColor: bg, color}
    return (
       <button className={s.button} style={style}>{children}</button>
    );
};

export default Button;