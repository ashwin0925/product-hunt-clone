import React from "react"
import Aside from "./Aside"

let images = [
  {
    img: "https://ph-avatars.imgix.net/1456069/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop"
  },
  {
    img: "https://ph-avatars.imgix.net/1456069/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop"
  }
]

class image extends React.Component {
  render() {
    return (
      <div>
        {images.map(img => <Aside {...img} />)}
      </div>
    )

  }

}

export default image
