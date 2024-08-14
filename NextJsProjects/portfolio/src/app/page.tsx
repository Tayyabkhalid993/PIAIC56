"use client";

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header navbar Link');

window.onscroll = () =>{
sections.forEach ((sec)=> {
  let top = window.scrollY;
  let offset = sec.offsetTop - 100;
  let height = sec.offsetHeight;
  let id = sec.getAttribute('id');


  if(top >= offset && top < offset + height){
    //active.navbar links
    navLinks.forEach(links =>{
      links.classList.remove('active');
      document.querySelector('header navbar Link[href*=' + id + ']')?.classList.add('active')
    })
  }
})
  



  //sticky header
  let header = document.querySelector('header');

  header?.classList.toggle('sticky', window.scrollY > 100);
}





export default function Home() {
  return (
    <main>
      {/* ---------header------------ */}

      <header className="header">
        <Link className="logo" href={"#home"}>
          Tayyab.
        </Link>

        {/* <MenuIcon className="menu-icon" /> */}

        <nav className="navbar">
          <Link className="active" href={"#home"}>
            Home
          </Link>
          <Link href={"#about"}>About</Link>
          <Link href={"#project"}>Project</Link>
          <Link href={"#skills"}>Skills</Link>
          <Link href={"#contact"}>Contact</Link>
        </nav>
      </header>

      {/*-------------- home section-------------- */}

      <section className="home" id="home">
        <div className="home-content">
          <h1>
            Hi, I'm<span> Muhammad Tayyab Khalid</span>{" "}
          </h1>
          <div className="text-animated">
            <h3>Full Stack Developer</h3>
          </div>
          <p>
            I'm a passionate Full Stack Developer currently honing my skills at
            PIAIC. On the front-end, I've mastered Next.js and Tailwind CSS,
            creating responsive and dynamic user interfaces. As I continue my
            journey, I’m diving deeper into back-end technologies to build
            comprehensive, full-stack applications. Stay tuned as I continue to
            expand my skill set and bring innovative ideas to life!
          </p>

          <div className="btn-box">
            <Link href={"#"} className="btn">
              Hire me
            </Link>
            <Link href={"#"} className="btn">
              Let's talk
            </Link>
          </div>
          <div className="flex-space-x-4 home-sci">
            <a href={"#"} className="bx-bx1-facebook">
              <FacebookIcon className="icon" sx={{ fontSize: 25 }} />
            </a>
            <a href={"#"} className="bx-bx1-linkedin">
              <LinkedInIcon className="icon" sx={{ fontSize: 25 }} />
            </a>
            <a href={"#"} className="bx-bx1-github">
              <GitHubIcon className="icon" sx={{ fontSize: 25 }} />
            </a>
            <a href={"#"} className="bx-bx1-x">
              <XIcon className="icon" sx={{ fontSize: 25 }} />
            </a>
          </div>
        </div>

        <div className="home-imgHover"></div>
      </section>

      {/* --------------About Section------------- */}

      <section className="about" id="about">
        <h2 className="heading">
          About <span>Me</span>
        </h2>

        <div className="about-image">
          <img width={"250px"} src="./SmallSizeImge.jpg" alt="Image" />
          <span className="circle-spin"></span>
        </div>
        <div className="about-content">
          <h2>Full Stack Developer</h2>
          <p className="about-para">
            I'm a passionate Full Stack Developer currently honing my skills at
            PIAIC. On the front-end, I've mastered Next.js and Tailwind CSS,
            creating responsive and dynamic user interfaces. As I continue my
            journey, I’m diving deeper into back-end technologies to build
            comprehensive, full-stack applications. Stay tuned as I continue to
            expand my skill set and bring innovative ideas to life!
          </p>

          <div className="btn-box btns">
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* -------------skill section------------- */}
      <section className="skills" id="skills">
        <h2 className="heading">
          {" "}
          My <span>Skills</span>
        </h2>

        <div className="skills-row">
          <div className="skills-column">
            <h3 className="title">Coding Skills</h3>

            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>
                    HTML <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    CSS <span>80%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    TypeScript <span>82%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Python <span>83%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Next.JS <span>85%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------For another Column--------------------------- */}

          <div className="skills-column">
            <h3 className="title">Professional Skills</h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>
                    Web Design <span>95%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Web Development <span>75%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Microsoft Office <span>82%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Python <span>83%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    SEO Marketing <span>85%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact"><center></center>
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        <form action="#">
          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Full Name" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email Address" required />
              <span className="focus"></span>
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input type="string" placeholder="Mobile Number" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email Subject" required />
              <span className="focus"></span>
            </div>
          </div>
          <div className="textarea-field">
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
            <span className="focus"></span>
          </div>

          <div className="btn-box btns">
            <a href="#" className="btn">
              Submit
            </a>
          </div>
        </form>
      </section>

      {/* --------------footer-------------- */}

      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2024 by Tayyab | All Right Reserved.</p>
        </div>

        <div className="footer-iconTop">
          <a href={"#"} className=" bg-cyan-500 bx-bx1-arrowUpWardIcon">
            <ArrowUpwardIcon className="icon" sx={{ fontSize: 25 }} />
          </a>
        </div>
      </footer>






    </main>
  );
}
