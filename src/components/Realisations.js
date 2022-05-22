import React from "react";
import {Row,Col} from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import ReactSwipe from "react-swipe";
import {PersonCircle} from "react-bootstrap-icons";

function Realisations() {
    return (
        <Row id={"realisations"} className={"justify-content-center text-center"}>
            <Col className={"m-auto px-0"}>
                <h1 className={"mb-5"}>Réalisations</h1>
                <ScrollAnimation animateIn='animate__animated animate__fadeIn'>
                    <div className={"justify-content-center d-none d-md-flex"}>
                        <Cards/>
                    </div>
                    <div className={"d-block d-md-none"}>
                        <Carousel/>
                    </div>
                </ScrollAnimation>
            </Col>
            <img className="tentacle1" src={process.env.PUBLIC_URL + "/tentacle1.svg"} alt={"tentacle"}/>
        </Row>
    );
}

function Carousel() {
    return (
        <div className={"text-center d-md-none"}>
            <ReactSwipe className="mySwipe" swipeOptions={{ widthOfSiblingSlidePreview: 30 }}>
                <Cards/>
            </ReactSwipe>
        </div>
    );
}

function Cards() {
    return (
        <>
            <div className={"card"}>
                <a target={"_blank"} rel="noopener noreferrer" href="https://nodejs-gambling.herokuapp.com/" className="stretched-link"> </a>
                <div className={"p-3 text-center"}>
                    <img className="img-fluid mb-1" width={300} src={process.env.PUBLIC_URL + "/casino-logo.svg"} alt={"Casino"}/>
                    <h4 className={"date mb-2"}>2020</h4>
                    <h4>Casino - Roulette</h4>
                </div>
            </div>
            <div className={"card"}>
                <a target={"_blank"} rel="noopener noreferrer" href="https://quentin-pla.github.io/test-technique-aspirateur-robot/" className="stretched-link"> </a>
                <div className={"p-3 text-center"}>
                    <img className="img-fluid mb-1" width={180} src={process.env.PUBLIC_URL + "/autovacuum.svg"} alt={"Aspirateur robot"}/>
                    <h4 className={"date mb-2"}>2022</h4>
                    <h4>Aspirateur Robot</h4>
                </div>
            </div>
            <div className={"card"}>
                <a target={"_blank"} rel="noopener noreferrer" href="https://quentin-pla.github.io/test-technique-random-users/" className="stretched-link"> </a>
                <div className={"p-3 text-center"}>
                    <PersonCircle size={180} className={"mb-1"}/>
                    <h4 className={"date mb-2"}>2022</h4>
                    <h4>Random Users</h4>
                </div>
            </div>
            <div className={"card"}>
                <a target={"_blank"} rel="noopener noreferrer" href="https://github.com/quentin-pla" className="stretched-link"> </a>
                <div className={"p-3 text-center"}>
                    <img className="img-fluid mb-1" width={180} src={process.env.PUBLIC_URL + "/github.png"} alt={"Github"}/>
                    <h4 className={"date mb-2"}>2017/2022</h4>
                    <h4>Profil GitHub</h4>
                </div>
            </div>
        </>
    );
}

export default Realisations;
