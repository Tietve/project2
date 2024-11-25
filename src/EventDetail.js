// App.js
import React from 'react';
import HeroImage from "./component/Eventdetail/HeroImage";
import footer from "./component/common/footer";
import navbar from "./component/common/navbar";
import Footer from "./component/common/footer";
import Navbar from "./component/common/navbar";


const EventDetail = () => {
    return(
        <div>
            <Navbar />
            <HeroImage />
            <Footer />
        </div>
    )

}

export default EventDetail;
