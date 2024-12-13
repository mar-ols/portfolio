import { FadeInSection } from "../../components/fade-in";
import { ProductCard } from "../../components/product-card";
import Portrait from "../../assets/images/portrait-yellow.png";
import Auctionary from "../../assets/images/auctionary.webp";
import Shoply from "../../assets/images/shoply.webp";
import Holidaze from "../../assets/images/holidaze.webp";

function Home() {
  return (
    <main className="fw-light">
      <section id="about" className="intro d-lg-flex align-items-end">
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
            <img
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              alt="Html badge"
              className="badges"
            />
            <img
              src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              alt="Css badge"
              className="badges"
            />
            <img
              src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
              alt="Javscript badge"
              className="badges"
            />
            <img
              src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
              alt="Bootstrap badge"
              className="badges"
            />
            <img
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              alt="React badge"
              className="badges"
            />
            <img
              src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
              alt="Figma badge"
              className="badges"
            />
            <img
              src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
              alt="Git badge"
              className="badges"
            />
            <img
              src="https://img.shields.io/badge/Wordpress-21759B?style=for-the-badge&logo=wordpress&logoColor=white"
              alt="Wordpress badge"
              className="badges"
            />
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
