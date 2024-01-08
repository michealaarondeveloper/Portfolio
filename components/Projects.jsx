import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';
import iogaImg from '../public/assets/projects/ioga.png';
import leanerboxImg from '../public/assets/projects/leanerbox.png';
import orderbirImg from '../public/assets/projects/orderbit.png';
import mrcaImg from '../public/assets/projects/mrca.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='IOGA Web App'
            backgroundImg={iogaImg}
            projectUrl='/ioga'
            tech='React JS'
          />
          <ProjectItem
            title='Leanerbox UI'
            backgroundImg={leanerboxImg}
            projectUrl='/leanerbox'
            tech='React JS'

          />
          <ProjectItem
            title='Orderbit Web App'
            backgroundImg={orderbirImg}
            projectUrl='/orderbit'
            tech='Next JS'

          />
          <ProjectItem
            title='MRCA UI'
            backgroundImg={mrcaImg}
            projectUrl='/mrca'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
