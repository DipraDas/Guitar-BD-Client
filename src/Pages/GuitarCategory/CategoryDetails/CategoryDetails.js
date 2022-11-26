import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyingModal from '../BuuyingModal/BuyingModal';
import GuitarDetails from '../GuitarDetails/GuitarDetails';

const CategoryDetails = () => {
    const guitars = useLoaderData();
    const [aboutGuitar, setAboutGuitar] = useState(null);
    return (
        <div>
            <h1 className='text-center pt-10 pb-3 text-5xl'>Products for sell</h1>
            <h1 className='text-center text-3xl mb-5 text-white'>{guitars.length} guitars available</h1>
            <div className='container mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5'>
                {
                    guitars.map(guitar => <GuitarDetails
                        key={guitar._id}
                        guitar={guitar}
                        setAboutGuitar={setAboutGuitar}
                    ></GuitarDetails>)
                }
            </div>
            {aboutGuitar &&
                <BuyingModal
                    aboutGuitar={aboutGuitar}
                    setAboutGuitar={setAboutGuitar}
                ></BuyingModal>}
        </div>
    );
};

export default CategoryDetails;