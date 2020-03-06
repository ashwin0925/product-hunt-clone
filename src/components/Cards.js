import React from "react"
import Card from "./Card"
import "../styles/app.css"


class Cards extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map(product => <Card {...product} update={this.props.update} />)}
      </div>
    )

  }

}

export default Cards