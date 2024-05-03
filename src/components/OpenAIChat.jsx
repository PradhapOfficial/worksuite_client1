import React, { Component } from "react";
import chat from "../actions/OpenAI";
export  class OpenAIChat extends Component {
    constructor(props){
        super(props);
        this.queryRef = React.createRef();
        this.state = {
            content: ""
        }
    }

    setChatState = (message) =>{
        console.log("Mesage : "+JSON.stringify(message));
        this.setState({
            content: message
        });

        
    }

    openAIChat = (event) => {
        console.log(this.queryRef.current.value);
       // event.onKeyDown
        if (event && event.key === 'Enter') {
            const payload = {
                content:this.queryRef.current.value
            }
            chat(payload, this.setChatState);
        }
    }
    render(){
        return(
            <div className="chatCon">
               <textarea type="text" className="customInput darkMode txtArea" defaultValue={this.state.content}></textarea>
                <textarea type="text" className="customInput darkMode queryCon" placeholder="Enter Your Query Here" ref={this.queryRef} onKeyPress={(event) => this.openAIChat(event)}></textarea>
            </div>
        );
    }
}