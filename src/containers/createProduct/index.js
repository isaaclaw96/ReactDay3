import React from 'react';
import {products} from "../../productData";

class CreateProduct extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            id: '',
            name: '',
            description: '',
            cost: 0,
        }
        
    }

    submitForm(){  

        if(!this.state.id || !this.state.name || !this.state.description || !this.state.cost){
            alert("Field is empty");
            return;
        }
        for(var i=0;i<products.length;i++){
            if(this.state.id === products[i].id){
                alert("ID already exists");
                return;
            }
        }
        products.push(this.state);
        alert("Product added");
        console.log("Products: ", products);
        

        //if data empty not allow to submit
        //array function find()
        //if id exist then dont allow to submit
        //this.find(list.name) -> array functions

        
    }
    render(){
        return(
            <form action="#">
                <label htmlFor="id">ID: </label>
                <input id="id" type="text" placeholder="ID" onChange={(idval) => {this.setState({id: idval.target.value});}}/>

                <label htmlFor="name">Name: </label>
                <input id="name" type="text" placeholder="Name" onChange={(nameval) => {this.setState({name: nameval.target.value});}} />

                <label htmlFor="desc">Description: </label>
                <input id="desc" type="text" placeholder="Description" onChange={(descval) => {this.setState({description: descval.target.value});}}/>

                <label htmlFor="cost">Cost: </label>
                <input id="cost" type="text" placeholder="Cost" onChange={(costval) => {this.setState({cost: costval.target.value});}}/>

                <button onClick={()=>{this.submitForm()}}>Submit</button>
            </form>
        );
    }
}

export default CreateProduct;