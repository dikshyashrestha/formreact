import React, { Component } from 'react';
import './style.css'
import Logo from './images/logo.jpg'
import { FiShoppingCart } from 'react-icons/fi';
import MainLogo from './images/logo.png'

class Login extends Component {
    render() {
        return (
            <div className='hello'>
                <div className='row'>
                    <div className='images col-sm-9'>
                        <img className='logo' src={MainLogo} style={{ height: '120px', width: '150px' }} />
                    </div>
                    <div className='homebtn col-sm-3'>
                        <a href='/'><button className='button btn-dark'>login</button></a>
                        <a href='/register'><button className='button btn-dark'>register</button></a>
                        <a href=''><button className='button btn-dark'><FiShoppingCart /></button></a>
                    </div>
                </div>
                <div className='row NavBar' style={{ justifyContent: 'center', paddingTop: '5px' }}>
                    <div className='col-sm-2 navicon' style={{ textAlign: 'center' }}>
                        <a href=''><h4>Home</h4></a>
                    </div>

                    <div className='col-sm-2 navicon' style={{ textAlign: 'center' }}>
                        <a href=''><h4>What's New</h4></a>
                    </div>

                    <div className='col-sm-2 navicon' style={{ textAlign: 'center' }}>
                        <a href=''><h4>Products</h4></a>
                    </div>

                    <div className='col-sm-2 navicon' style={{ textAlign: 'center' }}>
                        <a href=''><h4>About</h4></a>
                    </div>

                    <div className='col-sm-2 navicon' style={{ textAlign: 'center' }}>
                        <a href=''><h4>Contact</h4></a>
                    </div>

                </div>

                {/* home page first row */}
                <div className='row'>
                    <div class="homecard" style={{ width: '18rem' }}>
                        <img class="card-img-top" src={Logo} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Skin</h5>
                            <p class="card-text">Original</p>
                            <a href="#" class="btn btn-primary">View Products</a>
                        </div>
                    </div>

                    <div class="homecard" style={{ width: '18rem' }}>
                        <img class="card-img-top" src={Logo} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Skin</h5>
                            <p class="card-text">Original</p>
                            <a href="#" class="btn btn-primary">View Products</a>
                        </div>
                    </div>

                    {/* <div class="homecard" style={{ width: '18rem' }}>
                        <img class="card-img-top" src={Logo} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Skin</h5>
                            <p class="card-text">Original</p>
                            <a href="#" class="btn btn-primary">View Products</a>
                        </div>
                    </div> */}
                    <div class="card homecard" style={{width: '18rem'}}>
                        <img class="card-img-top" src={Logo} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                {/* Home page second row */}
                <div className='row'>
                    <div class="homecard" style={{ width: '18rem' }}>
                        <img class="card-img-top" src={Logo} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Skin</h5>
                            <p class="card-text">Original</p>
                            <a href="#" class="btn btn-primary">View Products</a>
                        </div>
                    </div>

                    <div class="homecard" style={{ width: '18rem' }}>
                        <img class="card-img-top" src={Logo} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Skin</h5>
                            <p class="card-text">Original</p>
                            <a href="#" class="btn btn-primary">View Products</a>
                        </div>
                    </div>

                    <div class="homecard" style={{ width: '18rem' }}>
                        <img class="card-img-top" src={Logo} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Skin</h5>
                            <p class="card-text">Original</p>
                            <a href="#" class="btn btn-primary">View Products</a>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <footer className='foots'>
                </footer>
            </div>

        )
    }
}
export default Login;
