import React from "react"
import Cards from "./Cards"
import Header from "./Header"
import Aside from "./Aside"
import "../styles/aside.css"


function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Cards />
        <Aside />
      </div>
    </div>
  )
}



export default App