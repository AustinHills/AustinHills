import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import '../styles.css';

// Assets 
import iconsMedical from '../assets/icons8-medical-50_1icons8-medical-50.png';
import iconsAccount from '../assets/icons8-account-50_1icons8-account-50.png'; 
import ctaBanner from '../assets/CTA-banner.jpg'; 
import ctaBottomVector from '../assets/CTA-bottom-pluse-vector.svg';
import ctaTopEllipse from '../assets/CTA-top-ellipse-shape.svg'; 
import contactIllustration from '../assets/contact-illustration-v2-brix-templates.svg';
import checkCircle from '../assets/line-rounded-check-circle-white-brix-templates.svg';

export default function SignUpDoctors() {

  return (
    <div className="signUpDoctorsPage">

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
                                      <Link to="/sign-in" className="link">Account Sign in</Link>
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

                        {/* Sign up */}
                        <div className="signup-doctor">
      <div className="brix---container-default-2 w-container">
        <div className="brix---inner-container-490px-center">
          <div
            data-w-id="35a3a2b8-1da8-30fe-a93c-4d9870d7e7a3"
            style={{
              transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1)',
            }}
            className="brix---text-center"
          >
            <div className="brix---color-neutral-800">
              <h1 className="brix---heading-h1-size">Claim Your Profile</h1>
            </div>
            <div className="brix---mg-bottom-64px">
              <div className="brix---color-neutral-600">
                <p className="brix---paragraph-default">
                  To ensure user safety, please email us to verify your doctor status. Thank you for your understanding!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          data-w-id="35a3a2b8-1da8-30fe-a93c-4d9870d7e7ab"
          style={{
            transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1)',
          }}
          className="w-layout-grid brix---grid-contact-v11"
        >
          <div>
            <div className="w-form">
              {/* You can replace this <form> with a React onSubmit handler if needed */}
              <form
                id="wf-form-BRIX---Contact-V11"
                name="wf-form-BRIX---Contact-V11"
                data-name="BRIX - Contact V11"
                method="get"
                data-wf-page-id="67b2c550796a335d9ccb6318"
                data-wf-element-id="35a3a2b8-1da8-30fe-a93c-4d9870d7e7ae"
              >
                <div className="w-layout-grid brix---form-grid-2-columns">
                  <div>
                    <label
                      htmlFor="BRIX-Contact-Name-V11"
                      className="brix---input-label"
                    >
                      Name
                    </label>
                    <input
                      className="brix---input w-input"
                      maxLength="256"
                      name="BRIX---Contact-Name---V11"
                      data-name="BRIX - Contact Name - V11"
                      placeholder="Full Name"
                      type="text"
                      id="BRIX-Contact-Name-V11"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="BRIX-Contact-Email-V11"
                      className="brix---input-label"
                    >
                      Email
                    </label>
                    <input
                      className="brix---input w-input"
                      maxLength="256"
                      name="BRIX---Contact-Email-V11"
                      data-name="BRIX - Contact Email V11"
                      placeholder="example@email.com"
                      type="email"
                      id="BRIX-Contact-Email-V11"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="BRIX-Contact-Phone-V11"
                      className="brix---input-label"
                    >
                      Phone
                    </label>
                    <input
                      className="brix---input w-input"
                      maxLength="256"
                      name="BRIX---Contact-Email---V11"
                      data-name="BRIX - Contact Email - V11"
                      placeholder="(123) 456 - 789"
                      type="tel"
                      id="BRIX-Contact-Phone-V11"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="BRIX-Contact-Company-V11"
                      className="brix---input-label"
                    >
                      Company
                    </label>
                    <input
                      className="brix---input w-input"
                      maxLength="256"
                      name="BRIX---Contact-Company---V11"
                      data-name="BRIX - Contact Company - V11"
                      placeholder="Facebook"
                      type="text"
                      id="BRIX-Contact-Company-V11"
                    />
                  </div>

                  <div
                    id="w-node-_35a3a2b8-1da8-30fe-a93c-4d9870d7e7c0-9ccb6318"
                  >
                    <label
                      htmlFor="BRIX-Contact-Message-V-13"
                      className="brix---input-label"
                    >
                      Leave us a message
                    </label>
                    <textarea
                      id="BRIX-Contact-Message-V-13"
                      name="BRIX-Contact-Message-V11"
                      maxLength="5000"
                      data-name="BRIX-Contact-Message-V11"
                      placeholder="Please type your message here..."
                      className="brix---text-area w-input"
                    ></textarea>
                  </div>

                  <input
                    type="submit"
                    data-wait="Please wait..."
                    id="w-node-_35a3a2b8-1da8-30fe-a93c-4d9870d7e7c4-9ccb6318"
                    className="primary-button w-button"
                    value="Send Message"
                  />
                </div>
              </form>

              {/* Success Message */}
              <div className="brix---success-message w-form-done">
                <div>
                  <img
                    src={checkCircle}
                    alt="Check - Elements Webflow Library - BRIX Templates"
                    className="brix---icon-success-message-big"
                  />
                  <h3 className="brix---color-neutral-100">Thank you</h3>
                  <div>
                    Thanks for reaching out. We will get back to you soon.
                  </div>
                </div>
              </div>

           
            </div>
          </div>

          <div id="w-node-_35a3a2b8-1da8-30fe-a93c-4d9870d7e7d8-9ccb6318">
            <img
              src={contactIllustration}
              alt="Contact - Elements Webflow Library - BRIX Templates"
            />
          </div>
        </div>
      </div>
    </div>
    {/* Sign in End */}

     
      
                                     {/* CTA Start */}
                            <section className="cta-section padding-bottom-140px">
                              <div className="w-layout-blockcontainer doctors-container w-container">
                                <div className="cta-wrapper center">
                                  <div className="cta-banner-image-wrap">
                                    <img
                                      src={ctaBanner}
                                      loading="lazy"
                                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 46vw, (max-width: 1279px) 460.79168701171875px, (max-width: 1439px) 561.59375px, (max-width: 1919px) 436.3125px, 456.25px"
                                      srcSet={`${ctaBanner} 500w, ${ctaBanner} 700w`}
                                      alt="CTA Banner"
                                      className="cta-banner-image"
                                    />
                                  </div>
                        
                                  <div className="cta-content-wrap">
                                    <div className="cta-content">
                                      <h2 className="cta-section-title cta">
                                        View doctor reviews and share your own.
                                      </h2>
                                      <div className="button-primary-wrap">
                                         <Link to="/doctors" className="button-primary white w-button">
                                                                               VIEW ALL
                                                                             </Link>
                                      </div>
                                    </div>
                        
                                    <img
                                      src={ctaBottomVector}
                                      loading="lazy"
                                      alt="Vector"
                                      className="cta-vector-shape"
                                    />
                                    <img
                                      src={ctaTopEllipse}
                                      loading="lazy"
                                      alt="Ellipse Shape"
                                      className="cta-ellipse-shape"
                                    />
                                  </div>
                                </div>
                              </div>
                            </section>
                            {/* CTA end */}
                        
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
  );
}
