import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer">
           <div className="part flex flex-col">
                <h3 className="py-2">SCHOOLERS</h3>
                <Link to="/">About</Link>
                <Link to="/">Terms</Link>
                <Link to="/">Privacy</Link>
                <Link to="/">Blog</Link>
           </div>

           <div className="part">
                <h3 className="py-2">RESSOURCES</h3>
                <p><Link to="/">Entrance examination</Link></p>
                <p><Link to="/scholarships">Scholarships</Link></p>

           </div>

            <div className="part">
                <h3 className="py-2">SCHOOLS TYPES</h3>
                <p><Link to="/">Universities</Link></p>
                <p><Link to="/">IPES</Link></p>
                <p><Link to="/">Training center</Link></p>
                <p><Link to="/">Others</Link></p>
           </div>





               <div className="part">
                <h3 className="py-2">GET IN TOUCH</h3>
                <div className="flex flex-row justify-between">
                <p>
                    <a href="#">
                         <i className="fab fa-facebook-f "></i>
                    </a>
                </p>
                <p>
                <a href="#">
                         <i className="fab fa-twitter"></i>
                    </a>
                </p>
                <p>
                <a href="#">
                         <i className="fab fa-linkedin"></i>
                    </a>
                </p>
                <p>
                <a href="#">
                    <i className="fab fa-instagram"></i>
                    </a>
                </p>
               </div>
                
           </div>
        </footer>
    )
} 

export default Footer