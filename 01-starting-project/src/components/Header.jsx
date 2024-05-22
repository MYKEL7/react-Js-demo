import reactIcon from '../assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']; 

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


export default function Header() {
    const descrition = reactDescriptions[genRandomInt(2)]
    return (
      <div>
        <header>
          <img src={reactIcon} alt="icon" />
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