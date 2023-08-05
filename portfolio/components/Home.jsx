import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import mail from '../public/email.png'
import logo from '../public/img.png'
import img1 from '../public/ui.png'
import img2 from '../public/code.png'
import t1 from '../public/tools/t1.png'
import t2 from '../public/tools/t2.png'
import t3 from '../public/tools/t3.png'
import t4 from '../public/tools/t4.png'
import t5 from '../public/tools/t5.png'
import t6 from '../public/tools/t6.png'
import t7 from '../public/tools/t7.png'
import t8 from '../public/tools/t8.png'
import ra from '../public/rarrow.png'
import la from '../public/larrow.png'
import wa from '../public/icons/wa.png'
import li from '../public/icons/li.png'
import git from '../public/icons/git.png'
import ins from '../public/icons/insta.png'
import bit from '../public/bit.jpg'






function Home() {
  return (
    <section className='home '>

      <div className='banner '>
        <div className="flipbox d-flex justify-content-center">
          <div class="flip-box ">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <Image src={logo} alt="Paris" width='200' />
              </div>
              <div class="flip-box-back">
                <Image src={bit} alt="Paris" width='200' />
              </div>
            </div>
          </div>
        </div>
        <div className='banner-text text-center'>
          <p>
            Hello! I'm Vikram ✨
          </p>
          <p className='p-banner'>
            Elevating User Experiences: Empowering<br /> Web Applications with Intuitive UI/UX
          </p>
          <p className='p-text'>
            A Product Designer and Visual Developer.<br />
            I specialize in UI/UX Design, Responsive Web Design, and Visual Development.
          </p>
          <button className='p-button'>CONNECT WITH ME</button>


        </div>
        <div class="container">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
        </div>
        <div className='p-image container' data-aos="fade-up" data-aos-duration="800" >
          <div className='image-blocks text-center col-6' >
            <Image src={img1} alt='' width={500} />
            <h3 className='text-center'>UI/UX Designer<br /></h3>
            <p><span>As a Full Stack Developer, I possess a diverse skill set and expertise in both front-end and back-end development. I am proficient in designing and implementing responsive user interfaces, creating robust and scalable server-side applications, and integrating databases for efficient data management.
            </span>
            </p>
          </div>

          <div className='image-blocks1 text-center col-6'>
            <Image src={img2} alt='' width={350} />
            <h3 className='text-center'>Full Stack Developer<br /></h3>
            <p><span>As a UI/UX Designer, I am passionate about crafting visually appealing and intuitive digital experiences. I have a deep understanding of user-centered design principles, and my creative flair enables me to design captivating user interfaces that enhance usability and engagement. </span>
            </p>
          </div>
        </div>
      </div>
      <div className='p-tools ' data-aos="fade-up" data-aos-duration="800">
        <h3>Tools</h3>
        <div className='tool-items'>
          <div id="homeimg1" className="carousel slide" data-bs-ride="carousel" data-bs-interval="6000">
            <div className="carousel-inner text-center">
              <div className="carousel-item active">
                <Image src={t1} alt="-" width={150} />
              </div>
              <div className="carousel-item">
                <Image src={t2} alt="-" width={150} />
              </div>
              <div className="carousel-item">
                <Image src={t3} alt="-" width={150} />
              </div>
              <div className="carousel-item">
                <Image src={t4} alt="-" width={150} />
              </div>
              <div className="carousel-item">
                <Image src={t5} alt="-" width={150} />
              </div>
              <div className="carousel-item">
                <Image src={t6} alt="-" width={150} />
              </div>
              <div className="carousel-item">
                <Image src={t7} alt="-" width={150} />
              </div>
              <div className="carousel-item">
                <Image src={t8} alt="-" width={150} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#homeimg1" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#homeimg1" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className='p-services' data-aos="fade-up" data-aos-duration="800">
        <h3> Services </h3>
        <div className='service-cards d-flex'>
          <div className='s-cards'>
            {/* <Image src={t2} alt='-' /> */}
            <span>🎯</span>
            <h3>Statergy & Direction</h3>
            <p>Defining the problem, identifying the scope and finally, organising the design roadmap to bring out 100% of every project.</p>
          </div>
          <div className='s-cards'>
            <span>✍️</span>
            <h3>Design UI/UX</h3>
            <p>Websits, application or other design related tasks. I love tackling digital problems and help fix them.</p>

          </div>
          <div className='s-cards'>
            <span>📱</span>
            <h3>Mobile App</h3>
            <p>It's 2023, we should really step up our mobile game a bit more, right?
              Open to tackling new mobile projects.</p>

          </div>
        </div>
      </div>
      <div className='p-faqs' data-aos="fade-up" data-aos-duration="800">

        <p>A few things <span>🫣</span> <br />
          My friends ask!!
        </p>

        <div className="accordion container " id="faqacc">
          <div className="accordion-item">
            <h4 className="accordion-header" id='1'>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target='#collapse1'
                aria-expanded="true"
                aria-controls='collapse1'
              >
                How did you learn?
              </button>
            </h4>
            <div
              id='collapse1'
              className='accordion-collapse collapse'
              aria-labelledby='1'
              data-bs-parent="#faqacc"
            >
              <div className="accordion-body">
                <p>Pss.. It's a seceret "Practice"</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h4 className="accordion-header" id='2'>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target='#collapse2'
                aria-expanded="true"
                aria-controls='collapse2'
              >
                Are you wokring as a free lancer?
              </button>
            </h4>
            <div
              id='collapse2'
              className='accordion-collapse collapse'
              aria-labelledby='2'
              data-bs-parent="#faqacc"
            >
              <div className="accordion-body">
                <p>No, I'm working for a company Rn, <br /> But would love to work as a free lancer too!</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h4 className="accordion-header" id='3'>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target='#collapse3'
                aria-expanded="true"
                aria-controls='collapse3'
              >
                Is designing hectic?
              </button>
            </h4>
            <div
              id='collapse3'
              className='accordion-collapse collapse'
              aria-labelledby='3'
              data-bs-parent="#faqacc"
            >
              <div className="accordion-body">
                <p>No, it's beautiful!!</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="p-bottom" data-aos="fade-up" data-aos-duration="800">
        <div className="bottom-text">
          <Image src={ra} alt='-' width={100} />
          <div className='bottom-text-block'>
            <p>Let me know if you want to talk about a potential collaboration. I'm available for work.</p>
            <Link href=' https://wa.me/8296627169'>Let's design your app ⚡️</Link>
          </div>
          <Image src={la} alt='-' width={100} />
        </div>
      </div>
      <div className='p-footer container d-flex' >
        <div>
          <Link href=''>
            <Image className='me-3' src={li} alt='-' width={30} />
          </Link>
          <Link href=''>
            <Image className='me-3' src={wa} alt='-' width={30} />
          </Link>
          <Link href=''>
            <Image className='me-3' src={git} alt='-' width={30} />
          </Link>
          <Link href=''>
            <Image className='me-3' src={ins} alt='-' width={30} />
          </Link>
        </div>
        <div>
          <Image src={mail} alt='-' width={40} />
          <a href='mailto:vikramvinodh68@gamil.com'>vikramvinodh@gamil.com</a>
        </div>
      </div>
   

    </section>
  )
}

export default Home
