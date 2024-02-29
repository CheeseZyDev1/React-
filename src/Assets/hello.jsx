import React from 'react'; 
import Hello from "./Assets/hello.jsx"; // Adjust the path as needed

function App() {
  console.log('App component');
  return (
    <div>
      <Hello name="bob" message="how are you" />
    </div>
  );
}

export default App;
