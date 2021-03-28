import React from 'react';

const Home = () => {

    return (
        <div>
        <h1>Home Component</h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://images-na.ssl-images-amazon.com/images/I/71wPwmxo2NL._SL1500_.jpg" />
            </div>
            <div className="text-wrapper item">
                <span>
                    I-Phone
                </span>
                <span>
                    Price: $1000.00
                </span>
            </div>
            <div className="btn-wrapper item">
                <button>Add To Cart</button>
            </div>
        </div>
    </div>
    )
}

export default Home