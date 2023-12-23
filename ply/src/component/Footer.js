import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container1">
                    <div className="row">
                        <div className="col" id="company">
                            <img src="https://th.bing.com/th/id/OIP.IafbOW93ldb1o6oL3CypfAAAAA?w=282&h=169&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="logo" />
                            <p>
                                A.S. Trade Links has been the front-runner in applying innovation at work. This simple philosophy has been the cornerstone of all our processes and technologies.
                            </p>
                            <div className="social">
                                <a href="/"><i className="fab fa-facebook"></i></a>
                                <a href="/"><i className="fab fa-instagram"></i></a>
                                <a href="/"><i className="fab fa-youtube"></i></a>
                                <a href="/"><i className="fab fa-twitter"></i></a>
                                <a href="/"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>


                        <div className="col" id="services">
                            <h2>Products</h2>
                            <div className="links">
                                <a href="/">Plywood</a>
                                <a href="/">Veneers</a>
                                <a href="/">Veneers</a>
                                <a href="/">Doors</a>
                                <a href="/">Face Veneer</a>
                                <a href="/">PVC Boards</a>
                                <a href="/">Laminates</a>
                            </div>
                        </div>

                        <div className="col" id="useful-links">
                            <h2>More</h2>
                            <div className="links">
                                <a href="/">About</a>
                                <a href="/">Services</a>
                                <a href="/">Our Policy</a>
                                <a href="/">Contact Us</a>
                                <a href="/">Careers</a>
                                <a href="/">Privacy Policy</a>
                                <a href="/">About CSR</a>
                            </div>
                        </div>

                        <div className="col" id="contact">
                            <h2>Contact</h2>
                            <div className="contact-details">
                                <i className="fa fa-location"></i>
                                <p>Shop no. 1, Mayur Complex, <br /> Sector 6, Parwanoo</p>
                            </div>
                            <div className="contact-details">
                                <i className="fa fa-phone"></i>
                                <p>+91-8082058605</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form">
                            <form action="">
                                <input type="text" placeholder="Email here..." />
                                <button><i className="fa fa-paper-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr className='hr1' />
                <p id="copyright">© 1996-2023,<a href='/'> A.S. Trade Links.com </a>, Inc. or its affiliates</p>
            </footer>
        </>
    )
}
export default Footer