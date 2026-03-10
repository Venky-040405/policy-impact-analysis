import React from "react";
import FeatureCard from "./Features";
import "./Homepage.css";

function HomePage(){

return(

<div className="homepage">

<header className="hero">

<h1>Policy Impact Analyzer</h1>

<p>
Track Government Policies and Their Impact on
Stock Market Sectors
</p>

</header>

<section className="features">

<FeatureCard
title="Policy News Analysis"
description="Analyze government announcements and detect which sectors are affected."
link="/Analysis"
/>

<FeatureCard
title="Sector Market Dashboard"
description="Monitor sector performance with real-time data from NSE."
link="/sector"
/>

<FeatureCard
title="Company Stock Insights"
description="Track price movements, market volume and trends for companies."
link="/newapi"
/>

</section>

</div>

);

}

export default HomePage;