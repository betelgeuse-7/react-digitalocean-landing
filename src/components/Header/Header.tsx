import React from 'react';
import s from "./Header.module.css"

import Navbar from './Lower/Navbar';
import UpperHeader from './Upper/UpperHeader';

const Header: React.FC = () => {
    return (
        <div className={s.header}>
            <UpperHeader />
            <Navbar />
        </div>
    );
};

export default Header;