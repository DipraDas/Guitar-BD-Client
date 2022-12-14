import React, { useEffect, useState } from 'react';
import GuitarCategory from '../GuitarCategory/GuitarCategory';
import './GuitarCategories.css';
import axios from "axios";

const GuitarCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`https://guitar-bd-server.vercel.app/instrumentCategories`)
            .then((response) => {
                setCategories(response.data);
            });
    }, []);

    return (
        <div className='container mx-auto category-back-home'>
            <h1 className='text-center pt-10 text-5xl'>Categories</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center text-center category-back-home py-10 px-10">
                {
                    categories.map(category => <GuitarCategory
                        key={category.typeId}
                        category={category}
                    >
                    </GuitarCategory>)
                }
            </div>
        </div>
    );
};

export default GuitarCategories;