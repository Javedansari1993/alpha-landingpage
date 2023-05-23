import React from "react";
import feature1 from "../img/feature1.png";
import "./feature.css";
import group110 from "../Group 110.svg";
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
            ></div>
            <div id="f2" class="col-8" style={{ padding: 60 }}>
                <div id="why">Why us?</div>
                <div className="d-flex flex-column gap-1">
                    <div className="d-flex gap-5">
                        <div
                            className="border bg-white rounded-circle d-flex justify-content-center align-items-center"
                            style={{ width: 100, height: 50 }}
                        >
                            <img
                                src={group110}
                                className="fs-5 bg-black"
                                alt="Vector 1"
                                style={{ width: 30 }}
                            />
                        </div>
                        <div>
                            <div id="heading">Quality Products</div>
                            <div id="content">
                                Quality Products Our digital overlaminate films
                                are made from the highest quality materials and
                                are designed to provide superior protection and
                                appearance to your digital prints. Multiple
                                Options
                            </div>
                        </div>
                    </div>
                    <div className="d-flex gap-5">
                        <div
                            className="border bg-white rounded-circle d-flex justify-content-center align-items-center"
                            style={{ width: 120, height: 50 }}
                        >
                            <img
                                src={group110}
                                className="fs-5 bg-black"
                                alt="Vector 1"
                                style={{ width: 30 }}
                            />
                        </div>
                        <div>
                            <div id="heading">Multiple Options</div>
                            <div id="content">
                                We offer DOL Max in a 2.1 mil gloss finish and
                                1.3 mil optically clear, gloss finish. This
                                allows you to choose the perfect film thickness
                                level for your specific application, ensuring
                                your graphics look the best and stand out from
                                the competition.
                            </div>
                        </div>
                    </div>
                    <div className="d-flex gap-5">
                        <div
                            className="border bg-white rounded-circle d-flex justify-content-center align-items-center"
                            style={{ width: 100, height: 50 }}
                        >
                            <img
                                src={group110}
                                className="fs-5 bg-black"
                                alt="Vector 1"
                                style={{ width: 30 }}
                            />
                        </div>
                        <div>
                            <div id="heading">Expertise and Support</div>
                            <div id="content">
                                Expertise and Support Our team of experts are
                                available to provide guidance and support
                                throughout the entire process, from selecting
                                the right product for your needs to installation
                                and beyond
                            </div>
                        </div>
                    </div>
                    <div className="d-flex gap-5">
                        <div
                            className="border bg-white rounded-circle d-flex justify-content-center align-items-center"
                            style={{ width: 70, height: 50 }}
                        >
                            <img
                                src={group110}
                                className="fs-5 bg-black"
                                alt="Vector 1"
                                style={{ width: 30 }}
                            />
                        </div>
                        <div>
                            <div id="heading">Durability Assurance</div>
                            <div id="content">
                                Durability Assurance Trust our products with
                                confidence, as we offer industry leading
                                durability assurance for our overlaminate films.
                            </div>
                        </div>
                    </div>
                    <button>Request a call back</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;
