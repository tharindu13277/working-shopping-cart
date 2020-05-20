import React, {Component} from "react";
import axios from "axios";

import Product from './product';


export default class products extends Component{



    render() {
        const {products,onAddToCart,onViewCart,onDelete} = this.props;
        return(
            <div>
                <div className='row'>
                    {products.map(product =>
                        <Product
                            key={product._id}
                            product={product}
                            onAddToCart={onAddToCart}


                        />)}
                </div>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th>Item</th>
                        <th>price</th>
                        <th>QTY</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {onViewCart}
                    </tbody>
                </table>
            </div>



        )


    }


}