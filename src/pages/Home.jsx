import "./home.css";
import heroimg from "../assets/heroimage.png";
import heroimage2 from "../assets/heroimage2.png";
import back from "../assets/back.jpeg";

import iconimage from "../assets/allicons.png";
import sofa from "../assets/sofa.png";
import officesofa from "../assets/officesofa.png";
import matteresis from "../assets/matteresis.png";
import cushions from "../assets/cushions.png";
import chair from "../assets/chair.png";
import carseat from "../assets/carseat.png";
import recliner from "../assets/recliner.webp";
import reclinercleaned from "../assets/reclinercleaned.jpg";

import { Link } from "react-router-dom";

import sofacleaned from "../assets/sofacleaned.png";
import officesofacleaned from "../assets/officesofacleaned.png";
import matteresiscleaned from "../assets/matteresiscleaned.png";
import cushionscleaned from "../assets/cushionscleaned.png";
import chaircleaned from "../assets/chaircleaned.png";
import carseatcleaned from "../assets/carseatcleaned.png";

import modiji from "../assets/modiji.png";
import ambani from "../assets/ambani.png";
import akshay from "../assets/akshay.png";

import manyicons from "../assets/manyicons.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export default function Home() {
  return (
    <div className="home">

      <div className="hero" >
        {/* HERO SECTION */}
        <div>
          <div  className="rating-box"> 🌟 4.9/5 Customer Rating 🌟🌟🌟🌟🌟 </div>
          <h1>SOFA DRY CLEANING</h1>
          <h2>At Your Door Step</h2>
          <p>
            Remove Dust, Stains, Germs & Bad Odors with Professional Deep Cleaning Services.
          </p>

          <div className="hero-buttons">


            <Link to="/booknow"  className="btn primary" >
                        Book Now
                    </Link>


            <a
              href="https://wa.me/919319354648"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              Whatsapp Us
            </a>
          </div>



        </div>
        <div className="heroimage">

          {/* <img className="heroim" src={heroimg} /> */}
          <img className="heroim" src={heroimg} />

        </div>
      </div>



     <div className="divformanico" >

</div>
     <div className="divformanic" >
      {/* <h2> How It Works </h2> */}
      <img className="manyicons" src={iconimage} />

     </div>


      {/* SERVICES PREVIEW */}
<section className="services-section">
  <div className="orserv">
    <h2 className="services-title">Our Services</h2>
  </div>

  <div className="service-grid">

    {/* 1 */}
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front imagedryclenaing">
          <img src={officesofa} alt="Office Sofa Cleaning" />
        </div>

        <div className="flip-back imagedryclenaing">
          <img src={sofacleaned} alt="Office Sofa Cleaned" />
        </div>
      </div>
      <h3 className="service-name">Office Sofa Dry Cleaning</h3>
    </div>

    {/* 2 */}
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front imagedryclenaing">
          <img src={sofa} alt="Sofa Cleaning" />
        </div>

        <div className="flip-back imagedryclenaing">
          <img src={officesofacleaned} alt="Sofa Cleaned" />
        </div>
      </div>
      <h3 className="service-name">Sofa Dry Cleaning</h3>
    </div>

    {/* 3 */}
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front imagedryclenaing">
          <img src={matteresis} alt="Mattress Cleaning" />
        </div>

        <div className="flip-back imagedryclenaing" >
          <img src={matteresiscleaned} alt="Mattress Cleaned" />
        </div>
      </div>
      <h3 className="service-name">Mattress Dry Cleaning</h3>
    </div>

    {/* 4 */}
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front imagedryclenaing">
          <img src={cushions} alt="Cushion Cleaning" />
        </div>

        <div className="flip-back imagedryclenaing">
          <img src={cushionscleaned} alt="Cushion Cleaned" />
        </div>
      </div>
      <h3 className="service-name">Cushion Dry Cleaning</h3>
    </div>

    {/* 5 */}
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front imagedryclenaing">
          <img className="imagedryclenaing" src={chair} alt="Chair Cleaning" />
        </div>

        <div className="flip-back imagedryclenaing">
          <img src={chaircleaned} alt="Chair Cleaned" />
        </div>
      </div>
      <h3 className="service-name">Dining Chair Dry Cleaning</h3>
    </div>

    {/* 6 */}
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front imagedryclenaing">
          <img src={carseat} alt="Car Seat Cleaning" />
        </div>

        <div className="flip-back imagedryclenaing">
          <img src={carseatcleaned} alt="Car Seat Cleaned" />
        </div>
      </div>
      <h3 className="service-name">Car Seat Dry Cleaning</h3>
    </div>

    {/* 7 */}
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front imagedryclenaing">
          <img src={recliner} alt="Car Seat Cleaning" />
        </div>

        <div className="flip-back imagedryclenaing">
          <img src={reclinercleaned} alt="Car Seat Cleaned" />
        </div>
      </div>
      <h3 className="service-name">Recliner Sofa Dry Cleaning</h3>
    </div>

  </div>
</section>

<section class="why-us">
    <div class="container">

        <h2>Why Choose JMD Dry Cleaners?</h2>
        <p class="subtitle">
            Professional Dry Cleaning & Home Cleaning Services with
            Quality, Trust & Customer Satisfaction.
        </p>

        <div class="features">

            <div class="feature-card">
                <span>✔</span>
                <h3>Trained & Verified Professionals</h3>
            </div>

            <div class="feature-card">
                <span>✔</span>
                <h3>Eco-Friendly Cleaning Solutions</h3>
            </div>

            <div class="feature-card">
                <span>✔</span>
                <h3>Safe for Kids & Pets</h3>
            </div>

            <div class="feature-card">
                <span>✔</span>
                <h3>Advanced Dry Cleaning Machines</h3>
            </div>

            <div class="feature-card">
                <span>✔</span>
                <h3>Quick Drying (2–6 Hours)</h3>
            </div>

            <div class="feature-card">
                <span>✔</span>
                <h3>Doorstep Service</h3>
            </div>

            <div class="feature-card">
                <span>✔</span>
                <h3>Affordable Pricing</h3>
            </div>

            <div class="feature-card">
                <span>✔</span>
                <h3>100% Customer Satisfaction</h3>
            </div>

            <div class="feature-card">
                <span>✔</span>
                <h3>Same-Day Service Available</h3>
            </div>

            <div class="feature-card">
                <span>✔</span>
                <h3>Free Inspection & Quote</h3>
            </div>

        </div>

    </div>
</section>



     <div className="divformanico" >

<h2> How It Works </h2>
</div>
     <div className="divformanic" >
      {/* <h2> How It Works </h2> */}
      <img className="manyicons" src={manyicons} />

     </div>


<div className="back testimonials-section">
  <div className="testi-header">
    <h2  className="testi-title" > Testimonials </h2>
    <b className="">What Are They Saying About Us</b>
  </div>

  <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">

    <div className="carousel-inner">

      <div className="carousel-item active">
        <div className="testimonial-card">
          <img src={modiji} className="testimonial-img" alt="Narendra Modi" />
          <h3>Narendra Modi</h3>
          <p>"An unforgettable dining experience with divine flavors and exceptional hospitality."</p>
        </div>
      </div>

      <div className="carousel-item">
        <div className="testimonial-card">
          <img src={akshay} className="testimonial-img" alt="Akshay Kumar" />
          <h3>Akshay Kumar</h3>
          <p>"Healthy, delicious, and perfectly crafted meals. Truly inspiring!"</p>
        </div>
      </div>

      <div className="carousel-item">
        <div className="testimonial-card">
          <img src={ambani} className="testimonial-img" alt="Mukesh Ambani" />
          <h3>Mukesh Ambani</h3>
          <p>"Premium quality food with remarkable service. A world-class restaurant."</p>
        </div>
      </div>

    </div>

    {/* Controls */}
    <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>

    <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>

  </div>
</div>



    </div>
  );
}