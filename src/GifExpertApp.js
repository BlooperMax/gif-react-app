import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cristiano Ronaldo'])

    return (
        <>
            <h1 className=" title-app ">Gif Expert App</h1>

            <ol className="container ul-0">
            <AddCategory setCategories={setCategories} />
            {categories.map( category  => (
                <GifGrid 
                    key={ category }
                    category={ category }
                />
            ))
            }
            </ol>
        </>
    )
};
