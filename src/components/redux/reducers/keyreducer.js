const initialState = {
  key: "",
};

const KEYREDUCER = (state = initialState, actions) => {
  switch (actions.type) {
    case "KEY":
      return { key: actions.payload };

    default:
      return state;
  }
};
export default KEYREDUCER;
