import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import Products from './newComponents/products';
import NavBar from './components/TestNavBar';
import Cart from "./newComponents/cart";

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            products:[],
            cart:[]

        }


    }
    addToCartHandler = (product) =>{

        //must add this product to the cart
        //check if the cart have this product
        //if yes increment value
        //else add that product to the cart


        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...product};
        products[index].value++;
        this.setState({products},
        ()=>console.log(this.state.products[index].value)
        )






    }

    componentDidMount() {
        axios.get('http://localhost:5000/products/')
            .then(res =>{
                this.setState({
                    products:res.data
                });
                console.log("inside component did mount")
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            });


        console.log(this.state.products);

    }
    cartList() {
        return this.state.products.filter(c=>c.value>0).map(product => {
            console.log('add to cart initiated')
            return <Cart
                key={product._id}
                product={product}
                onDelete={this.handleDelete}

            />;
        })
    }
    handleDelete=(productId)=>{
        console.log('handle delete',productId)
       const newProducts = this.state.products.filter(c => c._id !== productId);//filter everything but the object with counterId
        this.setState({
            products:newProducts
        });
    }


    render() {

        return (
            <div className='container'>
                <NavBar totalCount={this.state.products.filter(c=>c.value>0).length}/>
                <Products
                    products={this.state.products}
                    onAddToCart={this.addToCartHandler}
                    onViewCart={this.cartList()}

                />
            </div>



        );
    }


}


