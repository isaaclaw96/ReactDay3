import React from 'react';
import {products} from "../../productData";
import classes from "./dashboard.module.css";
import Product from "../../components/product_list";
import {Link} from "react-router-dom";

class Dashboard extends React.Component{
    constructor(){
        super();

        this.state = {
            search: ""
        };
    }

    updateSearch(event){
        this.setState({search: event.target.value.substr(0,20)});
    }
    

    render(){
        let filteredContent = products.filter(
            (list)=>{
                return list.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )
        return(
            <div className={classes.dashboard_section}>
                <div className={classes.search_head}>
                    <h1>This is Dashboard</h1>
                    <Link to="/create">Create New Product</Link>
                    <form action="#">
                        <input id="search" type="text" placeholder="Search..." value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                    </form>
                    
                </div>

                <div>
                    {filteredContent.map(list=> 
                        <Product 
                            carData={list}
                            link={list.id}
                            image={list.image} 
                            name={list.name} 
                            cost={list.cost} 
                            short_description={list.short_description}
                        />)}
                </div>
            </div>
            
        )
    }
}

export default Dashboard;