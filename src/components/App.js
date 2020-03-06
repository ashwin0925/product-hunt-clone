import React from "react"
import Cards from "./Cards"
import Header from "./Header"
import Aside from "./Aside"
import axios from "axios"


let id = 0
let products = [
  {
    name: "Open Peeps",
    description: "A hand-drawn illustration library.",
    img: "https://ph-files.imgix.net/719fe138-8598-46ec-8259-ef17ba46c0c2?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "Design Tools",
    number: 73,
    id: id++
  },
  {
    name: "InVideo",
    description: "Create insanely good social videos in under 10 mins",
    img: "https://ph-files.imgix.net/9093cadf-bc92-45d3-97ea-a74d41455587?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "Design Tools",
    number: 93,
    id: id++
  },
  {
    name: "Phone Call Translator",
    description: "Translates your voice calls into 29 languages in real-time",
    img: "https://ph-files.imgix.net/76ee2898-6c6c-4d57-86c3-f42b961a97dc?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "iPhone",
    number: 29,
    id: id++
  },
  {
    name: "Datawaves",
    description: "Add analytics to anything",
    img: "https://ph-files.imgix.net/d58fc63b-7ddf-4e5b-9a29-fb2f1162a05e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "Design Tools",
    number: 3491,
    id: id++
  },
  {
    name: "Makerlog 3.0",
    description: "The productive community for makers and indie hackers.",
    img: "https://ph-files.imgix.net/00cc62e7-fbbf-40b4-be56-9a9d58579a47?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "Design Tools",
    number: 40,
    id: id++
  },
  {
    name: "Flutter Dating",
    description: "The live Sunday dating app",
    img: "https://ph-files.imgix.net/2a750d4a-ab47-4b84-a124-3acd044b8ed6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "iPhone",
    number: 26,
    id: id++
  }
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: products,
      name: "",
      description: "",
      img: "",
      tags: "",
      token: "uk0QiyPhY28ipkBigm9ZXRBfFiK5XmhYU_mAU1uINe0",
      test: null
    }
  }
  componentDidMount() {
    axios("https://api.producthunt.com/v1/posts/all?per_page=10",
      {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${this.state.token}`,
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }).then(res => {
        this.setState({
          test: res.data.posts
        })
        console.log(res)
      })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    this.setState({
      data: this.state.data.concat({
        name: this.state.name,
        description: this.state.description,
        img: this.state.img,
        comments: 0,
        tags: this.state.tags,
        number: 0,
        id: id++

      })
    })
  }

  update = (id) => {
    let upvote = this.state.data.map(product => {
      if (product.id === id) {
        product.number += 1
      }
      return product
    }
    )
    this.setState({ data: upvote })
  }
  render() {
    return (
      <div>
        {/* <githb /> */}
        <Header />
        <div style={{ display: "flex", "flex-direction": "row" }}>
          <div>
            <div className="app_heading">
              <span className="app_Today">Today</span>
            </div>
            <Cards update={this.update} data={this.state.test} />
          </div>
          <div style={{ "margin-left": "145px" }}>
            <Aside handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div >
    )
  }

}



export default App