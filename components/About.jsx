import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/my_profile_pic.jpeg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <ul className='py-2 text-gray-600'>
            <li>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. </li>
            I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task.Implemented responsive
            web designs and optimized UI/UX to deliver a seamless user experience.
            Collaborated with the backend team to integrate front-end components with
            the server-side infrastructure.
          </ul>
          <ul className='py-2 text-gray-600'>
            I'm a Software Developer at Vinsoft Private Limited. 
            Experienced React.js Developer with <strong>2</strong> years of expertise in building robust web applications
            using JavaScript, CSS, and HTML. Strong grasp of modern web development principles, committed
            to creating efficient solutions with React.js. Passionate about continuous learning, problem-solving,
            and delivering high-quality code as a collaborative team player.
            <li> I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.</li>
          </ul>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
