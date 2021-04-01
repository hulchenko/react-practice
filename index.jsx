//render the ChildComponent in the ParentComponent
/*React component is an ES6 class which extends React.Component */
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        {/* HERE */}
        <ChildComponent />
        {/* HERE */}
      </div>
    );
  }
}

//Another example with 2 nestings:
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
      </div>
    );
  }
}
//(Render a Class Component to the DOM)
//ex.:ReactDOM.render(<ComponentToRender />, targetNode);
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
}
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));

//React Component from Scratch:
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}
ReactDOM.render(<MyComponent />, getElementById('challenge-node'));

//Passing Props to Class Component:
const CurrentDate = (props) => {
  return (
    <div>
      {/* HERE */}
      <p>The current date is: {props.date}</p>
      {/* HERE */}
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        {/* HERE */}
        <CurrentDate date={Date()} />
        {/* HERE */}
      </div>
    );
  }
}
