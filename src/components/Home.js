import React from "react";
import Impact from "../components/Impact";
import women from "../women.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "./Contact";
import Card from "./Card";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Navbar />
      <div class="jumbotron ">
        <h1 class="display-4 text-center">
          <strong>
            <span style={{ color: "#f8841e" }}>Kholosa's</span>{" "}
            <span style={{ color: "#db2b7b" }}>Sanitary</span>{" "}
            <span style={{ color: "#4f419a" }}>Pads</span>{" "}
            <span style={{ color: "black" }}>Organisation</span>
          </strong>
        </h1>

        <p class="lead my-4 text-center">
          <strong>A helping hand is more blessed than a recieving hand.</strong>
        </p>
        <button
          class="btn btn-primary btn-lg text-center"
          data-bs-toggle="modal"
          data-bs-target="#enroll"
        >
          Lend a Hand
        </button>
      </div>

      <div className="about container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="mission  mt-5">
              
                <h1 style={{ textAlign: "center", color: "#635bfb" }} className="font-weight-bold">
                <strong>Mission</strong>
                </h1>
              
              <p className="text-center " style={{ fontFamily: "Uchen" }}>
                We continue to commit ourselves to advocate for the rights of
                girls who are not able to access sanitary towels especially in
                these uncertain times of covid-19. <br />
                continue to commit ourselves to advocate for the rights of girls
                who are not able to access sanitary towels especially in these
                uncertain times of . <br />
                We continue to commit ourselves . of girls who are not able to
                access sanitary towels especially We continue to commit
                ourselves to advocate for the rights of girls who are not able
                to access sanitary towels especially <br />
                We continue to commit ourselves to advocate for the rights of
                girls who are not able to .
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="vision mt-5">
              
                <h1 style={{ textAlign: "center", color: "#635bfb" }}>
                <strong>Vision</strong>
                </h1>
              
              <p className="text-center" style={{ fontFamily: "Uchen" }}>
                Our vision is to stretch our footprint across South Africa By
                2025 with the help of government and other private sector
                organisations.
                <br />
                Starting this program to me was a help from one woman to another
                nut as the organisation continue the vision grow branches and
                ideas
                <br />
                As a woman ,I understand how it feels not having SANITARY PADS
                <br />I know the pain
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id="learn" class="p-5" style={{ backgroundColor: "#f6e3c8" }}>
        <div class="">
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <img src={women} class="img-thumbnail" alt="" />
            </div>

            <div class="col-md p-5">
              <h2 style={{ color: "#635bfb" }}>
                <strong>Our Impact</strong>
              </h2>
              <p class="lead" style={{ fontFamily: "Uchen" }}>
                As a woman, I understand the pain of not having SANITARY PADS.
                It feels horrible and I decided to give a helping hand.
              </p>
              <p style={{ fontFamily: "STIX Two Math" }}>
                I know very well that wedo not all come from the same
                backgrounds, and that is why I believe in donating sanitary pads
                to meet halfway needy women and girls.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Impact />
      <Card />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
