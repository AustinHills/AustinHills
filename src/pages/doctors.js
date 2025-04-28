import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

// Assets
import iconsMedical from '../assets/icons8-medical-50_1icons8-medical-50.png';
import iconsAccount from '../assets/icons8-account-50_1icons8-account-50.png';
import insideVectorSemiSmall from '../assets/Inside-vector-semi-small.svg'; 
import insideVectorSmall from '../assets/Inside-vector-small.svg';
import insideVectorMedium from '../assets/Inside-vector-medium.svg';
import insideVectorLarge from '../assets/Inside-vector-large.svg';
import insideVectorSemiLarge from '../assets/Inside-vector-semi-large.svg';
import outsideVectorLarge from '../assets/Outside-vector-large.svg';
import locationIcon from '../assets/location.svg';
import drIcon from '../assets/dr-icon.svg';
import Header from '../components/header';
import Footer from '../components/footer';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Doctors() {
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
  const query = useQuery();

  // States for fetched data and status
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // States for filters
  const [search, setSearch] = useState(query.get("name") || "");
  const [specialty, setSpecialty] = useState(query.get("specialty") || "");
  const [location, setLocation] = useState(query.get("location") || "");

  // Pagination state
  const [page, setPage] = useState(1);
  const doctorsPerPage = 15;

  // Base URL for Strapi images
  const strapiBaseUrl = "https://findmydocmain-production.up.railway.app";

  // Fetch doctors data on mount
  useEffect(() => {
    fetch(`${strapiBaseUrl}/api/doctors?populate=*&pagination[pageSize]=100`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setDoctors(data.data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setError(err);
        setLoading(false);
      });
  }, [strapiBaseUrl]);



  const startIndex = (page - 1) * doctorsPerPage;
  const endIndex = startIndex + doctorsPerPage;

  const filteredDoctors = doctors.filter(doctor => {
    const name = doctor.title?.toLowerCase() || '';
    const spec = doctor.specialty?.toLowerCase() || '';
    const loc = doctor.Location?.toLowerCase() || '';

    const searchMatch = name.includes(search.toLowerCase());
    const specialtyMatch = specialty ? spec.includes(specialty.toLowerCase()) : true;
    const locationMatch = location ? loc.includes(location.toLowerCase()) : true;

    return searchMatch && specialtyMatch && locationMatch;
  });

  const paginatedDoctors = filteredDoctors.slice(startIndex, endIndex);

  return (
    <>
      <Header />


      {/* Breadcrumb Section */}
      <section className="breadcrumb-section-doctor">
        <div className="w-layout-blockcontainer doctors-container w-container">
          <div className="breadcrumb-wrapper">
            <div className="breadcrumb-title-block">
              <h1 className="breadcumb-title">Doctors</h1>
              <div className="home-page-back-link-wrap">
                <Link to="/" className="page-link">Home</Link>
                <div className="divider">/</div>
                <div className="page-name">Doctors</div>
              </div>
            </div>
            <div className="breadcrumb-shape-block">
              <div className="inside-vector-wrap">
                <img src={insideVectorSemiSmall} loading="lazy" alt="Vector" className="inside-vector-semi-small" />
                <img src={insideVectorSmall} loading="lazy" alt="Vector" className="inside-vector-small" />
                <img src={insideVectorMedium} loading="lazy" alt="Vector" className="inside-vector-medium" />
                <img src={insideVectorLarge} loading="lazy" alt="Vector" className="inside-vector-large" />
                <img src={insideVectorSemiLarge} loading="lazy" alt="Vector" className="inside-vector-semi-large" />
              </div>
            </div>
          </div>
        </div>
        <img src={outsideVectorLarge} loading="lazy" alt="Vector" className="outside-vector-large" />
      </section>

      {/* Main Content Section */}
      <section>
        <div className="doctors-search-container">
          <div className="filters">
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
          </div>

          {/* Doctor Cards List */}
          <div className="doctorCardsContainer">
            {paginatedDoctors.map(doctor => {
              const rawUrl = doctor.image?.url;
              const imageUrl = rawUrl?.startsWith('http')
                ? rawUrl
                : rawUrl
                  ? strapiBaseUrl + rawUrl
                  : 'https://via.placeholder.com/150';

              return (
                <div key={doctor.id} className="doctorCard">
                  {/* Avatar Section */}
                  <div className="doctorCardAvatar">
                    <img 
                      src={imageUrl} 
                      alt={doctor.title} 
                      className="doctorCardAvatarImage" 
                    />
                  </div>

                  {/* Info Section */}
                  <div className="doctorCardInfo">
                    <h2 className="doctorCardName">{doctor.title}</h2>
                    <p className="doctorCardSpecialty">{doctor.specialty}</p>
                    <p className="doctorCardSpecialty">{doctor.city}</p>
                    <div className="doctorCardRating">
                      Rating: ⭐ {doctor.rating}
                    </div>
                  </div>

                  {/* Link Section */}
                  <div className="doctorCardLink">
                  <Link to={`/doctorsDetails/${doctor.documentId}`} className="doctorCardProfileLink">
                 View Profile
                    </Link>


                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
            <div className="pagination">
              <button 
                className="back-button" 
                onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                disabled={page === 1}
              >
                &larr;
              </button>
              <span>Page {page}</span>
              <button
                className="next-button"
                onClick={() => setPage(prev => prev + 1)}
                disabled={endIndex >= filteredDoctors.length}
              >
                &rarr;
              </button>
            </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

