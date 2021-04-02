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

//Passing Props(properties) to Class Component(from Parent component to Child component):
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
//Passing an array:
const List = (props) => {
  /* #3 */
  return <p>{props.tasks.join(',')}</p>;
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        {/* #1 */}
        <List tasks={['walk dog', 'workout']} />
        <h2>Tomorrow</h2>
        <List tasks={['play games', 'do whatever', 'test']} />
        {/* #2 */}
      </div>
    );
  }
}
//Overwriting default property:
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.defaultProps = {
  quantity: 0,
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    /* Here */
    return <Items quantity={10} />;
  }
}

//Accessing props, using this.props:
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* HERE */}
        <p>
          Your temporary password is: <strong>{this.props.tempPassword}</strong>
        </p>

        {/* HERE */}
      </div>
    );
  }
}

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Reset Password</h2>
        <h3>We've generated a new temporary password for you.</h3>
        <h3>Please reset this password from your account settings ASAP.</h3>
        {/* HERE */}
        <ReturnTempPassword tempPassword={'String8characterslong'} />
        {/* HERE */}
      </div>
    );
  }
}

//Create Camper component:

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
}
// HERE
class Camper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>CamperBot</p>;
  }
}
Camper.defaultProps = {
  name: 'CamperBot',
};

Camper.propTypes = {
  name: PropTypes.string.isRequired,
};
