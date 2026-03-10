import React from "react";
import { Link } from "react-router-dom";

function FeatureCard({ title, description, link }){

return(

<div className="feature-card">

<h2>{title}</h2>

<p>{description}</p>

<Link to={link}>
<button>Explore</button>
</Link>

</div>

);

}

export default FeatureCard;