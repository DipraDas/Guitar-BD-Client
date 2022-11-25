import React from 'react';

const GuitarCategory = ({ category }) => {
    const { typeName } = category;
    return (
        <div>
            <h1 className='text-4xl border p-5 mx-5 hover:brightness-150 cursor-pointer '>{typeName}</h1>
        </div>
    );
};

export default GuitarCategory;