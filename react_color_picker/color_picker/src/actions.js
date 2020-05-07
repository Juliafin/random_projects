export const SUBMITCOLOR = 'SUBMIT_COLOR';

export const submitColor = (color) => {
  return {
    type: SUBMITCOLOR,
    color: color
  }
};


export const CHANGECOLOR = 'CHANGE_COLOR';

export const changeColor = (color) => {
  return {
    type: CHANGECOLOR,
    color: color
  };
};


export const CLEARHISTORY = 'CLEAR_HISTORY';

export const clearHistory = () => {
  return {
    type: CLEARHISTORY
  };
};



