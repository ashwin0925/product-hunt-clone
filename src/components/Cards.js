import React from "react"
import Card from "./Card"

let data = [
  {
    name: "Open Peeps",
    description: "A hand-drawn illustration library.",
    img: "https://ph-files.imgix.net/719fe138-8598-46ec-8259-ef17ba46c0c2?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "Design Tools",
    number: 36
  },
  {
    name: "InVideo",
    description: "Create insanely good social videos in under 10 mins",
    img: "https://ph-files.imgix.net/9093cadf-bc92-45d3-97ea-a74d41455587?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "Design Tools",
    number: 36
  },
  {
    name: "Phone Call Translator",
    description: "Translates your voice calls into 29 languages in real-time",
    img: "https://ph-files.imgix.net/76ee2898-6c6c-4d57-86c3-f42b961a97dc?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "iPhone",
    number: 36
  },
  {
    name: "Datawaves",
    description: "Add analytics to anything",
    img: "https://ph-files.imgix.net/d58fc63b-7ddf-4e5b-9a29-fb2f1162a05e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "Design Tools",
    number: 36
  },
  {
    name: "Makerlog 3.0",
    description: "The productive community for makers and indie hackers.",
    img: "https://ph-files.imgix.net/00cc62e7-fbbf-40b4-be56-9a9d58579a47?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "Design Tools",
    number: 36
  },
  {
    name: "Flutter Dating",
    description: "The live Sunday dating app",
    img: "https://ph-files.imgix.net/2a750d4a-ab47-4b84-a124-3acd044b8ed6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    comments: 9,
    tags: "iPhone",
    number: 36
  }
]

function Cards(props) {
  return (data.map(product => <Card {...product} />))

}

export default Cards