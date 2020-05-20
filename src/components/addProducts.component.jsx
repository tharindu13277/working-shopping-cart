import React, { Component } from 'react';
import axios from "axios";


export default class addProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: "",
            imageUrl:"",
            price: "",
            qty: "",


        }

    }


    onChangeItem = (e) => {
        this.setState({
            item: e.target.value
        });
    }

    onChangePrice = (e) => {
        this.setState({
            price: e.target.value
        });
    }

    onChangeQty = (e) => {
        this.setState({
            qty: e.target.value
        });
    }

    onChangeImgUrl = (e) => {
        this.setState({
            imageUrl: e.target.value
        });
    }



    onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            item: this.state.item,
            imageUrl: this.state.imageUrl,
            price: this.state.price,
            qty: this.state.qty
        };
        console.log(newItem);

       axios.post('http://localhost:5000/products/addProduct', newItem)
            .then(res => console.log(res.data));

        this.setState({
            item: '',
            imageUrl:'',
            price: '',
            qty: ''
        });


    }


    render() {
        return (
            <div>
                <h3>Add New Products</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Item: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.item}
                               onChange={this.onChangeItem}
                        />
                        <label>Image URL: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.imageUrl}
                               onChange={this.onChangeImgUrl}
                        />
                        <label>Price: </label>
                        <input type="Number"
                               required
                               className="form-control"
                               value={this.state.price}
                               onChange={this.onChangePrice}
                        />
                        <label>Qty: </label>
                        <input type="Number"
                               required
                               className="form-control"
                               value={this.state.qty}
                               onChange={this.onChangeQty}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Products" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );

    }
}

