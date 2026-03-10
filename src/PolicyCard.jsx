import React from "react";

function PolicyCard({policy}){

return(

<div className="policy-card">

<h2>Government Policy</h2>

<p><b>Policy:</b> {policy.name}</p>
<p><b>Sector:</b> {policy.sector}</p>
<p><b>Impact:</b> {policy.impact}</p>

</div>

);

}

export default PolicyCard;