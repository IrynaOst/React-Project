import React from 'react';
import homeImg from '../../assets/home_image.jpg';

const Home = () => {
    return (
        <div>
            <img src={homeImg} alt="home_img"/>
            <h1>Welcome to us!</h1>
            <p>Do you love music and can't imagine your life without it?
                So, you are in the right place! Here you can combine the useful with the pleasant.
                Let's start lerning English with favorite songs!
            </p>
        </div>
    )
}

export default Home;