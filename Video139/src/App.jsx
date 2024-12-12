import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Now jo Navbar hai usme as  a Prop bhejdo Counter ko. */}
    <Navbar counter={count}/>
    {/* Prop-Drilling. 
    
    Lekin main keh rha hu ki main ye props ki drilling nhi krna chahta hu. Ho skta hai Navbar ke
    ek aur component ho and uske andar ek aur component ho... So kya main props bhejta rhuga
    har component se ek dusre component mein. Nhi! So iss case mein hum Redux ka use krte hai.
    
    Redux store is a single source of truth jaha par humari State Stored hoti hai.

    Now ab hum dekhege ki bina prop drilling ke kaise hum count ko Navbar mein bhej skte hai.
    
    Now hum dekhege ki kaise App.jsx and Navbar.jsx Redux Store se baat krege na ki apas mein
    baat krege.

    Redux Store mein jo bhi humne update kr diya toh woh directly update ho jayega humare application mein.

    Redux Store mein hum count ke jaise bhut sare States ko Daal Skte hai.
    

    So Now ab hum count ko htayege and Redux ki help se krege.
    */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
