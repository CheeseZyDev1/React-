import Contact from './assets/Contact';
import Hello from './assets/hello';

function App() {
  const helloData = [
    { name: 'Napat', message: 'Hi there' },
    { name: 'Tom', message: 'Hello..' }
  ];

  return (
    <div>
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}
      <Contact email="napat@gmail.com" phone="087-777-777" />
    </div>
  );
}

export default App;
