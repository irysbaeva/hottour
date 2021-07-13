let initialState = {
  tour: {
    title: null,
    destination: null,
    city: null,
    start: new Date(),
    end: new Date(),
    hotel: null,
    price: null,
    food: null,
    tourists: null,
    rules: null,
    comments: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TOUR":
      return {
        ...state,
        tour: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
