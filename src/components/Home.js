import React from 'react';
import HeaderTop from './home/HeaderTop';
import HeaderMobile from './home/HeaderMobile';
import FixedHeader from './home/FixedHeader';
import Section from './home/Section'
import Section2 from './home/Section2'
import Section3 from './home/Section3';
import Modal_Footer from './home/Modal_Footer'



function Home () {
    return(
        <div>
            <HeaderTop />
            <HeaderMobile />
            <FixedHeader />
            <Section />
            <Section2 />
            <Section3 />
            <Modal_Footer />
        </div>
    )
}
export default Home;