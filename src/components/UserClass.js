import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
        console.log("constructor called");   
    }
    componentDidMount(){
        
    }
    render(){
        return(
        
            <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
                {console.log("render called")}
            <h1>count : {this.state.count}</h1>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count+1,
                })
            }}>click me</button>
            <h1>name : {this.props.name}</h1>
            <h2>location : {this.props.location} </h2>
            <h2>account : {this.props.account}</h2>
        </div>
        );
    }
}
export default UserClass;