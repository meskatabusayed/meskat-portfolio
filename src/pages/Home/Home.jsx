
import Profile from "../../assets/meskat.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./home.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
             
            <section className="home section grid">
                <img src={Profile} alt="Profile" className="home__img"/>
                <div className="home__content">
                    <div className="home__data">
                        <h3 className="home__title">
                            <span>
                           I'm Meskat.    
                            </span> <br />
                            Web Developer
                        </h3>

                        <p className="home__description">
                           I'm a Meskat Mohammad Abu Sayed based web developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
                        </p>

                        <Link to="/about" className="button">
                        More About Me <span className="button__icon"> <FaArrowRight></FaArrowRight> </span>
                        </Link>

                    </div>

                </div>
                <div className="color__block">

                </div>
            </section>
           <div>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;