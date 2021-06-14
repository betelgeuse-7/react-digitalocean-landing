import React,  { Fragment } from 'react';
import Link from "../../Reusable/Link"

const Links: React.FC = () => {
    return (
        <Fragment>
            <Link to="#Blog">Blog</Link>
            <Link to="#Docs">Docs</Link>
            <Link to="#Get_Support">Get Support</Link>
            <Link to="#Sales">Sales</Link>
        </Fragment>        
    );
};

export default Links;