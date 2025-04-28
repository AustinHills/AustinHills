import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import '../styles.css'

// Assets
import iconsMedical from '../assets/icons8-medical-50_1icons8-medical-50.png';
import iconsAccount from '../assets/icons8-account-50_1icons8-account-50.png';
import aboutHeroBanner from '../assets/About-hero-banner.jpg';  
import ourMissionBanner from '../assets/our-mission-banner.jpg'; 
import ourApartBanner from '../assets/our-apart-banner.jpg'; 
import ctaBanner from '../assets/CTA-banner.jpg'; 
import ctaBottomVector from '../assets/CTA-bottom-pluse-vector.svg';
import ctaTopEllipse from '../assets/CTA-top-ellipse-shape.svg'; 
import insideVectorSemiSmall from '../assets/Inside-vector-semi-small.svg'; 
import insideVectorSmall from '../assets/Inside-vector-small.svg';
import insideVectorMedium from '../assets/Inside-vector-medium.svg';
import insideVectorLarge from '../assets/Inside-vector-large.svg';
import insideVectorSemiLarge from '../assets/Inside-vector-semi-large.svg';
import outsideVectorLarge from '../assets/Outside-vector-large.svg';



export default function About() {
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
    <div className="aboutPage">


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
            <h1 className="breadcumb-title">About Us</h1>
            <div className="home-page-back-link-wrap">
              <a href="#" className="page-link">Home</a>
              <div className="divider">/</div>
              <div className="page-name">About Us</div>
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

      {/* Hero Start */}

      <section className="about-hero-section section-gap-y-axis-140px">
      <div className="w-layout-blockcontainer doctors-container w-container">
        <div className="about-hero-wrapper">
          <h2 className="section-title about-hero">Stay Healthy With 100% Treatment</h2>
          <p className="about-hero-description">
            At MedCare, our unwavering commitment to health excellence drives our mission. With a dedicated team of medical experts, cutting-edge research, and a passion for compassionate care.
          </p>
          <div className="about-hero-banner-image-wrap margin-top-60px">
            <img
              src={aboutHeroBanner}
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 960px, (max-width: 1439px) 1170px, (max-width: 1919px) 1182px, 1372px"
              srcSet={`${aboutHeroBanner} 500w, ${aboutHeroBanner} 800w, ${aboutHeroBanner} 1080w, ${aboutHeroBanner} 1438w`}
              alt="About Hero Banner"
              className="about-hero-banner-image"
            />
          </div>
          <div className="about-us-countdown-wrap margin-top-60px">
            <div className="our-service-count-block about">
              <div className="our-service-counter-number-wrapper about">
                <div className="counter-number-block lower-movement">
                  {[0, 1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="counter-number our-service">{num}</div>
                  ))}
                </div>
                <div className="counter-number-block upper-movement">
                  {[5, 4, 3, 2, 1, 5].map((num) => (
                    <div key={num} className="counter-number our-service">{num}</div>
                  ))}
                </div>
                <div className="counter-heading our-service primary-color">+</div>
              </div>
              <div className="our-service-count-title">Affiliations</div>
            </div>
            <div className="top-align-border"></div>
            <div className="our-service-count-block about">
              <div className="our-service-counter-number-wrapper about">
                <div className="counter-number-block lower-movement">
                  {[12, 4, 3, 2, 1, 0].map((num) => (
                    <div key={num} className="counter-number our-service">{num}</div>
                  ))}
                </div>
                <div className="counter-number-block upper-movement">
                  {[5, 4, 3, 2, 1, 0].map((num) => (
                    <div key={num} className="counter-number our-service">{num}</div>
                  ))}
                </div>
                <div className="counter-heading our-service primary-color">+</div>
              </div>
              <div className="our-service-count-title">Reviews</div>
            </div>
            <div className="top-align-border"></div>
            <div className="our-service-count-block about">
              <div className="our-service-counter-number-wrapper about">
                <div className="counter-number-block lower-movement">
                  {[10, 3, 4, 5, 6].map((num) => (
                    <div key={num} className="counter-number our-service">{num}</div>
                  ))}
                </div>
                <div className="counter-number-block upper-movement">
                  {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                    <div key={num} className="counter-number our-service">{num}</div>
                  ))}
                </div>
                <div className="counter-heading our-service primary-color-span">+</div>
              </div>
              <div className="our-service-count-title">Doctors</div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Hero End */}

      {/* Mission Start */}
      <section className="our-mission-section padding-bottom-140px">
      <div className="w-layout-blockcontainer doctors-container w-container">
        <div className="our-mission-wrapper">
          <div className="our-mission-content-wrap">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-description">
              Our mission is to promote health literacy, facilitate access to quality care, and raise awareness for healthier living through MedCare.
            </p>
            <ul role="list" className="our-misson-item-list-wrap">
              <li className="our-mission-list-item">Empower Informed Decision-Making.</li>
              <li className="our-mission-list-item">Promote health literacy.</li>
              <li className="our-mission-list-item">Foster a supportive community.</li>
              <li className="our-mission-list-item">Facilitate access to quality care.</li>
              <li className="our-mission-list-item">Promote ethical medical practices.</li>
            </ul>
          </div>
          <div className="our-mission-banner-wrap">
            <img
              src={ourMissionBanner}
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 82vw, (max-width: 1279px) 455px, (max-width: 1439px) 575px, (max-width: 1919px) 581px, 676px"
              srcSet={`${ourMissionBanner} 500w, ${ourMissionBanner} 700w`}
              alt="Our Mission Banner Image"
              className="our-mission-banner-image"
            />
          </div>
        </div>
      </div>
    </section>
    {/* Mission End */}

                  {/* Our Part Start */}
    <section className="our-apart-section padding-bottom-140px">
      <div className="w-layout-blockcontainer doctors-container w-container">
        <div className="our-apart-wrapper">
          <div className="our-apart-image-wrap">
            <img
              src={ourApartBanner}
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 81vw, (max-width: 1279px) 465px, (max-width: 1439px) 565px, (max-width: 1919px) 566px, 656px"
              srcSet={`${ourApartBanner} 500w, ${ourApartBanner} 680w`}
              alt="Apart Banner"
              className="our-apart-banner-image"
            />
          </div>
          <div className="our-apart-content-wrap">
            <h2 className="section-title apart">What Sets Us Apart</h2>
            <div className="our-apart-content-block">
              <h3 className="our-apart-sub-title">Trustworthiness</h3>
              <p className="our-apart-description">
                MedCare is committed to delivering accurate and up-to-date medical information. Our content is curated by a team of medical experts, ensuring that you receive information you can rely on.
              </p>
              <h3 className="our-apart-sub-title">Comprehensive Resources</h3>
              <p className="our-apart-description">
                Whether you&apos;re looking for general health advice, information on specific medical conditions, or guidance on healthcare providers in your area, MedCare has you covered.
              </p>
              <h3 className="our-apart-sub-title">Community and Support</h3>
              <p className="our-apart-description">
                MedCare is more than just a website; it&apos;s a community of individuals passionate about health and well-being. Connect with others through our forums, support groups, and social media channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Our Part End */}

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