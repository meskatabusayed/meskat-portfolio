import Navbar from "../../components/Navbar/Navbar";
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';
import './contact.css';
import Footer from "../../components/Footer/Footer";

const Contact = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <section className="contact section">
                <h2 className="section__title">
                    Get In <span>Touch</span>
                </h2>

                <div className="contact__container container grid">
                    <div className="contact__data">
                            <h3 className="contact__title">Don't be shy!</h3>

                            <p className="contact__description">
                                Feel free to get in touch with me. I am always open to discussing new projects.
                            </p>
                            <div className="contact__info">
                                <div className="info__item">
                                    <FaEnvelopeOpen className="info__icon"></FaEnvelopeOpen>
                                    <div>
                                        <span className="info__title">Mail me: </span>
                                        <h4 className="info__description">
                                                meskatabusayed@gmail.com
                                        </h4>
                                    </div>

                                    <div className="info__item">
                                    <FaPhoneSquareAlt className="info__icon"></FaPhoneSquareAlt>
                                    <div>
                                        <span className="info__title">Call me : </span>
                                        <h4 className="info__description">
                                                (+88)017*******
                                        </h4>
                                    </div>

                                </div>

                            </div>
                    </div>




                <div className="contact__social">
                    <a href="https://facebook.com" className="contact__social-link">
                        <FaFacebookF></FaFacebookF>
                    </a>
                    <a href="https://twtter.com" className="contact__social-link">
                        <FaTwitter></FaTwitter>
                    </a>
                    <a href="https://linkedin.com" className="contact__social-link">
                        <FaLinkedin></FaLinkedin>
                    </a>
                </div>
                    </div>
                
                <form className="contact__form">
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input
                            type="text"
                            placeholder="Your Name"
                            className="form__control"
                            />
                        </div>
                        <div className="form__input-div">
                            <input
                            type="email"
                            placeholder="Your email"
                            className="form__control"
                            />
                        </div>
                        <div className="form__input-div">
                            <input
                            type="text"
                            placeholder="Your Subject"
                            className="form__control"
                            />
                        </div>
                    </div>

                    <div className="form__input-div">
                        <textarea placeholder="Your Message" 
                        className="form__control textarea"
                        >

                        </textarea>
                    </div>
                        <button className="button">
                            Send Message
                            <span className="button__icon contact__button-icon">
                                <FiSend></FiSend>
                            </span>
                        </button>
                </form>
                </div>
            </section>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Contact;