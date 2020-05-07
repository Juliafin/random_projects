import  * as actions from './../actions';


const initialState = {
  foods: ['pasta', 'sushi', 'chicken', 'ham sandwich', 'pizza'],
  toggleFood: false    
};

const movieQuotesReducer = (state=initialState, action) => {
  if (action.type === actions.TOGGLEFOOD) {
    return Object.assign({}, state, {toggleFood: !state.toggleFood});
  } else {
    return state;
  }
};


export default movieQuotesReducer;