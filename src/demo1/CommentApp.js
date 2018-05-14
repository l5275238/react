import React, { Component } from 'react';
import CommertInput from './CommentInput'
import CommertList from './CommentList'
class CommentApp extends Component{
  constructor(){
    super()
    this.state={
      List:[],
      date: new Date(),
      isShow:true,
    }
  }

  componentWillMount () {
    this._loadComments()
    this.timer = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }
  handleDeleteComment (index) {
    const comments = this.state.List
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)
  }
  inputClick(item){
    console.log(item);
    this.setState((pstate)=>{
      console.log(pstate.List.push(item));
      this._saveComments(pstate.List)
      return    {
        List:pstate.List
      }
    })

  }
  _loadComments () {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ List:comments })
    }
  }

  _saveComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  dataClick(){
    this.setState({
      isShow:!this.state.isShow
    })
  }
  componentDidMount(){
    console.log(this.div);
  }
  render(){
    return(
      <div ref={(div)=>{this.div=div}}>
        <CommertInput onClick={this.inputClick.bind(this)}/>
        <CommertList List={this.state.List}  onDeleteComment={this.handleDeleteComment.bind(this)}>

        </CommertList>
        {this.state.isShow? <div onClick={this.dataClick.bind(this)} >{this.state.date.toLocaleTimeString()}</div>:null}

      </div>
    )
  }
}
export default  CommentApp
