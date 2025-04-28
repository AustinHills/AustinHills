import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import '../styles.css';

// Assets 
import iconsMedical from '../assets/icons8-medical-50_1icons8-medical-50.png';
import iconsAccount from '../assets/icons8-account-50_1icons8-account-50.png'; 
import ctaBanner from '../assets/CTA-banner.jpg'; 
import ctaBottomVector from '../assets/CTA-bottom-pluse-vector.svg';
import ctaTopEllipse from '../assets/CTA-top-ellipse-shape.svg'; 
import insideVectorSemiSmall from '../assets/Inside-vector-semi-small.svg'; 
import insideVectorSmall from '../assets/Inside-vector-small.svg';
import insideVectorMedium from '../assets/Inside-vector-medium.svg';
import insideVectorLarge from '../assets/Inside-vector-large.svg';
import insideVectorSemiLarge from '../assets/Inside-vector-semi-large.svg';
import outsideVectorLarge from '../assets/Outside-vector-large.svg';

export default function SignInDoctors() {
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

  // When the form is submitted, navigate to the dashboard
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add authentication logic if needed before navigating
    navigate('/dashboard');
  };

  return (
    <div className="signInDoctorsPage">
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
                      <Link to="/doctors-sign-in" className="top-link">
                        FindMyDoc for Professionals
                      </Link>
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
                            <Link to="/" className="brix---header-nav-link w-nav-link">
                              Home
                            </Link>
                          </li>
                          <li className="brix---header-nav-list-item">
                            <Link to="/about" className="brix---header-nav-link w-nav-link">
                              About
                            </Link>
                          </li>
                          <li className="brix---header-nav-list-item">
                            <Link to="/doctors" className="brix---header-nav-link w-nav-link">
                              Doctors
                            </Link>
                          </li>
                          <li className="brix---header-nav-list-item">
                            <Link to="/contact" className="brix---header-nav-link w-nav-link">
                              Contact
                            </Link>
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
              <h1 className="breadcumb-title">Doctor Sign-In</h1>
              <div className="home-page-back-link-wrap">
                <a href="#" className="page-link">Home</a>
                <div className="divider">/</div>
                <div className="page-name">Doctor Sign-In</div>
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
    
      {/* Sign in */}
      <section className="doctor-sign-up">
        <div className="div-block-9">
          <div className="div-block-10">
            <div className="authentication-content-wrap">
              <div className="authentication-title-wrap">
                <h1 className="authentication-title">Hello Doctor!</h1>
                <div className="authentication-sub-title">Enter your details to continue</div>
              </div>
              <div className="validation-input-form-wrap">
                <div className="validation-input-form-block w-form">
                  <form
                    id="wf-form-Password"
                    name="wf-form-Password"
                    data-name="Password"
                    method="get"
                    className="validation-input-form"
                    data-wf-page-id="67b24ffaba87d87186215e5a"
                    data-wf-element-id="6e993745-e15b-05f5-4e2f-fe198a06b420"
                    onSubmit={handleSubmit}
                  >
                    <label htmlFor="Email-Address-2" className="validation-input-field-level">
                      Email Address
                    </label>
                    <input
                      className="varidation-form-text-field w-input"
                      maxLength="256"
                      name="Email-Address-2"
                      data-name="Email Address 2"
                      placeholder="Enter your email"
                      type="email"
                      id="Email-Address-2"
                    />
                    <label htmlFor="Password-2" className="validation-input-field-level">
                      Password
                    </label>
                    <input
                      className="varidation-form-text-field w-input"
                      maxLength="256"
                      name="Password-2"
                      data-name="Password 2"
                      placeholder="Password"
                      type="password"
                      id="Password-2"
                      required
                    />
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="button-primary text-center w-button"
                      value="Log in"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-11">
            <h1 className="heading-5">
              Don&apos;t have an account yet? Claim Your Profile Now
            </h1>
            <Link to="/doctors-sign-up" className="button-primary w-button">
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>
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
      {/* CTA End */}
    
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
