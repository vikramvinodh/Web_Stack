import React from 'react';
import { useRouter } from 'next/router'; // Import the useRouter hook
import mail from '../public/email.png';
import Image from 'next/image';

function Navbar() {
    const router = useRouter(); // Get the current route

    return (
        <div className='nav container'>
            <div>
                <div className='nav-logo'>
                    <div>
                        <a href="/">
                            <Image src={mail} alt='-' width={40} />
                        </a>
                    </div>
                    <a href='mailto:vikramvinodh68@gmail.com'>vikramvinodh@gmail.com</a>
                </div>
            </div>
            <div>
            <a className={router.pathname === '/' ? 'active' : ''} href='/'>Home</a>
                <a className={router.pathname === '/resume' ? 'active' : ''} href='/resume'>Resume</a>
            </div>
        </div>
    );
}

export default Navbar;
