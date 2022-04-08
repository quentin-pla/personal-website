import React from "react";
import {Row} from "react-bootstrap";
import {At} from "react-bootstrap-icons";

function Contact() {
    return (
        <Row id={"contact"} className={"justify-content-center text-center"}>
            <div className={"m-auto d-flex"}>
                <div className={"d-flex flex-column align-items-center p-3 text-left"} style={{marginRight: "100px"}}>
                    <img className={"mb-5"} width={150} src={process.env.PUBLIC_URL + "/obscrax.svg"} alt={"email"}/>
                    <a href={"mailto:" + "quentin-pla" + "@" + "hotmail" + ".fr"} className={"contact-item"}>
                        <At size={33}/> quentin-pla<At size={36} id={"fake-at"}/>hotmail.fr
                    </a>
                    <a href="https://github.com/quentin-pla" target="_blank" rel="noopener noreferrer"
                       className={"contact-item"}>
                        <img width={40} className={"p-1"} src={process.env.PUBLIC_URL + "/github-white.png"}
                             alt={"github"}/> quentin-pla
                    </a>
                    <a href="https://www.linkedin.com/in/quentin-pla-447413190/" target="_blank"
                       rel="noopener noreferrer" className={"contact-item"}>
                        <img width={40} className={"p-1"} src={process.env.PUBLIC_URL + "/link-white.png"}
                             alt={"linkedin"}/> Quentin PLA
                    </a>
                </div>
                <div className={"d-flex align-items-center"}>
                    <a className={"cv"} href={"/cv.pdf"} target={"_blank"} referrerPolicy={"noreferrer"}>
                        <img height={500} src={"/cv.webp"} alt={"cv"}/>
                    </a>
                </div>
            </div>
        </Row>
    );
}

export default Contact;
