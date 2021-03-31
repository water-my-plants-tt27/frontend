import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


// images
import logo from '../images/logo.svg';
import plantBanner from '../images/houseplants.jpeg';
import watering from '../images/watering.jpeg';
import plantcard from '../images/plantcard.svg';
import addPlant from '../images/Add-plant.svg';
import plant1 from '../images/plant1.jpeg';
import insta from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';

// styling
const MarketingContainer = styled.div`
    font-family: PT Serif;
    width: 100%;
    background-color: #FFFFFF;
    position: relative;
    min-height: 100vh;
    
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
        cursor: pointer;
    }
    .login{
        margin-right: 2rem;
    }

// !Main Container
    .main-container{
        padding-bottom: 4rem;
        width: 100%;
    }

// !Marketing Banner
    .marketing-banner{
        position: relative;
        top: 10vh;
        text-align: center;
        width: 100%;
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
        width: 100%;
        position: relative;
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .pic-text{
        display: flex;
        flex-direction: column;
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
        margin-top: 1rem;
        align-self: center;
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
// !Register Banner
    .register-banner{
        width: 100%;
        background-color: #FBF9F3;
        text-align: center;
        margin: 1rem;
        padding: 1.5rem 0;
    }
    .register{
        color: #548A60;
        font-family: Raleway;
        font-size: 1.3rem; 
    }
// !Footer
    .footer{
        position: absolute;
        width: 100%;
        bottom: 0;
        height: 4rem;
        display: flex;
        flex-direction: column;
        background-color: #22422A;
        display: flex;
        justify-content: center;
    }
    .footer h2{
        color: #FFFFFF;
        font-size: .8rem;
        margin-left: .5rem;
    }
    .footer-info{
        display: flex;
        flex-direction: row;
    }
    .icon{
        width: 1.5rem;
        margin-top: .5rem;
        margin-left: .5rem;
    }

    @media (min-width: 768px){
        .logo img{
            width: 150px;
            height: 150px;
        }
        .link{
            font-size: 1.5rem;
        }
        .title{
            top: 55%;
            width: 70%;
        }
        .title h1{
            font-size: 5rem;
            line-height: 5.5rem;
        }
        .marketing-content{
            margin-top: 6.5rem;
        }
        .content p{
            width: 95%;
            font-size: 1.3rem;
        }
        .search-card{
            width: 700px;
            box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);
            margin-bottom: 1rem;
        }
        .register{
            font-size: 2rem; 
        }
        .footer{
            flex-direction: row;
            justify-content: left;
            align-items: center;
        }
        .footer h2{
            font-size: 1.1rem;
            margin-left: .5rem;
        }
        .social-media{
            margin-left: 28rem;
        }
        .icon{
            width: 2rem;
        }
    }
    @media (min-width: 1024px){
        .logo img{
            width: 200px;
            height: 200px;
        }
        .link{
            font-size: 1.8rem;
        }
        .title{
            width: 80%;
        }
        .title h1{
            font-size: 6rem;
            line-height: 6.5rem;
        }
        .marketing-content{
            margin-top: 10rem;
        }
        .content{
            // flex-direction: row;
        }
        .pic-text{
            flex-direction: row-reverse;
            width: 90%;
        }
        .content p{
            font-size: 1.5rem;
        }
        .search-card{
            width: 600px;
        }
        .register{
            font-size: 3rem; 
        }
        .social-media{
            margin-left: 30rem;
        }
        .footer h2{
            font-size: 1.1rem;
            margin-left: .5rem;
            padding-right: 2rem;
        }
        .icon{
            width: 2.5rem;
            padding-left: 2.5rem;
        }
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

            <div className="main-container">
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
                        <div className="pic-text">
                            <p><span>Water My Plants</span> allows you to manage the care of each of your house plants in one locations. Simply search for your plant, select your preferred watering day, and add your plant to your collection.<br></br><br></br><span>Water My Plants</span> does all the work for you! Recommended watering and light details are already provided. You simply provide the water!</p>
                            <img className="content-img" src={watering} alt="watering a plant" />
                        </div>
                    </div>
                    <div className="content card-two">
                        <hr></hr>
                        <h2>Add Your Plants</h2>
                        <hr></hr>
                        <div className="pic-text">
                            <p>Search for your plant from our large selection of houseplants. Each plant will show its recommended watering schedule and preferred lighting.<br></br><br></br>Simply select the day that you would like to start your watering schedule and add your plant to your plant collection!</p>
                            <img className="content-img search-card" src={addPlant} alt="add plant example" />
                        </div>
                    </div>
                    <div className="content card-three">
                        <hr></hr>
                        <h2>Detailed Plant Cards</h2>
                        <hr></hr>
                        <div className="pic-text">
                            <p>Once your plants are added, you will see a detailed card of each plant added to your collection.<br></br><br></br>Plant cards will provide you with all of the inforamtion you need to care for your plants. You can view the species name along with the common name for your plant.<br></br><br></br>Your watering schedule is custom for your schedule. You can edit your preferred watering days or delete a plant from your collection at any time.</p>
                            <img className="content-img" src={plantcard} alt="plant card example" />
                        </div>
                        <div className="register-banner">
                            <Link className="link register" to='/register'>Register and start watering today!</Link>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div className="footer-info">
                        <h2>Terms</h2>
                        <h2>Privacy Policy</h2> 
                    </div>
                    <div className="social-media">
                        <img className="icon" src={twitter} alt="twitter icon" />
                        <img className="icon" src={insta} alt="instagram icon" />
                        <img className="icon" src={facebook} alt="facebook icon" />
                    </div>
                </footer>
            </div>
        </MarketingContainer>
    )
}

export default MarketingPage;