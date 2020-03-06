import React from "react"
import Card from "./Card"
import "../styles/app.css"


class Cards extends React.Component {
  render() {
    return (
      <div>
        {this.props.data ? this.props.data.map(product => <Card {...product} update={this.props.update} />) : null}
      </div>
    )

  }

}

export default Cards