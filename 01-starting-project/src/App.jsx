const reactDescriptions = ['Fundamental', 'Crucial', 'Core']; 

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const descrition = reactDescriptions[genRandomInt(2)]
  return (
    <div>
      <header>
        <h1>React Essentials</h1>
        <p>
           {descrition} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );                       
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Are you ready!</h2>
      </main>
    </div>
  );
}

export default App;
