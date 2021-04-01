Babel used to transpile from JSX to JS
JS always in { 'this is treated as JavaScript code' }
JSX must return a single element
ex: const JSX = <h1>Hello JSX!</h1>;

<!-- {/* */} << this only --> for comments

1. ReactDOM.render(componentToRender, targetNode) to render React elements to DOM
   camelCase for everything.
   (ex. ReactDOM.render(JSX, document.getElementById('root')) placed inside JSX)
2. ReactDOM.render(<ComponentToRender />, targetNode)
   class = className
   <br> = <br />

<hr> = <hr />
