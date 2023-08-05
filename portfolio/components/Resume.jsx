import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import img from '../public/resume.png'
import Link from 'next/link'
import img1 from '../public/hello.png'
import tdk from '../public/tdk.png'
import vlsi from '../public/vlsi.png'
import wa from '../public/icons/wa.png'
import li from '../public/icons/li.png'
import git from '../public/icons/git.png'
import ins from '../public/icons/insta.png'
import mail from '../public/email.png'
import check from '../public/checked.png'

function Resume() {
    return (
        <>
            <Navbar />
            <section className='resume'>
                <div className='p-resume container'>
                    <h1>Resume</h1>
                    <hr></hr>
                    <div className="resume-texts">
                        <div className='text-center d-flex justify-content-around  mt-5 mx-5' >
                            <div>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <h2>Work Experince 🔥</h2>
                                        <p>Kandra Digital  <br />
                                            <span>
                                                January 2023 - Present
                                            </span></p>
                                    </div>
                                    <div>
                                        <h2>Education 📚</h2>
                                        <p>CHRIST (Deemed to be university)  <br />
                                            <span>
                                                M.C.A
                                            </span></p>
                                        <p>St Francis College <br />
                                            <span>
                                                B.C.A
                                            </span></p>
                                    </div>
                                </div>
                                <div className='skill-block'>
                                    <div className='skills' data-aos="fade-right">
                                        <h2>Skills 🫡</h2>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='skill-dep'>
                                                <p> Design  <br /></p>
                                                <ul>
                                                    <li>Product Design</li>
                                                    <li>UI/UX Design</li>
                                                    <li>Frameworks</li>
                                                    <li>Responsive</li>
                                                </ul>
                                            </div>
                                            <div className='skill-dep'>
                                                <p> Development </p>
                                                <ul>
                                                    <li>Visual Development</li>
                                                    <li>Front-end Development</li>
                                                    <li>HTML5, SCSS, CSS</li>
                                                    <li>Responsive Web Pages</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='skill-img'>
                                        <Image src={img} alt='-' width='350' /><br />
                                        <Link href='https://wa.me/8296627169'>Have got something for me?</Link>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='p-work  mt-5' data-aos="fade-up" data-aos-duration="800">
                    <h2>My Works</h2>
                    <hr />
                    <div className='work-items' data-aos="fade-up" data-aos-duration="800">
                        <p>Florentine Interiors</p>
                        <Image src={img1} alt='-' />
                    </div>
                    <div className='work-items' data-aos="fade-up" data-aos-duration="800">
                        <a href="https://trainings.kandradigital.com/" target='_blank'>
                            <p>Kandra Digital</p>
                        </a>
                        <Image src={tdk} alt='-' />
                    </div>
                    <div className='work-items' data-aos="fade-up" data-aos-duration="800">
                        <a href="https://vlsifirst.com" target='_blank'>
                            <p>VLSI First</p>
                        </a>
                        <Image src={vlsi} alt='-' />
                    </div>
                </div>

                <div className='p-form' data-aos="fade-up" data-aos-duration="800">
                    <h1>Feeeeedback 🙊</h1>
                    <form>
                        <input type='name' placeholder='Full Name' />
                        <input type='email' placeholder='Email ID' />
                        <input type='number' placeholder='Phone' />
                        <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal">Submit</button>

                    </form>
                </div>



                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"></h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <Image className="img" src={check} alt='-' width={300} />
                                <p>Thank You for you're intrest!</p>
                            </div>

                        </div>
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


            </section >
        </>
    )
}

export default Resume
