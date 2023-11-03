import './App.css';
import Likes from './components/Likes';
import fotoMoto from './img/Мото 6.jpg'


function App() {
  return (
    <div className="App">
      <div className='wrap'>
        <div className='card'>
          <div className='card-image'>
            <img src={fotoMoto} alt='foto' />
            <Likes/>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
