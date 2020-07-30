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

class InfoPage extends Component {
  componentDidMount() {
    this.getShelf();
  }
  getShelf = () => {
    this.props.dispatch({ type: "FETCH_SHELF" });
  };
  render() {
    return (
      <><div className="parent">
        {JSON.stringify(this.props.reduxState.shelf)}
        {/* map over contents of movies reducer, */}
        {/* creating a movieItem component for each */}
        <ul>
        {this.props.reduxState.shelf.map((x, thisKey) => (
           <li key={thisKey}>{x.id}</li>
        ))}
        </ul>
        {/* <button onClick= {this.deleteClicked}>Delete</button>*/}
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
