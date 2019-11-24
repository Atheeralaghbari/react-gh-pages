import React, { Component } from 'react'

class Post extends React.Component {
    render() {
      return (
       <div>
        <div className={this.props.first}>
       
        <h1 id="price">  <sup id="dollar">$</sup>{this.props.price} </h1>
        <h5 id="month">{this.props.perMonth}</h5>
        <h3 id="middle">{this.props.middle}</h3>
        </div>

        <div className={this.props.inner}>
        <p id="mb">{this.props.MB}</p>
        <p id="bandwidth">{this.props.bandwidth}</p>
        <p id="space">{this.props.space}</p>
        <button id="btn">{this.props.btn}</button>
        </div>
        </div>
      
      
      )
    }
  }

  export default Post;
  Post.deafultProps={
    first:"first",
      price:"20",
      perMonth:"Per Month",
      middle:"Not Professional",
      inner:"more1",
      MB:"265 MB Memory",
      bandwidth:"limited Bandwidth",
      space:"",
      btn:"",

  }