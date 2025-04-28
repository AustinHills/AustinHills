import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import '../styles.css'

// Assets
import iconsMedical from '../assets/icons8-medical-50_1icons8-medical-50.png';
import iconsAccount from '../assets/icons8-account-50_1icons8-account-50.png';
import insideVectorSemiSmall from '../assets/Inside-vector-semi-small.svg'; 
import insideVectorSmall from '../assets/Inside-vector-small.svg';
import insideVectorMedium from '../assets/Inside-vector-medium.svg';
import insideVectorLarge from '../assets/Inside-vector-large.svg';
import insideVectorSemiLarge from '../assets/Inside-vector-semi-large.svg';
import outsideVectorLarge from '../assets/Outside-vector-large.svg';

export default function Contact() {
        const [user, setUser] = useState(null);
        const navigate = useNavigate();
        
      
        useEffect(() => {
          const storedUser = localStorage.getItem('user');
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          }
        }, []);
      
        const handleLogout = () => {
          localStorage.removeItem('jwt');
          localStorage.removeItem('user');
          setUser(null);
          navigate('/sign-out');
        };

    return (
        <div className="contactPage">

           {/* Header Begin */}
                    <section className="header-section position-absoulate">
                      <div className="header w-nav" role="banner">
                        <div className="top-header">
                          <div className="top-bar header-wrapper">
                            <div className="header-container w-container">
                              <div className="top-bar-flex">
                                <div>
                                  <h1 className="heading">
                                    <span className="text-span">F</span>ind
                                    <span className="text-span-2">M</span>y
                                    <span className="text-span-3">D</span>oc
                                  </h1>
                                  <div className="text-block">Yassir, Amy, Connor, Emily, Austin</div>
                                </div>
                                <div className="phone-menu">
                                  <div className="top-div-box">
                                    <img src={iconsMedical} loading="lazy" alt="" className="top-link-image" />
                                    <Link to="/doctors-sign-in" className="top-link">FindMyDoc for Professionals</Link>
                                  </div>
                                  <div className="top-div-box">
                                    <img src={iconsAccount} loading="lazy" width="74" alt="" className="top-link-image" />
                                    {user ? (
                                      <>
                                        <button className="sign-out" onClick={handleLogout}>
                                          Sign Out
                                        </button>
                                        <Link to="/dashboard" className="dashboard-button">
                                          Dashboard
                                        </Link>
                                      </>
                                    ) : (
                                      <Link to="/sign-in" className="dashboard-button">
                                        Account Sign in
                                      </Link>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                
                            <div className="header-container w-container">
                              <div className="header-content">
                                <Link to="/" className="header-logo w-nav-brand"></Link>
                                <div className="div-block-14">
                                  <nav role="navigation" className="header-men-wrapper w-nav-menu">
                                    <div className="div-block-15">
                                      <ul role="list" className="brix---header-nav-menu-list">
                                        <li className="brix---header-nav-list-item">
                                          <Link to="/" className="brix---header-nav-link w-nav-link">Home</Link>
                                        </li>
                                        <li className="brix---header-nav-list-item">
                                          <Link to="/about" className="brix---header-nav-link w-nav-link">About</Link>
                                        </li>
                                        <li className="brix---header-nav-list-item">
                                          <Link to="/doctors" className="brix---header-nav-link w-nav-link">Doctors</Link>
                                        </li>
                                        <li className="brix---header-nav-list-item">
                                          <Link to="/contact" className="brix---header-nav-link w-nav-link">Contact</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </nav>
                                  <div className="hamburger w-nav-button">
                                    <div className="hamberguer-menu"></div>
                                    <div className="hamburger-menu-bar"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* End Header */}
            
            
                    {/* BreadCrumb Start */}
            
                    <section className="breadcrumb-section">
                  <div className="w-layout-blockcontainer doctors-container w-container">
                    <div className="breadcrumb-wrapper">
                      <div className="breadcrumb-title-block">
                        <h1 className="breadcumb-title">Contact Us</h1>
                        <div className="home-page-back-link-wrap">
                          <a href="#" className="page-link">Home</a>
                          <div className="divider">/</div>
                          <div className="page-name">Contact Us</div>
                        </div>
                      </div>
            
                      <div className="breadcrumb-shape-block">
                        <div className="inside-vector-wrap">
                          <img
                            src={insideVectorSemiSmall}
                            loading="lazy"
                            alt="Vector"
                            className="inside-vector-semi-small"
                          />
                          <img
                            src={insideVectorSmall}
                            loading="lazy"
                            alt="Vector"
                            className="inside-vector-small"
                          />
                          <img
                            src={insideVectorMedium}
                            loading="lazy"
                            alt="Vector"
                            className="inside-vector-medium"
                          />
                          <img
                            src={insideVectorLarge}
                            loading="lazy"
                            alt="Vector"
                            className="inside-vector-large"
                          />
                          <img
                            src={insideVectorSemiLarge}
                            loading="lazy"
                            alt="Vector"
                            className="inside-vector-semi-large"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
            
                  <img
                    src={outsideVectorLarge}
                    loading="lazy"
                    alt="Vector"
                    className="outside-vector-large"
                  />
                </section>
                    {/* BreadCrumb end */}


                    {/* Contact Form Start*/}
                    <section id="Contact" className="contact-form-section section-gap-y-axis-140px">
      <div className="w-layout-blockcontainer doctors-container w-container">
        <div className="contact-form-wrapper">
          <div className="section-title-wrap align-center margin-bottom-60px">
            <div className="section-sub-title">Get in Touch</div>
            <h2 className="section-title contact-form">
              Contact Us for Personalized Assistance and Quick Resolutions.
            </h2>
          </div>

          {/* Contact Form */}
          <div className="contact-input-form-block">
            <div className="contact-form-input-block w-form">
              <form
                id="Email-Form"
                name="wf-form-Email-Form"
                data-name="Email Form"
                method="get"
                className="contact-form"
              >
                <div className="contact-input-field-grid">
                  <input
                    className="contact-input-field w-input"
                    maxlength="256"
                    name="name"
                    data-name="Name"
                    placeholder="Your name"
                    type="text"
                    id="name"
                  />
                  <input
                    className="contact-input-field w-input"
                    maxlength="256"
                    name="Email"
                    data-name="Email"
                    placeholder="Enter your email"
                    type="email"
                    id="Email"
                    required
                  />
                  <input
                    className="contact-input-field w-input"
                    maxlength="256"
                    name="Phone"
                    data-name="Phone"
                    placeholder="Your phone number"
                    type="tel"
                    id="Phone"
                    required
                  />
                  <input
                    className="contact-input-field w-input"
                    maxlength="256"
                    name="Subject"
                    data-name="Subject"
                    placeholder="Write your Subject"
                    type="tel"
                    id="Subject"
                    required
                  />
                </div>
                <textarea
                  placeholder="Write your message..."
                  maxlength="5000"
                  id="field"
                  name="field"
                  data-name="Field"
                  className="contact-input-textaria w-input"
                ></textarea>
                <input
                  type="submit"
                  data-wait="Please wait..."
                  className="button-primary center w-button"
                  value="Send Message"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
            {/* End Contact Form */}

                  {/* Footer Section Start */}
                  <section className="footer-section">
        <div className="w-layout-blockcontainer doctors-container footer-container w-container">
          <div className="footer-block-wrapper">
            <div data-w-id="930cbbf2-e22c-508e-4443-ba9f31767a12" className="footer-content">
              <div id="w-node-_930cbbf2-e22c-508e-4443-ba9f31767a13-31767a0f" className="footer-block">
                <a href="#" className="footer-logo-link-block w-inline-block">
                  <h1 className="heading">
                    <span className="text-span">F</span>ind
                    <span className="text-span-2">M</span>y
                    <span className="text-span-3">D</span>oc
                  </h1>
                </a>
                <div className="footer-address">
                  Empowering wellness through knowledge and care
                </div>
              </div>
             
            </div>
            <div data-w-id="930cbbf2-e22c-508e-4443-ba9f31767a4d" className="copy-right-block">
              <div className="footer-copyright-center">
                Copyright ©{' '}
                <a href="#" className="template-link">
                  FindMyDoc
                </a>
                | Designed by{' '}
                <a href="#" target="_blank" rel="noopener noreferrer" className="brandbes-link">
                  Amy, Yassir, Austin, Ayman, Connor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section End */}


        </div>


)}