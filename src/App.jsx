import { useEffect, useState } from 'react' 
import "./App.css"
import Country from './Components/Country/Country'
function App() {

  const [country, setCountry] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountry(data))
  }, [])
  console.log(country);

  return (
    <>
        <div className='grid'>
            {
              country.map(con => <Country {...con}></Country>)
            }
        </div>
    </>
  )
}

export default App
