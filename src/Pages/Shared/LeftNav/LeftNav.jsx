import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('https://the-news-dragon-server-tirahman105.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h4>All Category</h4>

          <div className='p-4'>
          {
                categories.map(category => <p
                key={category.id}>
                    <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary'>{category.name}</Link>

                </p>)
            }
          </div>
        </div>
    );
};

export default LeftNav;