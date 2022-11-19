import React, { Component } from 'react';
import Nav from './Nav';
import Quest from './Quest';
import axios from "axios";

export default class Home extends Component {
  state = {
    questions:[]
  }
  
  componentDidMount(){
    axios.get('http://localhost:8080/question').then((resp) =>{
      console.log(resp.data);
      this.setState({questions : resp.data});
    })
   // console.log(resp.config);
    
  }

  render() {
    return (
    
      <div>
       
        <Nav />
        {
          this.state.questions.map(quest => <Quest key = {quest.qid} question= {quest.ques}/>)
        }
        {/* <Quest question="who is buvi ?" />
        <Quest question="what is the what os the bla bla ?"/> */}
      </div>
    )
  }
}
