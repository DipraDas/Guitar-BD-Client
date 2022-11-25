import React from 'react';
import { Link } from 'react-router-dom';

const GuitarCategory = ({ category }) => {
    const { typeName, typeId } = category;
    return (
        <div>
            <Link to={`categories/${typeId}`}><h1 className='text-4xl border p-5 mx-5 hover:brightness-150 cursor-pointer '>{typeName}</h1></Link>
        </div>
    );
};

export default GuitarCategory;