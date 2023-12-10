import Info from "../../components/Info";
import Navbar from "../../components/Navbar/Navbar";
import { FaDownload } from "react-icons/fa";
import resume from '../../assets/Resume_2.pdf';
import Status from "../../components/Status";
import './about.css';
import Skills from "../../components/Skills";
import { resumes } from "../../data";
import ResumeItem from "../../components/ResumeItem";

const About = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <main className="section container">
                <section className="about">
                    <h2 className="section__title">
                        About <span>Me</span>
                    </h2>

                    <div className="about__container grid">
                        <div className="about__info">
                            <h3 className="section__subtitle">Personal Infos</h3>
                            <ul className="info__list grid">
                                <Info></Info>
                            </ul>

                            <a href={resume} download='' className="button">Download CV <span className="button__icon"> <FaDownload /> </span>
                            </a>
                        </div>


                    <div className="status grid">
                        <Status></Status>

                    </div>
                    </div>
                </section>

                <div className="separator">

                </div>

                <section className="skills">
                    <h3 className="section__subtitle subtitle__center">My Skills</h3>

                    <div className="skills__container grid">
                        <Skills></Skills>
                    </div>
                </section>

                <div className="separator"></div>

                <section className="resume">
                    <h3 className="section__subtitle subtitle__center">Experience & Education</h3>

                    <div className="resume__container grid">
                        <div className="resume__data">
                            {
                                resumes.map((val) => {
                                    return <ResumeItem key={val.id}></ResumeItem>
                                })
                            }
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default About;