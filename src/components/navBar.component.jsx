import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Shop</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/addProducts" className="nav-link">Add Products</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>

                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item ">
                            <Link to="/cart" className="nav-link"><span className="badge badge-pill badge-secondary">1</span><i className="fas fa-shopping-cart"></i></Link>
                        </li>
                        <li className="navbar-item ">
                            <Link to="/signIn" className="nav-link">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}