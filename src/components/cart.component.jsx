import React, { Component } from 'react';

export default class cart extends Component{





    render() {
        return(

                <tr>
                    <td>{this.props.product.item}</td>
                    <td>{this.props.product.price*this.props.product.value}</td>
                    <td>{this.props.product.value}</td>
                </tr>


        )
    }
}
