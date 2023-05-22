import React from "react";
import feature1 from "../img/feature1.png";
import './feature.css'
const Feature = () => {
    return (
        <div class="row">
            <div
                class="col-4"
                style={{
                    height: "100vh",
                    backgroundImage: `url(${feature1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    opacity: 1,
                }}
            >
                col-8
            </div>
            <div id="f2" class="col-8">content clear</div>
        </div>
    );
};

export default Feature;
