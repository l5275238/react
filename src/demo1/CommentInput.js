import React, { Component } from 'react';

class ComponentInput extends Component{
  constructor(){
    super()
    this.state={
      userName:"",
      centenet:""
    }
  }
  static defaultProps={
    onClick:function () {
      console.log(1);
    },
    userNameChange:function(event){
      this.setState({
        userName: event.target.value
      })
    },
    centenetChange:function(event){
      this.setState({
        centenet: event.target.value
      })
    },

  }
  bnClick(){
    this.props.onClick({
      userName:this.state.userName,
      centenet:this.state.centenet,
      createdTime: +new Date()

    })
    this.setState({ centenet: '' })
  }
  componentDidMount(){

    this.input.focus()
  }
  componentWillMount () {
    this._loadUsername()
  }
  _saveUsername (username) {
    localStorage.setItem('userName', username)
  }
  _loadUsername () {
    const username = localStorage.getItem('userName')
    console.log(username);
    if (username) {
      this.setState({'userName':username })
    }
  }
  handleUsernameBlur(event){
    this._saveUsername(event.target.value)
  }

  render(){

    return( <div>
      <div>
      用户名：<input value={this.state.userName} onChange={this.props.userNameChange.bind(this)}   onBlur={this.handleUsernameBlur.bind(this)}/>
      </div>
      <div>
        评论内容：<input value={this.state.centenet}  ref={(input)=>this.input=input}  onChange={this.props.centenetChange.bind(this)}/>
      </div>
      <button onClick={this.bnClick.bind(this)}>提交</button>
    </div>)


  }
}
export default ComponentInput
