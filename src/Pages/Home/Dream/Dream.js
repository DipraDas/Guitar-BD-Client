import React from 'react';
import singer from '../../../assets/images/homeImage/singer.jpg';
import girl from '../../../assets/images/homeImage/girl.jpg';
import './Dream.css';

const Dream = () => {
    return (
        <div className='py-32'>
            <div className="container mx-auto w-3/4">
                <img className='' src={singer} alt="" />
                <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 items-center dreamBg px-10 py-3'>
                    <div>
                        <h1 className='text-5xl mb-5'>Steve Austin</h1>
                        <p className='text-gray-400 leading-8'>The guitar is a stringed instrument that makes music from the vibrations of strings. It's also a fretted and plucked string instrument. Fretted means that it has frets, or metal wires, on the finger board to help play the notes. </p>
                    </div>
                    <div>
                        <img className='md:-mt-24' src={girl} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dream;