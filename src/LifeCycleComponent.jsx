import React from "react";

export default class LifeCycleComponent extends React.Component{
    constructor(){
        super();
        this.state={count:0}
    }
    componentDidMount(){
        console.log("ComponentDidMount")
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate",this.state.count)
    }
    componentWillUnmount(){
        console.log("ComponentWillUnmount")
    }

    render(){
        return(
            <>
            <h1>Life cycle of component</h1>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Count</button>
            </>
        )
    }
}