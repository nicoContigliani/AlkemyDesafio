import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/mains/Main';
import Presentation from './components/presentations/Presentation';


function App() {
  const [pre, setPre] = useState(true)
  useEffect(
    () => {
       setTimeout(() => {
         setPre(false)
       }, 2000);

    }, [])
  return (
    <div >
      {
        pre ? (<Presentation />) : (<Main />)

      }

    </div>
  );
}

export default App;
