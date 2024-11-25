// App.js
import React from 'react';
import HeaderHome from './component/HomePage/HeaderHome';
import SearchingHome from './component/HomePage/SearchingHome';
import ProductHome from './component/HomePage/productHome';
import Jointhebrand from "./component/HomePage/Jointhebrand";
import FooterHome from "./component/HomePage/FooterHome";


const HomePage = () => {
    return(
        <div>
            <HeaderHome />
            <SearchingHome />
            <ProductHome />
            <Jointhebrand />
            <FooterHome />
        </div>
    )

}

export default HomePage;
