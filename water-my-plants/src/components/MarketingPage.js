import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


// images
import logo from '../images/logo.svg'
import plantBanner from '../images/houseplants.jpeg'


// styling
const MarketingContainer = styled.div`
    font-family: PT Serif;
    width: 100%;
    
// !Header 
    .header{
        position: fixed;
        width: 100%;
        height: 15vh;
        background-color: #22422A;
        display: flex;
        align-items: center;
    }
    .logo{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }
    .logo img{
        width: 100px;
        height: 100px;
        margin-left: 1rem;
    
    }
    .link{
        text-decoration: none;
        color: #FFFFFF;
        font-family: PT Serif;
        font-size: 1rem;
    }

    .login{
        margin-right: 2rem;
    }

// !Marketing Banner
    .marketing-banner{
        // position: relative;
        text-align: center;
    
    }
    .img-banner{
        width: 100%;
        height: 50vh;
    }
    .title{
        position: absolute;
        top: 33%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 85%;
    }
    .title h1{
        color: #FFFFFF;
        font-size: 3rem;
        line-height: 3rem;
        width: 100%;
        text-shadow: 1px 1px 1px #000;
    }
// !Marketing Content 

    @media (min-width: 768px){

    }
    @media (min-width: 1024px){

    }
`

const MarketingPage = () => {
    return (
        <MarketingContainer>
            <header className="header">
                <nav className= "logo">
                    <img src={logo} alt="Water My Plants Logo" />
                    <div className="links">
                        <Link className="link signup" to='/register'>Sign Up | </Link>
                        <Link className="link login" to='/login'>Login</Link>
                    </div>
                </nav>
            </header>
            <section className="marketing-banner">
                <div className="img-banner">
                    <img className="img-banner" src={plantBanner} alt="house plant display" />
                </div>
                <div className="title">
                    <h1>Are your plants looking thirsty?</h1>
                </div>
            </section>
            {/* <section className="marketing-content">
                <img className="content-img" src={}
            </section> */}

            
        </MarketingContainer>
    )
}

export default MarketingPage;