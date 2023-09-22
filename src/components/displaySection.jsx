import React from "react";

export default function DisplaySection ({array, InfoComponent, title}) {
    return (
        <React.Fragment>
            {array.length && ( <h3 className="header-text">{title}</h3> )}

            {
            array.length && array.map((info) => ( <InfoComponent info={info} key={info.id}/>))
            }
        </React.Fragment>
    )
}