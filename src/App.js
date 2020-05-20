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



        const cart = [...this.state.products];
        const index = cart.indexOf(product);
        console.log('index',index)
        if (index.length>=0){
            cart[index] = {...product};
            cart[index].value++;
            this.setState({cart},
                ()=>console.log(this.state.products[index].value)
            )
        }else {
            cart[index].value++
            this.setState({cart})
        }
        /*
        products[index] = {...product};
        products[index].value++;
        this.setState({products},
            ()=>console.log(this.state.products[index].value)
        )*/




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
        return this.state.cart.filter(c=>c.value>0).map(product => {
            console.log('add to cart initiated',product.value)
            return <Cart
                key={product._id}
                product={product}
                onDelete={this.handleDelete}

            />;
        })
    }
    handleDelete=(productId)=>{
        console.log('handle delete',productId)
       const newProducts = this.state.cart.filter(c => c._id !== productId);//filter everything but the object with counterId
        this.setState({
            cart:newProducts
        });
    }


    render() {

        return (
            <div className='container'>
                <NavBar totalCount={this.state.cart.filter(c=>c.value>0).length}/>
                <Products
                    products={this.state.products}
                    onAddToCart={this.addToCartHandler}
                    onViewCart={this.cartList()}

                />
            </div>



        );
    }


}


