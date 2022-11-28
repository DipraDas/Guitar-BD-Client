import React from 'react';
import AdvertiseItem from '../AdvertiseItem/AdvertiseItem';
import Dream from '../Dream/Dream';
import GuitarCategories from '../GuitarCategories/GuitarCategories';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {

    return (
        <div>
            <HomeBanner></HomeBanner>
            <Dream></Dream>
            <GuitarCategories></GuitarCategories>
            <AdvertiseItem></AdvertiseItem>
        </div>
    );
};

export default Home;