import React from "react";
import {Row,Col} from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import ReactSwipe from 'react-swipe';

function Experiences() {
    return (
        <Row id={"experience"} className={"justify-content-center text-center"}>
            <Col className={"m-auto px-0"}>
                <h1 className={"mb-5"}>Expériences</h1>
                <ScrollAnimation animateIn='animate__animated animate__fadeIn'>
                    <div className={"justify-content-center d-none d-md-flex"}>
                        <Cards/>
                    </div>
                    <div className={"d-block d-md-none"}>
                        <Carousel/>
                    </div>
                </ScrollAnimation>
            </Col>
            <img className="tentacle2" src={process.env.PUBLIC_URL + "/tentacle2.svg"} alt={"tentacle"}/>
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
                <a target={"_blank"} rel="noopener noreferrer" href="https://www.laprovence.com/" className="stretched-link"> </a>
                <div id="laprovence-top" className={"top"}>
                    <img className="img-fluid mb-1" width={230} src={process.env.PUBLIC_URL + "/logo-laprovence.jpg"} alt={"laProvence"}/>
                </div>
                <div id="laprovence" className={"body pt-1"}>
                    <h4 className={"date mb-2"}>2019</h4>
                    <h4 className={"stage m-0"}>• CDD 1 mois (Juillet)</h4>
                    <h4 className={"stage mb-3"}>• Stage 2 mois (Avril)</h4>
                    <h4 className={"desc"}>Aide à la réalisation d’une application web Laravel pour le portage de journaux</h4>
                </div>
            </div>
            <div className={"card"}>
                <a target={"_blank"} rel="noopener noreferrer" href="https://www.buvettedulac.fr/" className="stretched-link"> </a>
                <div id="buvettedulac-top" className={"top"}>
                    <img className="img-fluid" width={80} src={process.env.PUBLIC_URL + "/logo-buvette.PNG"} alt={"Buvettedulac"}/>
                </div>
                <div id="buvettedulac" className={"body pt-2"}>
                    <h4 className={"date mb-2"}>2020</h4>
                    <h4 className={"desc"}>Réalisation d’une application web REACT permettant de gérer les menus du jour d'une buvette</h4>
                </div>
            </div>
            <div className={"card"}>
                <a target={"_blank"} rel="noopener noreferrer" href="https://cc7.company/" className="stretched-link"> </a>
                <div id="cc7-top" className={"top"}>
                    <img className="img-fluid" width={110} src={process.env.PUBLIC_URL + "/cc7-logo.svg"} alt={"CC7"}/>
                </div>
                <div id="cc7" className={"body pt-2"}>
                    <h4 className={"date mb-2"}>2020</h4>
                    <h4 className={"desc"}>Réalisation d’une application web REACT de vente de créations uniques</h4>
                </div>
            </div>
            <div className={"card"}>
                <a target={"_blank"} rel="noopener noreferrer" href="https://www.linkedin.com/in/quentin-pla-447413190/" className="stretched-link"> </a>
                <div id="linkedin-top" className={"top"}>
                    <img className="img-fluid" width={110} src={process.env.PUBLIC_URL + "/link.png"} alt={"linkedin"}/>
                </div>
                <div id="linkedin" className={"body pt-2"}>
                    <h4 className={"date mb-2"}>2017/2020</h4>
                    <h4 className={"desc"}>Profil LinkedIn présentant mon expérience depuis 2017</h4>
                </div>
            </div>
        </>
    )
}

export default Experiences;
