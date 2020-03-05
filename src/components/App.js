import React from "react"
import Cards from "./Cards"
import Header from "./Header"
import Aside from "./Aside"


function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", "flex-direction": "row" }}>
        <div>
          <div className="app_heading">
            <span className="app_Today">Today</span>
          </div>
          <Cards />
        </div>
        <div style={{ "margin-left": "145px" }}>
          <Aside />
        </div>
      </div>
    </div >
  )
}



export default App