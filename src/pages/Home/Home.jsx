import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../assets/meskat.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./home.css"

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
                           - I'm Meskat.    
                            </span> <br />
                            Web Developer
                        </h3>

                        <p className="home__description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, quibusdam debitis totam omnis repellendus rem assumenda optio, sit necessitatibus autem quisquam distinctio nemo excepturi! Beatae facilis error provident corporis. Porro.
                        </p>

                        <Link to="/about">
                        More About Me <span className="button__icon"> <FaArrowRight></FaArrowRight> </span>
                        </Link>

                    </div>

                </div>
            </section>
           
        </div>
    );
};

export default Home;