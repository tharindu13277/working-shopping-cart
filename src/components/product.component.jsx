import React, {Component} from 'react';
//import {Redirect} from "react-router-dom";

export default class products extends Component{



   /* setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }*/


   /* addToCart() {
        this.props.addToCart(this.props.product);


    }*/


    render() {
        return(
            <tr>
                <td>{this.props.product.item}</td>
                <td>{this.props.product.price}</td>
                <td>{this.props.product.qty}</td>


                <td>

                    <button className="btn btn-outline-secondary btn-sm" onClick={()=> this.props.addToCart(this.props.product)}>
                    Add to cart
                </button>
                </td>


            </tr>




        )
    }
}










