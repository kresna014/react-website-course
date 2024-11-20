import React from "react";
import parse from "html-react-parser";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tutors from "../components/Tutors";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import { homeSection } from "../data/HomeSection";
import { courseSection } from "../data/CourseSection";
import { tutorsSection, tutorsList } from "../data/TutorsSection";
import { partnersSection, partnersList } from "../data/PartnersSection";
import { contactSection } from "../data/ContactSection";

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">

        {/* Home */}

        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>

        {/* online course */}

        <section id="courses">
          <div className="kolom">{parse(courseSection.content)}</div>
          <img src={courseSection.image} />
        </section>

        {/* Tutors */}

        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(tutorsSection.content)}
                </div> 
                <Tutors tutorsList={tutorsList}/>
            </div>
        </section>

        {/* Partners */}

        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(partnersSection.content)}

                </div>
                <Partners partnersList={partnersList} />
            </div>
        </section>

      </div>
      <Contact contactSection={contactSection}/>
      <Footer />
    </>
  );
}

export default Home;
