import React from 'react';
import {Col, Row} from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

function Accueil() {
    return (
        <Row id="accueil" className={"h-100 text-white"}>
            <Col className={"col-12 col-md"}>
                <div id={"bio-container"}>
                    <ScrollAnimation animateIn='animate__animated animate__fadeInUp'
                                     animateOut='animate__animated animate__fadeOutDown'>
                        <h1>Quentin PLA</h1>
                        <h2>Frontend & UX Engineer</h2>
                        <h3>Witivio</h3>
                    </ScrollAnimation>
                </div>
            </Col>
            <Col className="col-12 col-md">
                <div id={"face-container"}>
                    <img className="img-fluid" id="face" src={process.env.PUBLIC_URL + "/moi.webp"} alt={"visage"}/>
                </div>
            </Col>
            <img className="tentacle1 d-none d-md-block" src={process.env.PUBLIC_URL + "/tentacle1.svg"}
                 alt={"tentacle"}/>
            <img className="tentacle2 d-none d-md-block" src={process.env.PUBLIC_URL + "/tentacle2.svg"}
                 alt={"tentacle"}/>
        </Row>
    );
}

export default Accueil;
