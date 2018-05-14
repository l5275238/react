import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Title extends Component {
  render () {
    return (
      <h1>React 小书</h1>
    )
  }
}

class App1 extends Component {

  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }

  constructor () {
    super()
    this.state = { isLiked: false ,
      count:2,
    }
  }

  renderGoodWord (goodWord, badWord) {
    const isGoodWord = true
    return isGoodWord ? goodWord : badWord
  }
  handleClickOnTitle () {
    if (this.props.onClick) {
      this.props.onClick()
    }
    this.setState((prevState)=>{
      console.log(prevState);
      return {count:0}
    })
    this.setState((prevState)=>{
      console.log(prevState);
      return {count:5}
    })
  }

  render() {
    const isGoodWord = false;

    return (
      <div className="App">
        <Title/>
        <h1 onClick={this.handleClickOnTitle.bind(this)}>
          {this.state.isLiked ? this.props.likedText :  this.props.unlikedText}
        </h1>
      </div>
    );
  }
}
const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]

class UserList extends Component{
  constructor(){
    super()
  }

  render(){
    return(
     users.map((item,index)=>{
       return(
         <div key={index}>
           <div>{item.username}</div>
           <div>{item.age}</div>
           <div>{item.gender}</div>
         </div>
       )
     })
    )
  }

}
class App extends Component{
  constructor () {
    super()
    this.state = {
      likedText:"哈哈",
      unlikedText:"嘿嘿22"
    }
  }
  handClick(){
    console.log(1);
    this.setState({
      likedText:"啊啊",
      unlikedText:"嘿嘿"
    })
  }

  render(){
    return(
      <div>
        <App1 likedText={this.state.likedText} unlikedText={this.state.unlikedText}  onClick={this.handClick.bind(this)} />
        <UserList/>
      </div>


    )

  }

}
export default App;
