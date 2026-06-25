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
              href="https://wa.me/918587802572"
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
<div className="orserv" >
  <h2 className="services-title">Our Services</h2>
</div>
  <div className="service-grid">

    {/* 1 */}
    <div className="flip-card">
      <div className="flip-inner">

        <div className="flip-front">
          <img src={officesofa} alt="Dry Cleaning" />
        </div>
    {/* BACK IMAGE */}
    <div className="flip-back">
      <img src={sofacleaned} alt="back" />
    </div>
        {/* <div className="flip-back"><h3>Dry Cleaning</h3></div> */}


      </div>
    </div>

    {/* 2 */}
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front">
          <img  src={sofa} alt="Steam Iron" />
        </div>
    {/* BACK IMAGE */}
    <div className="flip-back">
      <img src={officesofacleaned} alt="back" />
    </div>

        {/* <div className="flip-back"><h3>Steam Iron</h3></div> */}
      </div>
    </div>

    {/* 3 */}
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front">
          <img  src={matteresis} alt="Shoe Cleaning" />
        </div>
    {/* BACK IMAGE */}
    <div className="flip-back">
      <img src={matteresiscleaned} alt="back" />
    </div>

        {/* <div className="flip-back"><h3>Shoe Cleaning</h3></div> */}
      </div>
    </div>

    {/* 4 */}
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front">
          <img  src={cushions} alt="Laundry Wash" />
        </div>
    {/* BACK IMAGE */}
    <div className="flip-back">
      <img src={cushionscleaned} alt="back" />
    </div>

        {/* <div className="flip-back"><h3>Laundry Wash</h3></div> */}
      </div>
    </div>

    {/* 5 */}
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front">
          <img  src={chair} alt="Sofa Cleaning" />
        </div>
    {/* BACK IMAGE */}
    <div className="flip-back">
      <img src={chaircleaned} alt="back" />
    </div>

        {/* <div className="flip-back"><h3>Sofa Cleaning</h3></div> */}
      </div>
    </div>

    {/* 6 */}
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front">
          <img  src={carseat} alt="Carpet Cleaning" />
        </div>
    {/* BACK IMAGE */}
    <div className="flip-back">
      <img src={carseatcleaned} alt="back" />
    </div>

        {/* <div className="flip-back"><h3>Carpet Cleaning</h3></div> */}
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