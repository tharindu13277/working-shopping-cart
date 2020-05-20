import React,{Component} from "react";

//stateless functions
//this key wrod only works with class components

const TestNavBar = (props) =>{
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary">{props.totalCount}</span>
            </a>
        </nav>
    )

}
export default TestNavBar;