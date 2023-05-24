import React from "react";
import "./footer.css";
import verctor2 from "../img/vector2.png";
const Footer = () => {
    return (
        <div class="row" id="foot">
            <div className="col-lg-4 col-md-12 mb-md-5">
                <div>
                <div id="best">Best solutions form</div>
                    <img
                    src={verctor2}
                    className="fs-5 bg-black"
                    alt="Vector 1"
                    style={{ width: 130}}
                /></div>
            </div>
            <div className="col-lg-4 col-md-12 mb-md-5">
                <div id="max">Dol max Overlaminate Films</div>
                <div id="max">Why us</div>
                <div id="max">Enquire now</div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div id="avery">Avery Dennison Overlaminate Avery Dennison Overlaminate Films</div>
                <div id="avery">Avery Dennison Digital Overlaminate Films</div>
                <div id="avery">Avery Dennison DOL Max</div>
            </div>
        </div>
    );
};

export default Footer;
