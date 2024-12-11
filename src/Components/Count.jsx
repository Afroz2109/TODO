import React from "react";

export default function Count({itemsCount}) {
    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'20px',fontSize:'1.2rem'}}>
            Pending TO-DO's list - {itemsCount}
        </div>
    )
}