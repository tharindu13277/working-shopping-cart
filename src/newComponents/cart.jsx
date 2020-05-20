import React, {Component} from "react";

export default class cart extends Component{




    render() {
        const {product,onDelete} = this.props
        return (
            <tr>
                <td>{product.item}</td>
                <td>{product.price*product.value}</td>
                <td>{product.value}</td>
                <td><button onClick={()=>onDelete(product._id)}  className="btn btn-danger sm-2">Delete</button></td>
            </tr>


        );
    }


}