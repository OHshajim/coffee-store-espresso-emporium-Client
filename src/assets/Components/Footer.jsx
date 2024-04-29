import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <div className="bg-[url('../more/13.jpg')] flex mt-20">
                <div className=" flex flex-col sm:flex-row justify-between items-center max-w-[1600px] mx-auto py-20 gap-10">
                    <div>
                        <img src="../more/logo.png" alt="" className="w-16" />
                        <h1 className="text-2xl md:text-4xl  mt-4">Espresso Emporium</h1>
                        <p className="mt-3">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-4xl ">Get in Touch</h1>
                        <div className="flex gap-3 text-2xl my-3"><FaFacebook /><FaInstagram /><FaGithub /> <FaLinkedin /></div>
                        <p className="flex items-center gap-2 mt-2"><IoCall className="text-lg" /> +88 01700 000 555</p>
                        <p className="flex items-center gap-2 mt-2"><MdEmail className="text-lg" /> Coffee@gmail.com</p>
                        <p className="flex items-center gap-2 mt-2"><CiLocationOn className="text-lg" />36, Brahmondi, Dhaka</p>
                    </div>
                </div>
            </div>
            <footer className="footer footer-center p-2 text-white bg-[url('../more/24.jpg')] ">
                <aside>
                    <h4>Copyright Espresso Emporium ! All Rights Reserved</h4>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;