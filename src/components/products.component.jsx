import React, { Component } from 'react';
import axios from 'axios'
import Product from './product.component'
import Cart from './cart.component';


export default class products extends Component{


    constructor(props) {
        super(props);
        this.state={
            products:[]

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
        this.setState({products})




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




    }




    productList() {
        return this.state.products.map(product => {
            return <Product
                key={product._id}
                product={product}
                addToCart={this.addToCartHandler}
            />;
        })

    }

   cartList() {
       return this.state.products.filter(c=>c.value>0).map(product => {

            return <Cart
                key={product._id}
                product={product}

            />;
        })
    }





    render() {

        return(
            <div>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>item</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th></th>

                    </tr>
                    </thead>
                    <tbody>
                    { this.productList ()}
                    </tbody>
                </table>

                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th>Item</th>
                        <th>price</th>
                        <th>QTY</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.cartList()}
                    </tbody>
                </table>




            </div>
        )
    }


}