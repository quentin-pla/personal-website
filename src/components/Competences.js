import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";
import $ from "jquery";
import ScrollAnimation from "react-animate-on-scroll";
import {isMobile} from "react-device-detect";
import Modal from "react-bootstrap/Modal";

class Competences extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeCategory: "",
            modalShow: false
        };

        this.handleCategory = this.handleCategory.bind(this);
    }

    handleCategory(category) {
        this.setState({activeCategory: category, modalShow: true})
    }

    render() {
        if (!isMobile) {
            $(document).ready(function () {
                handleButtonHover();
            });
        }

        function handleButtonHover() {
            let content = $("#category-content");
            let button = $(".category-btn");
            button.hover(function () {
                $(this).children(".gradient-div").css('opacity', '0');
                content.css({'top': '40px', 'max-height': '200px', 'padding': '.5rem 0'});
            }, function () {
                $(this).children(".gradient-div").css('opacity', '1');
                content.css({'top': '20px', 'max-height': '0', 'padding': '0'});
            });
        }

        return (
            <Row id={"competences"} className={"justify-content-center text-center"}>
                <div className={"m-auto"}>
                    <h1>Compétences</h1>
                    <div className={"p-5"}>
                        <Row id="buttons-container" className={"justify-content-center"}>
                            <CategoryBtn
                                handleCategory={this.handleCategory}
                                code={"web"}
                                name={"Web"}
                                delay={0}/>
                            <CategoryBtn
                                handleCategory={this.handleCategory}
                                code={"prog"}
                                name={"Programme"}
                                delay={100}/>
                            <CategoryBtn
                                handleCategory={this.handleCategory}
                                code={"bdd"}
                                name={"Base de données"}
                                delay={200}/>
                            <CategoryBtn
                                handleCategory={this.handleCategory}
                                code={"team"}
                                name={"Travail d'équipe"}
                                delay={300}/>
                        </Row>
                        {!isMobile ?
                            <Row className={"justify-content-center position-absolute"}>
                                <CategoryContent category={this.state.activeCategory}/>
                            </Row>
                            :
                            <Modal show={this.state.modalShow} onHide={() => this.setState({modalShow: false})} size="md" centered>
                                <Modal.Body>
                                    <Row>
                                        <CategoryContent category={this.state.activeCategory}/>
                                    </Row>
                                </Modal.Body>
                            </Modal>
                        }
                    </div>
                </div>
                <img className="tentacle3" src={process.env.PUBLIC_URL + "/tentacle3.svg"} alt={"tentacle"}/>
            </Row>
        );
    }
}

function CategoryBtn(props) {
    return (
        <ScrollAnimation delay={props.delay} animateIn='animate__animated animate__fadeInUp'>
            <div onClick={() => isMobile ? props.handleCategory(props.code) : null}
                 onMouseEnter={() => !isMobile ? props.handleCategory(props.code) : null}
                 className={"d-flex category-btn my-auto"}>
                <div className={"gradient-div d-none d-md-block"}/>
                <div className={"my-auto w-100 position-relative"}>{props.name}</div>
            </div>
        </ScrollAnimation>
    );
}

function CategoryContent(props) { //·
    const content  = {
        "web": [
            ["Langages", "HTML · CSS · JAVASCRIPT · TYPESCRIPT"],
            ["Frameworks", "React · React Native · ASP.NET"],
            ["Librairies", "Bootstrap · Fluent UI · JQuery"],
            ["Outils", "Figma"]
        ],
        "prog": [
            ["Langages", "C++ · JAVA · PYTHON · C#"],
            ["Frameworks", "JAVAFX · Swing"],
        ],
        "bdd": [
            ["Langages", "SQL · PL/SQL"],
            ["SGBD", "MySQL · MariaDB · CosmosDB · MongoDB"],
            ["Outils", "phpMyAdmin · MongoDB Atlas"]
        ],
        "team": [
            ["Versionnage", "Git · GitHub"],
            ["Gestion de projet", "SCRUM · Trello · Azure DevOps"]
        ]
    };

    const categoryNames = {
        "web": "Web",
        "prog": "Programme",
        "bdd": "Base de données",
        "team": "Travail d'équipe"
    };

    const activeContent = content[props.category] ?? null;

    return (
        <div id={"category-content"} className={"d-flex flex-wrap"}>
            <h1 className={"d-block d-md-none"}>{categoryNames[props.category]}</h1>
            {
                activeContent !== null ? activeContent.map((element,index) => {
                    return (
                        <Col key={index} className={"col-12 col-md my-2 my-md-0"}>
                            <h3>{element[0]}</h3>
                            <h4>{element[1]}</h4>
                        </Col>
                    );
                })
                :
                null
            }
        </div>
    );
}

export default Competences;
