import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


// images
import logo from '../images/logo.svg'
import plantBanner from '../images/houseplants.jpeg'
import watering from '../images/watering.jpeg'
import plantcard from '../images/plantcard.svg'
import addPlant from '../images/Add-plant.svg'
import plant1 from '../images/plant1.jpeg'
// styling
const MarketingContainer = styled.div`
    
    font-family: PT Serif;
    width: 100%;
    background-color: #FFFFFF;
    
    
// !Header 
    .header{
        position: fixed;
        z-index:1;
        width: 100%;
        top: 0;
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
        position: relative;
        top: 10vh;
        text-align: center;
    }
    .img-banner{
        width: 100%;
        height: 40vh;
    }
    .title{
        position: absolute;
        top: 50%;
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
    .marketing-content{
        position: relative;
        top: 10vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: solid red 1px;
        
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .content h2{
        font-size: 2rem;
        text-align: center;
        padding: 0 1rem;
        color:  #224229;
    }
    .content p{
        width: 90%;
        margin-top: 1rem;
        padding: 0 1rem;
    }
    .content-img{
        width: 300px;
        // box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);
        margin-top: 1rem;
    }
    .search-card{
        width: 350px;
    }
    hr{
        width: 90%;
        font-size: 2rem;
    }
    span{
        color: #548A60;
    }

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
            
            <section className="marketing-content">
                <div className="content card-one">
                    <hr></hr>
                    <h2>Never Forget to Water Your Plants Again!</h2>
                    <hr></hr>
                    <p><span>Water My Plants</span> allows you to manage the care of each of your house plants in one locations. Simply search for your plant, select your preferred watering day, and add your plant to your collection.</p>
                    <p><span>Water My Plants</span> does all the work for you! Recommended watering and light details are already provided. You simply provide the water!</p>
                    <img className="content-img" src={watering} alt="watering a plant" />
                </div>
                <div className="content card-two">
                    <hr></hr>
                    <h2>Add Your Plants</h2>
                    <hr></hr>
                    <p>Search for your plant from our large selection of houseplants. Each plant will show its recommended watering schedule and preferred lighting. </p>
                    <p>Simply select the day that you would like to start your watering schedule and add your plant to your plant collection!</p>
                    <img className="content-img search-card" src={addPlant} alt="add plant example" />
                </div>
                <div className="content card-three">
                    <hr></hr>
                    <h2>Detailed Plant Cards</h2>
                    <hr></hr>
                    <p>Once your plants are added, you will see a detailed card of each plant added to your collection.</p>
                    <img className="content-img" src={plantcard} alt="plant card example" />
                </div>
                <div className="content card-four">
                    <hr></hr>   
                    <h2>Edit Your Plants</h2>
                    <hr></hr>
                    <p>You can edit your preferred watering day or delete a plant from your collection at any time.</p>
                    <img className="content-img" src={plant1} alt="house plant" />
                </div>
                <footer className="content footer">
                    <h2>Watering Tips</h2>
                </footer>
            </section>
            

            
        </MarketingContainer>
    )
}

export default MarketingPage;