import Hello from "./assets/hello";
import Contact from "./assets/Contact";
import Counter from "./assets/Counter";



function App() {
  const helloData = [
    { name: 'Napat', message: 'Hi there' },
    { name: 'Tom', message: 'Hello..' }
  ];

  return (

    <div className='App'>
      <Counter/>
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}
      <Contact email="napat@gmail.com" phone="087-777-777" />
    </div>
  );
}

export default App;
