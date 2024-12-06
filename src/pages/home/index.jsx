import { FadeInSection } from "../../components/fade-in";
import { ProductCard } from "../../components/product-card";
import Portrait from "../../assets/images/portrait-yellow.png";
import Figma from "../../assets/icons/figma.png";
import Html from "../../assets/icons/html.png";
import Css from "../../assets/icons/css.png";
import Git from "../../assets/icons/git.png";
import Javascript from "../../assets/icons/js.png";
import Wordpress from "../../assets/icons/wordpress.png";
import Bootstrap from "../../assets/icons/bootstrap.png";
import React from "../../assets/icons/react.png";
import Auctionary from "../../assets/images/auctionary.png";
import Shoply from "../../assets/images/shoply.jpg";
import Holidaze from "../../assets/images/holidaze.webp";

function Home() {
  return (
    <main className="fw-light">
      <section className="intro d-lg-flex align-items-end">
        <div className="intro-image text-center">
          <img
            src={Portrait}
            alt="Me, with half long brown hair and a burgundy top, smiling at camera"
            className="portrait"
          />
        </div>
        <div className="intro-text fw-light mx-auto">
          <h1>About me</h1>
          <p>
            Hi, I&apos;m Marte Bøe Olsen — a 39-year-old aspiring frontend
            developer based in Larvik, Norway. Currently wrapping up my studies
            in frontend development, I&apos;ve spent the last couple of years
            honing my skills in the following tools and technologies:
          </p>
          <div className="d-flex flex-wrap justify-content-around">
            <img src={Figma} alt="Figma logo" className="logos" />
            <img src={Html} alt="Html logo" className="logos" />
            <img src={Css} alt="Css logo" className="logos" />
            <img src={Git} alt="Git logo" className="logos" />
            <img src={Javascript} alt="Javscript logo" className="logos" />
            <img src={Wordpress} alt="Wordpress logo" className="logos" />
            <img src={Bootstrap} alt="Bootstrap logo" className="logos" />
            <img src={React} alt="React logo" className="logos" />
          </div>
          <p className="mt-3">
            One of the things I love most about frontend development is how it
            lets me blend creativity and logic to build engaging, user-friendly
            experiences. My keen eye for detail has been invaluable for
            debugging and fine-tuning designs, while my hyperfocus allows me to
            fully immerse myself in projects that spark my interest.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll often find me exploring ways
            to bring designs to life or diving into new challenges to expand my
            skill set. Whether it&apos;s creating responsive layouts or refining
            a website&apos;s usability, I&apos;m passionate about crafting
            digital solutions that are both functional and beautiful.
          </p>
          <p>
            Feel free to scroll down and see how I&apos;ve put my skills into
            action!
          </p>
          <p>And if you&apos;d like to contact me, you can reach me at: </p>
          <p>
            <a href="mailto:marte.boe.olsen@gmail.com" className="text-black">
              marte.boe.olsen@gmail.com
            </a>
          </p>
        </div>
      </section>
      <section id="projects">
        <h2 className="text-center my-5">Projects</h2>
        <FadeInSection>
          <ProductCard
            image={Auctionary}
            alt={"Screenshot of Auctionary front page"}
            title={"Auctionary"}
            course={"Semester Project 2"}
            description={
              "Our task for out second semester project was to make an auction website using the skills we'd learned the past three semesters. It's created with HTML, vanilla JS and Bootstrap."
            }
            github={"https://github.com/mar-ols/semester_project_2-auctionary"}
            live={"https://wondrous-kangaroo-09982e.netlify.app"}
          />
        </FadeInSection>
        <FadeInSection>
          <ProductCard
            image={Shoply}
            alt={"Screenshot of Shoply front page"}
            title={"Shoply"}
            course={"Javascript Frameworks"}
            description={
              "This was our first project learning about javascript frameworks. We were given an API with a selection of products to create an e-commerce site built with our styling solution of choice and React."
            }
            github={"https://github.com/mar-ols/react-shoply"}
            live={"https://tubular-meringue-31e7bc.netlify.app"}
          />
        </FadeInSection>
        <FadeInSection>
          <ProductCard
            image={Holidaze}
            alt={"Screenshot of Holidaze front page"}
            title={"Holidaze"}
            course={"Project Exam 2"}
            description={
              "Holidaze was our final exam for the second year of our studies. We were to create a booking site using the provided API with venues created by us and other students and putting into practice everything we'd been taught. It was built with React and Bootstrap."
            }
            github={"https://github.com/mar-ols/holidaze"}
            live={"https://holidaze-pe2-marols.netlify.app"}
          />
        </FadeInSection>
      </section>
    </main>
  );
}

export { Home };
