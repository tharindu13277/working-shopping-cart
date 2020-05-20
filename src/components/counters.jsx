import React,{Component} from "react";
import Counter from "./counter";

export default class counters extends Component {


    render() {
        const {counters, onDelete, onIncrement} = this.props;//object destructuring
        return(
            <div>
                {counters.map(counter =>
                    <Counter
                    key={counter.id}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    counter = {counter}//name of the prop is counter and it pass couner fro map function to Counter component


                />)}
            </div>
        )
    }


}
