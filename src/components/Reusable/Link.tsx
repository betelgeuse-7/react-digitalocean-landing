import React, { Fragment } from "react"
import s from "./Link.module.css"

interface LinkProps {
    to: string    
}

const Link: React.FC<LinkProps> = ({children, to}) => {
    return <Fragment>
        <a href={to} className={s.link}>{children}</a>
    </Fragment>
}

export default Link
