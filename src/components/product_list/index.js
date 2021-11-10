import React from 'react';
import classes from "./product.module.css";
import {Link} from "react-router-dom";

class Product extends React.Component{

    render(){
        return(
            <div className={classes.product_section}>
                <div className={classes.product_image}>
                    <img src={this.props.image} alt="" />
                </div>

                <div className={classes.product_details}>
                    <h3>Product: {this.props.name}</h3>
                    <p>Cost: ${this.props.cost} </p>
                    <p>Description: {this.props.short_description}</p>
                    <button>
                        {/*<Link to={`/dashboard/${this.props.link}`}>Buy Now</Link>*/}

                        <Link to={{
                            pathname: `/dashboard/${this.props.link}`,
                            state: this.props.carData,
                            }}>
                            Buy Now
                        </Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default Product;