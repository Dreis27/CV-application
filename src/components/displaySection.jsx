import React from "react";

export default function DisplaySection ({array, InfoComponent, title}) {
    return (
        <>
          {array.length > 0 && (
            <>
              <h3 className="header-text">{title}</h3>
              {array.map((info) => (
                <InfoComponent info={info} key={info.id} />
              ))}
            </>
          )}
        </>
      );
    }
    
    
    
    
    
    
    