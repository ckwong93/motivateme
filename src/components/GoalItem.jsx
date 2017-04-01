import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase';


class GoalItem extends Component {
  completeGoal(){
    // add to complete goals on the database
    //remove this goal from goals reference
    const { email } = this.props.user;
    const { title, serverKey } = this.props.goal;
    // console.log('serverKey', serverKey)
    // console.log('email', email, 'title', title);
    goalRef.child(serverKey).remove();
    // this removes item from goal ref key when item is completed
    completeGoalRef.push({email, title});
    // when user clicks complete, this pushes the item to the completed goal database
  }
  render(){
    const {email, title} = this.props.goal;
    return(
      <div style={{margin: '5px'}}>
        <strong>{title}</strong>
        <span style={{marginRight: '5px'}}> submitted by <em>{email}</em></span>
        <button
          className='btn btn-sm btn-primary'
          onClick={() => this.completeGoal()}
          >
            Complete
          </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { user } = state;
  return {
    user
  }
}
export default connect(mapStateToProps, null)(GoalItem);
