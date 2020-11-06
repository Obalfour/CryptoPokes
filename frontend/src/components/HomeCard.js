import React from "react";

export function HomeCard({ imgsrc, cardTitle, fadeDuration }) {
  return ( 
  	<div className="card card-with-shadow aos-init aos-animate" data-aos="fade-up" data-aos-duration={fadeDuration}>
        <img src={imgsrc} height="75" className="card-img-top mt-4" alt="..."/>
            <div className="card-body">
                <h4>{cardTitle}</h4>
            </div>
    </div>   
    );
}