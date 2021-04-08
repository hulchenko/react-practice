//#1 Declare store:
const reducer = (state = 5) => {
  return state;
};
const store = Redux.createStore(reducer);
//#2 Get state/data from it:
const currentState = store.getState();
//#3 Defining Redux action:
const action = {
  type: 'LOGIN',
};
//#4 Dispatch action:
const store = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
  return {
    type: 'LOGIN',
  };
};
// HERE
store.dispatch(loginAction());
//#5 Handle action with reducer(it's reducer only task: a pure function that takes state and action, then returns new state):
