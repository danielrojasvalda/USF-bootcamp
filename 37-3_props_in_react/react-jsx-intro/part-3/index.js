// Person component
const Person = (props) => {
    const { name, age, hobbies } = props;
    const displayableName = name.length > 8 ? name.substring(0, 6) : name;
    const isAdult = age >= 18;
  
    return (
      <div className="person">
        <p>Learn some information about this person</p>
        <h3>{isAdult ? 'Please go vote!' : 'You must be 18'}</h3>
        <p>Name: {displayableName}</p>
        <p>Age: {age}</p>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  // App component
  const App = () => {
    return (
      <div>
        <Person name="John Doe" age={25} hobbies={['Reading', 'Coding', 'Hiking']} />
        <Person name="Alice Wonderland" age={17} hobbies={['Painting', 'Cooking', 'Gaming']} />
        <Person name="Bob Builder" age={30} hobbies={['Building', 'Fixing', 'Skiing']} />
      </div>
    );
  };
  
  // Render the App component into the root div
  ReactDOM.render(<App />, document.getElementById('root'));
  