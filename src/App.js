import React from 'react';
import './App.css';
import Accueil from './components/Accueil';
import {Container} from "react-bootstrap";
import Parcours from "./components/Parcours";
import Competences from "./components/Competences";
import Experience from "./components/Experience";
import Realisations from "./components/Realisations";
import Contact from "./components/Contact";
import $ from "jquery";
import {XCircleFill} from "react-bootstrap-icons";

function App() {
  return (
      <Container fluid className={"h-100 noselect"}>
          <Sommaire/>
          <Accueil/>
          <Parcours/>
          <Competences/>
          <Experience/>
          <Realisations/>
          <Contact/>
      </Container>
  );
}

function Sommaire() {

    let userClicked = false;

    $(document).ready(function () {

        const anchors = {
            accueil: $("#accueil-anchor"),
            parcours: $("#parcours-anchor"),
            competences: $("#competences-anchor"),
            experience: $("#experience-anchor"),
            realisations: $("#realisations-anchor"),
            contact: $("#contact-anchor")
        };

        $("#summary").click(function () {
            $(this).addClass("opened");
        });

        $(document).on("click", "#close-btn", function () {
            $("#summary").removeClass("opened");
        });

        $("#summary>div>p").click(function (event) {
            userClicked = true;
            handleActiveAnchor($(event.target));
        });

        const maxHeight = $(window).height();

        $(window).scroll(function () {
            handleScrollPosition();
        });

        function handleActiveAnchor(anchor) {
            const active = $("#summary>div>p.active");
            if (anchor.attr("class") !== "active") {
                anchor.addClass("active");
                active.removeClass("active");
            }
        }

        function handleScrollPosition() {
            if (!userClicked) {
                const position = $(window).scrollTop() * 100 / maxHeight;
                if (position < 50) handleActiveAnchor(anchors.accueil);
                else if (position >= 90 && position < 150) handleActiveAnchor(anchors.parcours);
                else if (position >= 190 && position < 250) handleActiveAnchor(anchors.competences);
                else if (position >= 290 && position < 350) handleActiveAnchor(anchors.experience);
                else if (position >= 390 && position < 450) handleActiveAnchor(anchors.realisations);
                else if (position >= 490 && position < 550) handleActiveAnchor(anchors.contact);
            }
        }
    });

    function scrollToAnchor(anchor) {
        $('html,body').animate({scrollTop: $("#"+ anchor).offset().top},'slow',() => {
            setTimeout(function () {
                userClicked = false;
            },100);
        });
    }

    const summaryContent = (
        <div>
            <p id="accueil-anchor"      onClick={()=>scrollToAnchor("accueil")} className={"active"}>Accueil</p>
            <p id="parcours-anchor"     onClick={()=>scrollToAnchor("parcours")} className={""}>Parcours</p>
            <p id="competences-anchor"  onClick={()=>scrollToAnchor("competences")} className={""}>Compétences</p>
            <p id="experience-anchor"   onClick={()=>scrollToAnchor("experience")} className={""}>Expérience</p>
            <p id="realisations-anchor" onClick={()=>scrollToAnchor("realisations")} className={""}>Réalisations</p>
            <p id="contact-anchor"      onClick={()=>scrollToAnchor("contact")} className={""}>Contact</p>
            <div className={"text-right d-block d-md-none"} style={{marginRight:"10px"}}>
                <XCircleFill id="close-btn" size={30}/>
            </div>
        </div>
    );

    return (
        <div id="summary" className={""}>
            {summaryContent}
            <img className={"d-block d-md-none"} width={30} id="obscrax-btn" src={"obscrax.svg"} alt={"bouton"}/>
        </div>
    );
}

export default App;
