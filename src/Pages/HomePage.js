import React from "react";
import NavBar from "../Components/navBar";

const HomePage = () => {
  return (
    <div>
      <section className="hero-container">
        <img src={require("../Images/hero.jpg")} alt="Snow" className="w-100" />
       
        <h1 className="hero-top-left "> <NavBar /></h1>
        <h4 className="hero-bottom-right w-md-50">
          We Are Legendary. Digital Artists. Awarded Studio. Let’s work
          together.
        </h4>
      </section>
      <div className="parallax container-fluid"></div>
      <section className="afterParallax container-fluid">
        <div className="row mt-5">
          <div className="col-md-6">
            <img src={require("../Images/hero.jpg")} className="w-100" alt="" />
          </div>
          <div className="col-md-6 side-content" id="introduction">
            <h1>WHO WE ARE.</h1>
            <p>
              Doubtless one leading reason why the world declines honouring us
              whalemen, is this: they think that, at best, our vocation amounts
              to a butchering sort of business; and that when actively engaged
              therein, we are surrounded by all manner of defilements. Butchers
              we are, that is true. But butchers, also, and butchers of the
              bloodiest badge have been all Martial Commanders whom the world
              invariably delights to honour. And as for the matter of the
              alleged uncleanliness of our business, ye shall soon be initiated
              into certain facts hitherto pretty generally unknown, and which,
              upon the whole, will triumphantly plant the sperm whale-ship at
              least among the cleanliest things of this tidy earth
            </p>
          </div>
        </div>
      </section>
      <h1 className="text-center mt-5 mb-5 border" id="ourWork">Our Work?</h1>
      <section className="tiles-section container-fluid">
        <div className="row g-0">
          <div className="col-md-6">
            <div class="overlay-container reveal fade-left h-100">
              <img
                src={require("../Images/webDev.jpg")}
                alt="Avatar"
                class="overlay-image w-100 h-100"
              />
              <div class="tile-overlay-two">
                <div class="overlay-text">
                  Hello World <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <div class="overlay-container reveal fade-bottom h-100">
                  <img
                    src={require("../Images/andDev.jpg")}
                    alt="Avatar"
                    class="overlay-image w-100 h-100"
                  />
                  <div class="tile-overlay-one">
                    <div class="overlay-text">
                      Hello World <hr />
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div className="row  m-0">
                <div className="col-md-6 p-0 m-0">
                  <div class="overlay-container reveal fade-bottom h-100">
                    <img
                      src={require("../Images/book.jpg")}
                      alt="Avatar"
                      class="overlay-image "
                    />
                    <div class="tile-overlay-three">
                      <div class="overlay-text">
                        Hello World <hr />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-0 m-0">
                  <div class="overlay-container reveal fade-left ">
                    <img
                      src={require("../Images/setup.jpg")}
                      alt="Avatar"
                      class="overlay-image "
                    />
                    <div class="tile-overlay-four">
                      <div class="overlay-text">
                        Hello World <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-md-3">
            <div class="overlay-container reveal fade-left h-100">
              <img
                src={require("../Images/book.jpg")}
                alt="Avatar"
                class="overlay-image "
              />
              <div class="tile-overlay-three">
                <div class="overlay-text">
                  Hello World <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div class="overlay-container reveal fade-bottom h-100">
              <img
                src={require("../Images/setup.jpg")}
                alt="Avatar"
                class="overlay-image "
              />
              <div class="tile-overlay-four">
                <div class="overlay-text">
                  Hello World <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="overlay-container reveal fade-bottom h-100">
              <img
                src={require("../Images/coffee.jpg")}
                alt="Avatar"
                class="overlay-image "
              />
              <div class="tile-overlay-one">
                <div class="overlay-text">
                  Hello World <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-center mt-3 mb-3 border"id="portfolio">Why We?</h1>

      <section className="container-fluid border reveal fade-bottom">
        <div className="row  background-inseter reveal fade-bottom">
          <div className="col-md-8 ">
            <img
              src={require("../Images/self.jpg")}
              className="w-100 "
              alt=""
            />
          </div>
          <div className="col-md-4  background-inseter">
            <div className="content-pose">
              <b>REASONS TO JOIN</b>
              <h1>01</h1>
              <h2>WE ARE A TALENTED AND SOLID TEAM.</h2>
              <p>
                At the next halt Hooja the Sly One managed to find enough slack
                chain to permit him to worm himself back quite close to Dian. We
                were all standing, and as he edged near the girl.
              </p>
            </div>
          </div>
        </div>
        <div className="row  background-inseter reveal fade-left">
          <div className="col-md-4  background-inseter">
            <div className="content-pose">
              <b>REASONS TO JOIN</b>
              <h1>02</h1>
              <h2>WE ARE CREATIVE AND HONEST PEOPLE.</h2>
              <p>
                At the next halt Hooja the Sly One managed to find enough slack
                chain to permit him to worm himself back quite close to Dian. We
                were all standing, and as he edged near the girl.
              </p>
            </div>
          </div>
          <div className="col-md-8 ">
            <img
              src={require("../Images/shouse.jpg")}
              className="w-100 "
              alt=""
            />
          </div>
        </div>
        <div className="row  background-inseter reveal fade-bottom">
          <div className="col-md-8 ">
            <img
              src={require("../Images/team.jpg")}
              className="w-100 "
              alt=""
            />
          </div>
          <div className="col-md-4  background-inseter">
            <div className="content-pose">
              <b>REASONS TO JOIN</b>
              <h1>03</h1>
              <h2>WE ARE CREATIVE AND HONEST PEOPLE.</h2>
              <p>
                At the next halt Hooja the Sly One managed to find enough slack
                chain to permit him to worm himself back quite close to Dian. We
                were all standing, and as he edged near the girl.
              </p>
            </div>
          </div>
        </div>
        <div className="row  background-inseter reveal fade-left">
          <div className="col-md-4  background-inseter">
            <div className="content-pose">
              <b>REASONS TO JOIN</b>
              <h1>04</h1>
              <h2>WE ARE CREATIVE AND HONEST PEOPLE.</h2>
              <p>
                At the next halt Hooja the Sly One managed to find enough slack
                chain to permit him to worm himself back quite close to Dian. We
                were all standing, and as he edged near the girl.
              </p>
            </div>
          </div>
          <div className="col-md-8 ">
            <img
              src={require("../Images/webDev.jpg")}
              className="w-100 "
              alt=""
            />
          </div>
        </div>
      </section>
      <div className="parallax-2 container-fluid "></div>
      <h1 className="text-center mt-5" >Our Services</h1>
      <div className="container-fluid reveal fade-left " >
        <div className="row ">
          <div className="col-md-3">
            <div class="overlay-container reveal fade-left h-100">
              <img
                src={require("../Images/webDev.jpg")}
                alt="Avatar"
                class="overlay-image w-100 h-100"
              />
              <div class="tile-overlay-one">
                <div class="overlay-text">
                  Trading <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="overlay-container reveal fade-left h-100">
              <img
                src={require("../Images/shouse.jpg")}
                alt="Avatar"
                class="overlay-image w-100 h-100"
              />
              <div class="tile-overlay-one">
                <div class="overlay-text">
                  Professional WorkPlace <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="overlay-container reveal fade-left h-100">
              <img
                src={require("../Images/team.jpg")}
                alt="Avatar"
                class="overlay-image w-100 h-100"
              />
              <div class="tile-overlay-one">
                <div class="overlay-text">
                  Software Team <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="overlay-container reveal fade-left h-100">
              <img
                src={require("../Images/android2.jpg")}
                alt="Avatar"
                class="overlay-image w-100 h-100"
              />
              <div class="tile-overlay-one">
                <div class="overlay-text">
                  Android Dev <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

