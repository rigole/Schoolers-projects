import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
           <div className="part flex flex-col">
                <h3 className="py-2">SCHOOLERS</h3>
                <p>About</p>
                <p>Terms</p>
                <p>Privacy</p>
                <p>Blog</p>
           </div>

           <div className="part">
                <h3 className="py-2">RESSOURCES</h3>
                <p>Entrance examination</p>
                <p>Scholarships</p>

           </div>

            <div className="part">
                <h3 className="py-2">SCHOOLS TYPES</h3>
                <p>Universities</p>
                <p>IPES</p>
                <p>Training center</p>
                <p>Others</p>
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