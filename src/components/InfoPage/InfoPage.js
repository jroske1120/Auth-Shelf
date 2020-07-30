import React, { Component } from "react";
import { connect } from "react-redux";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// const InfoPage = () => (
//   <div>
//     <p>
//       Shelf Page
//       {/* json stringify, get map here to display */}
//        {/* Add delete button with click handler reducer */}
//     </p>
//   </div>
// );
// 
// deleteClicked = () => {

//   // submit/dispatch any title and/or description changes
//     this.props.dispatch( { type: 'DELETE_ITEM', payload: {
//         id: this.state.id,    
//       }})        
//   }

class InfoPage extends Component {

  state = {
    newItem: {
      image_url: '',
      description: '',
      // user_id: this.props.reduxState.user.userid? something like that
    }
  }

  //target property values
  handleChangeFor = (event, type) => {
    this.setState({
      newItem: {
        ...this.state.newItem,
        [type]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "ADD_ITEM",
      payload: this.state.newItem
  })    // Clear Form inputs
    this.setState({
      newItem: {
        image_url: '',
        description: ''
      }
    })
  }

  componentDidMount() {
    this.getShelf();
  }
  getShelf = () => {
    this.props.dispatch({ type: "FETCH_SHELF" });
  };
  render() {
    return (
      <><div className="parent">
        {/* {JSON.stringify(this.props.reduxState.shelf)} */}
        {/* map over contents of shelf reducer, */}
        <form onSubmit={this.handleSubmit}>
        <input placeholder="Image URL"
        onChange={(event) =>
          this.handleChangeFor(event, 'image_url')}
        />
        <input  placeholder="Description"
        onChange={(event) =>
          this.handleChangeFor(event, 'description')}
        />
        <input type="submit"/>
        </form>
        <ul>
        {this.props.reduxState.shelf.map((x, thisKey) => 
          <li key={thisKey}><img src={x.image_url} alt={x.description}/></li>
  )}
             {/* <button onClick= {this.deleteClicked}>Delete</button> */}

        </ul>
        
        <br />
        </div>

      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(InfoPage);
