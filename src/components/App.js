import api from '../api/UnsplashApi';
import '../App.css';
import Button from './Button';
import Input from './Input';

const displayLog = () => {
  console.log("Hey Ahnaf")
  api.search('ohio').then(data => console.log(data))
}

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <div className="App-search">
          <Input placeholder="Ahnaf"/>
          <Button text="Search" handleClick={displayLog}/>
        </div>
        <div className="App-cards">

        </div>
      </div>
    </div>
  );
}

export default App;
