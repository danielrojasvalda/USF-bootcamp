// Tweet component
const Tweet = (props) => {
    const { username, name, date, message } = props;
  
    return (
      <div className="tweet">
        <div>
          <strong>{name}</strong> @{username} • {date}
        </div>
        <p>{message}</p>
      </div>
    );
  };
  
  // App component
  const App = () => {
    return (
      <div>
        <Tweet
          username="user1"
          name="User One"
          date="January 20, 2024"
          message="This is my first tweet!"
        />
        <Tweet
          username="user2"
          name="User Two"
          date="January 21, 2024"
          message="Just tweeting away!"
        />
        <Tweet
          username="user3"
          name="User Three"
          date="January 22, 2024"
          message="Hello React world!"
        />
      </div>
    );
  };
  
  // Render the App component into the root div
  ReactDOM.render(<App />, document.getElementById('root'));
  