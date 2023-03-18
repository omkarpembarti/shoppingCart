import React, { lazy, Suspense } from 'react'
import { CartState } from '../context/Context'
import Filters from './Filters';
import SingleProduct from './SingleProduct';

const Home = () => {
    const { state, dispatch } = CartState();
    const products = state.products;
    console.log("State", state);
    return (
        <div className='home'>
            <Filters></Filters>
            <div className='productContainer'>
                {products.map((product) => (
                    <SingleProduct product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;