/* eslint-disable react/no-unescaped-entities */
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {

    return (
        <>
            <section id="connect" className="footer-sec pt-5 pb-5">
                <div className="footer-tagline text-center">
                    <h1 className="text-center">Let's Get In Touch</h1>
                </div>
                <div className="footer-logo mt-md-5 mt-3">
                    <a href="http://twitter.com/Prathamtwts" target="_blank" rel="noopener noreferrer"><FaXTwitter className="icon twitter-icon" size="3rem" /></a>
                    <a href="http://github.com/PrathamPatel010" target="_blank" rel="noopener noreferrer"><BsGithub className="icon github-icon" size="3rem" /></a>
                    <a href="http://www.linkedin.com/in/pratham-patel-08865821b" target="_blank" rel="noopener noreferrer"><BsLinkedin className="icon linkedin-icon" size="3rem" /></a>
                </div>
                <div className="copyright-div pt-5">
                    <small>©Copyright {new Date().getFullYear()}-Pratham Patel. All rights reserved.</small>
                </div>
            </section>
        </>
    )
}

export default Footer;