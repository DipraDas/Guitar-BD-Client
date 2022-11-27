import React from 'react';
import AdvertiseItem from '../AdvertiseItem/AdvertiseItem';
import GuitarCategories from '../GuitarCategories/GuitarCategories';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {

    return (
        <div>
            <HomeBanner></HomeBanner>
            <GuitarCategories></GuitarCategories>
            <AdvertiseItem></AdvertiseItem>
        </div>
    );
};

export default Home;