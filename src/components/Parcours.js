import {Col, Row} from "react-bootstrap";
import React from "react";
import {CheckCircleFill, CircleFill} from "react-bootstrap-icons";
import ScrollAnimation from "react-animate-on-scroll";
import $ from "jquery";
import {isMobile} from "react-device-detect";

function Parcours() {
    const defaultTop = {first: 192, second: -74, third: 116, fourth: -151, fifth: 40};
    let savedOrder = undefined;
    const defaultViewWidth = 1440;

    $(document).ready(function () {
        resizeParcours();

        $(".step-container").hover(
            function () {
                const classes = $(this).attr("class");
                savedOrder = classes.split(' ')[2];
                let extra = isMobile ? 42 : 23;
                const top = (classes.includes("up") ? defaultTop[savedOrder] + extra : defaultTop[savedOrder] - extra);
                let scale = 1.2;
                if (isMobile) scale = 1.5;
                $(this).css("transform","scale(" + scale + ")");
                $(this).css("top","calc(40% + " + top + "px");
            },
            function () {
                let top = defaultTop[savedOrder];
                $(this).css("transform","rotateX(30deg) rotateY(-36deg)");
                $(this).css("top","calc(40% + " + top + "px");
            }
        );

        $(window).resize(function(){
            resizeParcours();
        });
    });

    function resizeParcours() {
        const width = $(window).width();
        if (width > 768) {
            const scale = (((width * 100) / defaultViewWidth)) + "%";
            const xGap = -200 + Math.round(((width * 100) / defaultViewWidth)*2) + "px";
            $("#responsive-step").css("transform","scale(" + scale + ") translateX(" + xGap + ")");
        } else {
            const scale = 60 + ((width * 60 / 375) - 60)/2 + "%";
            const yGap = -Math.round(width * 20 / 375) + "px";
            $("#responsive-step").css("transform","scale(" + scale + ") translateY(" + yGap + ")");
        }
    }

    return (
        <Row id={"parcours"} className={"h-100"}>
            <Col className={"col-12 col-md"}>
                <div id={"parcours-container"}>
                    <h1>Parcours</h1>
                    <h3>Passionné dans les domaines du design, web et applications mobiles, je souhaiterais devenir
                        développeur front end.</h3>
                </div>
            </Col>
            <Col className={"col-12 col-md"} id={"responsive-step"}>
                <ScrollAnimation animateIn='animate__animated animate__fadeIn' animateOnce={true} offset={1000}>
                    <div className={"step-container up first"}>
                        <h1>BAC STI2D</h1>
                        <h2>2017</h2>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__animated animate__fadeIn' animateOnce={true} offset={1000}>
                    <div className={"step-container up third"}>
                        <h1>LICENCE 3 INFOR-<br/>MATIQUE</h1>
                        <h2>2019/2020</h2>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__animated animate__fadeIn' animateOnce={true} offset={1000}>
                    <div className={"step-container up fifth"}>
                        <h1>SOFTWARE<br/>DEVELOPER</h1>
                        <h2>2021/{new Date().getFullYear()}</h2>
                        <CheckIcon/>
                    </div>
                </ScrollAnimation>

                <img id="road" src={process.env.PUBLIC_URL + "/road.svg"} width={100} alt={"route"}/>

                <ScrollAnimation animateIn='animate__animated animate__fadeIn' animateOnce={true} offset={1000}>
                <div className={"step-container down second"}>
                    <h1>DUT INFOR-<br/>MATIQUE</h1>
                    <h2>2017/2019</h2>
                </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn='animate__animated animate__fadeIn' animateOnce={true} offset={1000}>
                    <div className={"step-container down fourth"}>
                        <h1>MASTER 1 INFOR-<br/>MATIQUE</h1>
                        <h2>2020/2021</h2>
                    </div>
                </ScrollAnimation>
            </Col>
        </Row>
    );
}

function CheckIcon() {
    return (
        <div className={"step-icon"}>
            <CircleFill size={20} color={"white"}/>
            <CheckCircleFill size={20} color={"#50ba69"}/>
        </div>
    );
}

export default Parcours;
