import './App.css';
import Likes from './components/Likes';
import fotoMoto from './img/Мото 6.jpg'
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <div className='wrap'>
        <div className='card'>
          <div className='card-image'>
            <img src={fotoMoto} alt='foto' />
            <Likes store = {store} />
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
