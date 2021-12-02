import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/mains/Main';
import Presentation from './components/presentations/Presentation';


function App() {
  const [pre, setPre] = useState(true)
  const [data, setData] = useState("0")
  useEffect(
    () => {
      setTimeout(() => {
        setPre(false)
      }, 2000);

    }, [])

  useEffect(() => {

    if (localStorage.getItem('userSession')) {
      const userSession = JSON.parse(localStorage.getItem('userSession'))
      setData(userSession)
    }

  }, [])





  
  return (
    <div >
      {
        pre ? (<Presentation value={{data}} />) : (<Main value={{data}} />)

      }

    </div>
  );
}

export default App;
