// Here we created a shelf reducer in the reducers &
// within sagas we will be placed a shelf saga as well.

// This reducer is our array where we put all of our items where
// we will be able to map through them and display them on the dom
// on the shelf page


const shelfReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SHELF':
        return action.payload;
    //   case 'UNSET_USER':
    //     return {};
      default:
        return state;
    }
  };
  

export default shelfReducer;