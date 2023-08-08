import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeCard from "./MarqueeCard";

function MarqueeHeader() {
  return (
    <Marquee
      direction="right"
      speed={50}
      gradient={false}
      style={{ marginTop: "0" }}
    >
      <MarqueeCard
        carName={"Mercedes"}
        model={"AMG GT3"}
        engine={"3.0 L 6-Cylinder"}
        output={"404 kW/550 hp"}
        launchYear={"2016"}
        imgUrl={"/dstatic/questions/Mercedes.svg"}
      />
      <MarqueeCard
        carName={"Mercedes"}
        model={"AMG GT3"}
        engine={"3.0 L 6-Cylinder"}
        output={"404 kW/550 hp"}
        launchYear={"2016"}
        imgUrl={"/dstatic/questions/Mercedes.svg"}
      />
      <MarqueeCard
        carName={"Mercedes"}
        model={"AMG GT3"}
        engine={"3.0 L 6-Cylinder"}
        output={"404 kW/550 hp"}
        launchYear={"2016"}
        imgUrl={"/dstatic/questions/Mercedes.svg"}
      />
      <MarqueeCard
        carName={"Mercedes"}
        model={"AMG GT3"}
        engine={"3.0 L 6-Cylinder"}
        output={"404 kW/550 hp"}
        launchYear={"2016"}
        imgUrl={"/dstatic/questions/Mercedes.svg"}
      />
    </Marquee>
  );
}

export default MarqueeHeader;
