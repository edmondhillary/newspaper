const news = (state, action) => {
    switch (action.type) {
      case "GET_NEWS":
        return {
          ...state,
          news: action.payload,
          
        };
      default:
        return console.log(state),state;
    }
  };
  export default news;