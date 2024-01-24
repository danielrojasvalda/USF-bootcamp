
// FirstComponent
const FirstComponent = () => {
    return <h1>My very first component</h1>;
  };
  
  // NamedComponent
  const NamedComponent = ({ name }) => {
    return <p>My name is {name}</p>;
  };
  
  // App
  const App = () => {
    return (
      <div>
        <FirstComponent />
        <NamedComponent name="Daniel" />
      </div>
    );
  };
  
  // Render the App component into the root div
  ReactDOM.render(<App />, document.getElementById('root'));
  