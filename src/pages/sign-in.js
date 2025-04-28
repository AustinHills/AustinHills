import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles.css';

// Assets
import iconsMedical from '../assets/icons8-medical-50_1icons8-medical-50.png';
import iconsAccount from '../assets/icons8-account-50_1icons8-account-50.png';
import ctaBanner from '../assets/CTA-banner.jpg';
import ctaBottomVector from '../assets/CTA-bottom-pluse-vector.svg';
import ctaTopEllipse from '../assets/CTA-top-ellipse-shape.svg';
import authBanner from '../assets/authentication--banner.jpg';
import insideVectorSemiSmall from '../assets/Inside-vector-semi-small.svg';
import insideVectorSmall from '../assets/Inside-vector-small.svg';
import insideVectorMedium from '../assets/Inside-vector-medium.svg';
import insideVectorLarge from '../assets/Inside-vector-large.svg';
import insideVectorSemiLarge from '../assets/Inside-vector-semi-large.svg';
import outsideVectorLarge from '../assets/Outside-vector-large.svg';
import Header from '../components/header';
import Footer from '../components/footer';

export default function SignIn() {
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();

    // Get input values via document.querySelector
    const emailInput = document.querySelector("#Email-Address");
    const passwordInput = document.querySelector("#Password");

    const email = emailInput ? emailInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value.trim() : '';

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch("https://findmydocmain-production.up.railway.app/api/auth/local", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ identifier: email, password: password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed. Please try again.");
      }

      console.log("Login successful:", data);

      // Store user token
      localStorage.setItem("jwt", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to dashboard or home page
      navigate("/"); // Adjust this route as needed
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="signInPage">
      <Header />

      {/* BreadCrumb Start */}
      <section className="breadcrumb-section-signin">
        <div className="w-layout-blockcontainer doctors-container w-container">
          <div className="breadcrumb-wrapper">
            <div className="breadcrumb-title-block">
              <h1 className="breadcumb-title">Sign-In</h1>
              <div className="home-page-back-link-wrap">
                <a href="#" className="page-link">Home</a>
                <div className="divider">/</div>
                <div className="page-name">Sign-In</div>
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

      {/* Sign In Form */}
      <div className="main-wrapper sign-in-wrapper">
        {/* Authentication Section */}
        <section className="authentication-section position-absolute d-flex">
          <div className="w-layout-blockcontainer doctors-container position-absolute w-container">
            <div className="authentication-form-wrapper">
              {/* Authentication Content Wrap */}
              <div className="authentication-content-wrap">
                <div className="authentication-title-wrap">
                  <h1 className="authentication-title">Login to Your Account</h1>
                  <div className="authentication-sub-title">Enter your details to continue</div>
                </div>

                {/* Validation Input Form */}
                <div className="validation-input-form-wrap">
                  <div className="validation-input-form-block w-form">
                    <form
                      id="wf-form-Password"
                      name="wf-form-Password"
                      data-name="Password"
                      method="get"
                      className="validation-input-form"
                    >
                      <label htmlFor="Email-Address" className="validation-input-field-level">
                        Email Address
                      </label>
                      <input
                        className="varidation-form-text-field w-input"
                        maxLength="256"
                        name="Email-Address"
                        data-name="Email Address"
                        placeholder="Enter your email"
                        type="email"
                        id="Email-Address"
                      />
                      <label htmlFor="Password" className="validation-input-field-level">
                        Password
                      </label>
                      <input
                        className="varidation-form-text-field w-input"
                        maxLength="256"
                        name="Password"
                        data-name="Password"
                        placeholder="Password"
                        type="password"
                        id="Password"
                        required
                      />
                      <div className="login-condition-block">
                        <div className="login-conditon-title">Don't have an account? </div>
                        <Link to="/sign-up" className="register-link">Register</Link>
                      </div>
                      <button
                        id="signin-btn"
                        className="button-primary text-center w-button"
                        value="Log in"
                        onClick={handleSignIn}
                      >
                        Sign In
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="authentication-banner">
            <img
              src={authBanner}
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, (max-width: 1439px) 55vw, 43vw"
              srcSet={`${authBanner} 500w, ${authBanner} 800w, ${authBanner} 950w`}
              alt="Authentication Banner"
              className="authentication-banner-image"
            />
          </div>
        </section>
      </div>
      {/* Sign In Form End */}

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
                  <a href="doctors.html" className="button-primary white w-button">VIEW ALL</a>
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

      <Footer />
    </div>
  );
}
