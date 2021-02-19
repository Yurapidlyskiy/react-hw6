import React from 'react';


export default function Section({sectionName, sectionInf}){
    return(
        <div>

        <p>{sectionName}</p>
           <p>{sectionInf}</p>

        </div>
    );
}