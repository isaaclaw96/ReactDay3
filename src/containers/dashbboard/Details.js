import React from 'react';
import classes from "./details.module.css";



class Details extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            data: this.props.location.state,
        }
    }

    render(){
        return(
            <div>
            <div className={classes.product_img}> </div>

            <div>
                <h1>{this.state.data.name}</h1>
                <h4>{this.state.data.short_description}</h4>
                <ul>
                    {this.state.data.bullet_description.map((bullet) => (
                        <li>{bullet}</li>
                    ))}
                </ul>
                {/*<p>{this.state.data.bullet_description}</p>*/}

                <h5>${this.state.data.cost}</h5>
                <button>Buy Now</button>
            </div>
            </div>
        );
    }

}

export default Details;