import React, { Component } from 'react';

class Item extends Component{
  constructor () {
    super()
    this.state = { timeString: '' }
  }
  componentWillMount () {
    this._updateTimeString();
    this._timer = setInterval(
      this._updateTimeString.bind(this),
      5000
    )
  }
  componentWillUnmount () {
    clearInterval(this._timer)
  }
  handleDeleteComment(){
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }
  _updateTimeString () {
    const comment = this.props.objct
    const duration = (+Date.now() - comment.createdTime) / 1000

    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }

  render(){
    return(
      <div>
        {this.props.objct.userName}：{this.props.objct.centent}
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span
          onClick={this.handleDeleteComment.bind(this)}
          className='comment-delete'>
          删除
        </span>
      </div>
    )
  }

}

class ComponentList extends Component{
  static defaultProps={
    List:[]
  }
  handleDeleteComment(index){

    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
  render(){

    return( <div>
      {this.props.List.map((item,index)=>{
        return(
          <div key={index} >
            <Item objct={item}  index={index} onDeleteComment={this.handleDeleteComment.bind(this)} />
          </div>
        )


      })}
      {this.props.children}
    </div>)


  }
}
export default ComponentList
