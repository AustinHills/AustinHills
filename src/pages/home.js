import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import '../styles.css';

// Assets
import bannerImg from '../assets/banner-dr-img.png';
import rectangleImg from '../assets/hero-one-rectangle_1hero-one-rectangle.png';
import doctorCard from '../assets/dr-cart.png';
import roundedShape from '../assets/hero-oneround-shape.svg';
import iconsMedical from '../assets/icons8-medical-50_1icons8-medical-50.png';
import iconsAccount from '../assets/icons8-account-50_1icons8-account-50.png';
import locationIcon from '../assets/location.svg';
import drIcon from '../assets/dr-icon.svg';
import ellipseTop from '../assets/ellipse-top_1ellipse-top.png';
import ellipseCenter from '../assets/ellipse-center_1ellipse-center.png';
import ellipseBottom from '../assets/ellipse-bottom_1ellipse-bottom.png';
import heroOneround from '../assets/hero-oneround-shape.svg';
import aboutBanner from '../assets/about-banner-image-large.png';
import aboutBannerLarge from '../assets/about-banner-image-large.png';
import aboutBanner500 from '../assets/about-banner-image-large-p-500.png';
import banner2 from '../assets/About-Banner-Image-Two.jpg';
import logo1 from '../assets/medicaid-removebg-preview.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3-removebg-preview.png';
import logo4 from '../assets/logo4-removebg-preview.png';
import medicaidPreview500 from '../assets/medicaid-removebg-preview-p-500.png';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
    // Search form state
    const [search, setSearch] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();
  
    // User state for header conditional rendering
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);
  
    // Updated logout handler: clear local storage and navigate to sign-out page
    const handleLogout = () => {
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
      setUser(null);
      navigate('/sign-out');
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const query = `?name=${encodeURIComponent(search)}&specialty=${encodeURIComponent(specialty)}&location=${encodeURIComponent(location)}`;
      navigate(`/doctors${query}`);
    };
  
    // Logos array
    const logos = [logo1, logo2, logo3, logo4];
  
    const [tooltipData, setTooltipData] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
  
    useEffect(() => {
      fetchPopupContent()
        .then((data) => {
          setTooltipData(data);
        })
        .catch((error) => {
          console.error('Error loading popup:', error);
        });
    }, []);
  
    async function fetchPopupContent() {
      try {
        const response = await fetch(
          'https://findmydocprojectpythonserver-production.up.railway.app/popup-content'
        );
        if (!response.ok) {
          throw new Error('Network response failed');
        }
        return await response.json();
      } catch (error) {
        throw error;
      }
    }
  
    const openPopup = () => setShowPopup(true);
    const closePopup = () => setShowPopup(false);

  return (
    <div className="homePage">
    <Header />

      {/* Hero Begin */}
      <div id="Scroll-Top" className="page-wrapper home-page">
        <div className="main-wrapper">
          <section className="hero-section-one">
            <div className="w-layout-blockcontainer doctors-container w-container">
              <div className="hero-section-one-wrapper">
                <div className="hero-one-content-wrap">
                  <h1 className="hero-title">
                    Find the best <span className="hero-title-span">doctors </span>near you
                  </h1>
                  <p className="hero-title-description">
                    Discover top-rated doctors, read real patient reviews, and leave reviews to help others.
                    FindMyDoc connects you with trusted healthcare professionals to ensure you receive the best care.
                  </p>
                  <img src={doctorCard} alt="Doctor Card" className="dr-list-card" />
                  <img src={roundedShape} alt="Rounded Shape" className="hero-one-rounded-shape" />
                  <div className="dr-dropdown-serach-wrap home-page-search">
                    <div className="dr-dropdown-serach-form-wrap home-page-search-bar-container w-form">
                      <form onSubmit={handleSubmit} className="dr-dropdown-serach-form">
                        {/* Search by Name */}
                        <div className="search-block">
                          <input
                            className="search w-input"
                            maxLength="256"
                            placeholder="Search for a doctor..."
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                          />
                        </div>
                        {/* Location */}
                        <div className="location">
                          <div className="location-icon-wrap">
                            <img src={locationIcon} alt="Location Icon" className="location-icon" />
                          </div>
                          <input
                            className="search location-serach w-input"
                            maxLength="256"
                            placeholder="Search by city..."
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                          />
                        </div>
                        {/* Specialty search */}
                        <div className="speciality">
                          <div className="dr-icon-wrap">
                            <img src={drIcon} alt="Dr Icon" className="dr-icon" />
                          </div>
                          <input
                            type="text"
                            placeholder="Search by specialty"
                            className="filter-input"
                            value={specialty}
                            onChange={(e) => setSpecialty(e.target.value)}
                          />
                        </div>
                        {/* Submit button */}
                        <button type="submit" className="dr-serach-button w-button"></button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="hero-one-banner-wrap">
                  <img src={bannerImg} alt="Banner" className="hero-one-banner-image" />
                </div>
                <img
                  src={rectangleImg}
                  alt="Rectangle Shape"
                  className="hero-bg-rectangle-shape"
                />
              </div>
            </div>
            <div className="hero-section-one-bg-shape"></div>
          </section>
        </div>
      </div>
      {/* Hero End */}

      {/* Service Begin */}
      <section className="service-section section-gap-y-axis-140px">
        <div className="w-layout-blockcontainer doctors-container services-container w-container">
          <div className="service-section-wrapper">
            <div className="section-title-wrap center">
              <div className="section-sub-title">Services</div>
              <h2 className="section-title service">The Best Quality Service You Can Get</h2>
            </div>
            <div className="service-slider-mask">
              <div className="service-slider-item">
                <div className="department-slider-card">
                  <div className="department-icon-wrapper">
                    <img alt="Doctor Icon" src={iconsMedical} className="department-icon" />
                  </div>
                  <div className="department-slider-content">
                    <h3 className="department-name">We help you choose the right doctor</h3>
                    <p className="department-short-details">
                      Easily search, filter, and compare top-rated professionals to get the care you need.
                    </p>
                  </div>
                </div>
              </div>
              <div className="service-slider-item">
                <div className="department-slider-card">
                  <div className="department-icon-wrapper">
                    <img alt="Review Icon" src={iconsAccount} className="department-icon" />
                  </div>
                  <div className="department-slider-content">
                    <h3 className="department-name">Help others choose the right doctor</h3>
                    <p className="department-short-details">
                      Share your experience with a doctor to help guide others in the right direction.
                    </p>
                  </div>
                </div>
              </div>
              <div className="service-slider-item">
                <div className="department-slider-card">
                  <div className="department-icon-wrapper">
                    <img alt="Star Icon" src={heroOneround} className="department-icon" />
                  </div>
                  <div className="department-slider-content">
                    <h3 className="department-name">Give the right doctors some praise</h3>
                    <p className="department-short-details">
                      Found an amazing doctor? Leave them a glowing review to show appreciation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service End */}

      {/* About Us Section */}
      <section className="home-about-section padding-bottom-140px">
        <div className="w-layout-blockcontainer doctors-container w-container">
          <div className="home-about-section-wrapper">
            <div className="home-about-content-wrap">
              <div className="section-sub-title">About Us</div>
              <h2 className="section-title about">Stay Healthy With 100% Treatment</h2>
              <p className="about-description">
                At MedCare, our unwavering commitment to health excellence drives our mission. With a dedicated team of medical experts, cutting-edge research, and a passion for compassionate care.
              </p>
              <div className="our-quality-card-block">
                <div className="our-quality-card-wrap">
                  <div className="counter-number-wrapper">
                    <div
                      style={{
                        transform:
                          "translate3d(0, -400%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="counter-number-block lower-movement"
                    >
                      <div className="counter-number">1</div>
                      <div className="counter-number">2</div>
                      <div className="counter-number">3</div>
                      <div className="counter-number">4</div>
                      <div className="counter-number">1</div>
                    </div>
                    <div
                      style={{
                        transform:
                          "translate3d(0, 400%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="counter-number-block upper-movement"
                    >
                      <div className="counter-number">2</div>
                      <div className="counter-number">0</div>
                      <div className="counter-number">5</div>
                      <div className="counter-number">7</div>
                      <div className="counter-number">2</div>
                    </div>
                    <div
                      style={{
                        transform:
                          "translate3d(0, -400%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="counter-number-block lower-movement"
                    >
                      <div className="counter-number">0</div>
                      <div className="counter-number">8</div>
                      <div className="counter-number">6</div>
                      <div className="counter-number">2</div>
                      <div className="counter-number">0</div>
                    </div>
                    <div className="counter-heading">+</div>
                  </div>
                  <div className="our-quality-title">Doctor Profiles</div>
                </div>
                <div className="our-quality-card-wrap">
                  <div className="counter-number-wrapper">
                    <div
                      style={{
                        transform:
                          "translate3d(0, -400%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="counter-number-block lower-movement"
                    >
                      <div className="counter-number">0</div>
                      <div className="counter-number">8</div>
                      <div className="counter-number">6</div>
                      <div className="counter-number">2</div>
                      <div className="counter-number">0</div>
                    </div>
                    <div
                      style={{
                        transform:
                          "translate3d(0, 400%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="counter-number-block upper-movement"
                    >
                      <div className="counter-number">2</div>
                      <div className="counter-number">0</div>
                      <div className="counter-number">5</div>
                      <div className="counter-number">7</div>
                      <div className="counter-number">5</div>
                    </div>
                    <div className="counter-heading">+</div>
                  </div>
                  <div className="our-quality-title">Partnerships</div>
                </div>
                <div className="our-quality-card-wrap">
                  <div className="counter-number-wrapper">
                    <div
                      style={{
                        transform:
                          "translate3d(0, -400%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="counter-number-block lower-movement"
                    >
                      <div className="counter-number">1</div>
                      <div className="counter-number">2</div>
                      <div className="counter-number">3</div>
                      <div className="counter-number">4</div>
                      <div className="counter-number">1</div>
                    </div>
                    <div
                      style={{
                        transform:
                          "translate3d(0, 400%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="counter-number-block upper-movement"
                    >
                      <div className="counter-number">0</div>
                      <div className="counter-number">0</div>
                      <div className="counter-number">5</div>
                      <div className="counter-number">7</div>
                      <div className="counter-number">0</div>
                    </div>
                    <div
                      style={{
                        transform:
                          "translate3d(0, -400%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="counter-number-block lower-movement"
                    >
                      <div className="counter-number">5</div>
                      <div className="counter-number">4</div>
                      <div className="counter-number">3</div>
                      <div className="counter-number">2</div>
                      <div className="counter-number">0</div>
                    </div>
                    <div className="counter-heading">+</div>
                  </div>
                  <div className="our-quality-title">Reviews</div>
                </div>
                <div className="our-quality-card-wrap">
                  <div className="counter-number-wrapper">
                    <div
                      style={{
                        transform:
                          "translate3d(0, -400%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="counter-number-block lower-movement"
                    >
                      <div className="counter-number">2</div>
                      <div className="counter-number">3</div>
                      <div className="counter-number">4</div>
                      <div className="counter-number">5</div>
                      <div className="counter-number">0</div>
                    </div>
                    <div
                      style={{
                        transform:
                          "translate3d(0, 400%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="counter-number-block upper-movement"
                    >
                      <div className="counter-number">5</div>
                      <div className="counter-number">1</div>
                      <div className="counter-number">2</div>
                      <div className="counter-number">3</div>
                      <div className="counter-number">5</div>
                    </div>
                    <div className="counter-heading">+</div>
                    <div
                      style={{
                        transform:
                          "translate3d(0, 400%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="counter-number-block upper-movement"
                    >
                      <div className="counter-heading">+</div>
                    </div>
                  </div>
                  <div className="our-quality-title">Affiliations</div>
                </div>
              </div>
              <Link to="/about" className="button-outline margin-top-60px w-button">
                Learn More
              </Link>
            </div>
            <div className="home-about-banner-wrap">
              <div className="home-about-banner-image-block">
                <img
                  src={aboutBannerLarge}
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 66vw, (max-width: 991px) 63vw, (max-width: 1279px) 440px, (max-width: 1439px) 565px, (max-width: 1919px) 554px, 627px"
                  srcSet={`${aboutBanner500} 500w, ${aboutBannerLarge} 627w`}
                  alt="Banner"
                  className="home-about-banner-image"
                />
              </div>
              <div className="about-banner-image-two">
                <img src={banner2} loading="lazy" alt="Banner" className="about-banner-two" />
              </div>
              <img src={ellipseTop} loading="lazy" data-w-id="46144528-b755-6ebe-92eb-5081aad50309" alt="Ellipse" className="ab-elipse-shape-top" />
              <img src={ellipseCenter} loading="lazy" data-w-id="46144528-b755-6ebe-92eb-5081aad5030a" alt="Ellipse" className="ab-elipse-shape-center" />
              <img src={ellipseBottom} loading="lazy" data-w-id="46144528-b755-6ebe-92eb-5081aad5030b" alt="Ellipse" className="ab-elipse-shape-bottom" />
            </div>
          </div>
          <div className="w-layout-blockcontainer about-us-video w-container">
            <div className="video w-video w-embed"></div>
          </div>
        </div>
      </section>
      {/* About Us Section End */}

{/* Brand Logo section start */}
     <section className="brand-logo-section padding-bottom-140px">
  <div className="w-layout-blockcontainer doctors-container w-container">
    <div data-w-id="46144528-b755-6ebe-92eb-5081aad50334" className="brand-logo-main-wrapper">
      <div className="brand-logo-animation-wrapper">
        <div className="brand-logo-block">
          <div className="brand-logo-wrapper">
            {logos.map((logo, index) => (
              <div key={index} className="company-logo-block">
                <img
                  src={logo}
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, 180px"
                  alt="Company Logo"
                  className="company-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Brand Logo Section End */}

<Footer />

      {/* Tooltip Section */}
      <button className="help-button" onClick={openPopup}>
        Need Help?
      </button>
      {tooltipData && showPopup && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>
              &times;
            </button>
            <h2>{tooltipData.title}</h2>
            <h3>{tooltipData.content.header}</h3>
            {tooltipData.content.sections.map((section, index) => (
              <div key={index}>
                <h4>{section.title}</h4>
                <p>{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Tooltip End */}
    </div>
  );
}
