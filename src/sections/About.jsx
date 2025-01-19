import React from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
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
        </div>
    </section>
  )
}

export default About