import React from 'react';
import s from "./Badge.module.css"

const Badge: React.FC = ({children}) => {
    return (
        <div className={s.badge}>{children}</div>
    );
};

export default Badge;