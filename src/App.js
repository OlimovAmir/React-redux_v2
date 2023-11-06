import './App.css';
import Likes from './components/Likes';
import Title from './components/Title';
import fotoMoto from './img/Мото 6.jpg'
import Comments from './components/Comments';




function App() {
  return (
    <div className="App">
      <div className='wrap'>
        <div className='card'>
          <div className='card-image'>
            <img src={fotoMoto} alt='foto' />
            
            <Likes/>
          </div>
          <div className='test'>
          <Comments className=''/>
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
