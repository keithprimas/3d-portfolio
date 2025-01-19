import React from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
import { useState } from 'react'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('keithprimas@gmail.com');
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }

  return (
    <section className='c-space my-20'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src='/assets/grid1.png' alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain'/>
                    <div>
                        <p className='grid-headtext'>Hi, I'm Keith!</p>
                        <p className='grid-subtext'>Actively honing my skills in web development to build applications with a focus on React.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src='/assets/grid2.png'alt='grid-2' className='w-full sm:h-[276px] h-fit object-contain'/>
                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className='grid-subtext'>I specialize in JavaScript/TypeScript with a focus on React on the frontend and Node.js for the backend.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                        <Globe
                        height={326}
                        width={326}
                        backgroundColor='rgba(0,0,0,0)'
                        backgroundImageOpacity={0.5}
                        showAtmosphere={true}
                        showGraticules={false}
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        labelsData={[{
                          lat: 35.22, lng: -80.84,
                          text: "I'm here!",
                          color: 'white',
                          size: 80,
                        }]}
                        />
                    </div>
                    <div>
                        <p className='grid-headtext'>
                          I'm available to work remotely across most timezones.
                        </p>
                        <p className='grid-subtext'>
                          I'm based in Charlotte, North Carolina, USA
                        </p>
                        <Button name='Contact Me' isBeam containerClass='w-full mt-10'/>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                        <img src='/assets/grid3.png' alt='grid-3' className='w-full sm:h-[266px] h-fit object-contain'/>
                        <div>
                             <p className='grid-headtext'>My journey</p>
                             <p className='grid-subtext'>After being a pharmacy tech for more than 5 years, I decided I needed a career change. 
                                From there, I started learning web development in 2023 and attended a fullstack bootcamp which I graudated from in 2024.
                                Since then, I have been working on various projects to hone my skills and build my portfolio to pursure a career in web development.
                             </p>
                        </div>
                </div>
            </div>

            <div className='xl:col-span-1 xl:row-span-2'>
                <div className='grid-container'>
                    <img src='/assets/grid4.png' alt='grid-4' className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'/>
                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>Email Me</p>
                        <div className='copy-container' onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt='copy'/>
                            <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>
                                keithprimas@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About