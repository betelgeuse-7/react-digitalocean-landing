import React from "react"
import s from "./UpperHeader.module.css"

/**Components */
import Badge from "../../Reusable/Badge"
import Links from "../Upper/Links"

const UpperHeader: React.FC = () => {
    return <div className={s["upper-header__wrapper"]}>
        <Badge>RSVP FOR DEPLOY</Badge>
        <Links />
    </div>
}

export default UpperHeader