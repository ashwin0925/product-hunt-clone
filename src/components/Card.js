import React from "react"
import "../styles/main.css"


function Card(props) {

  return (
    <div className="flex">
      <div className=" product">

        <img className="product_image" src={props.thumbnail.image_url ? props.thumbnail.image_url : "https://ph-files.imgix.net/45b0bd57-bc3f-43dd-9b84-67b15c6d2cd2?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"} alt={props.name} />

        <div className="product_box">
          <h3 className="product_name">{props.name}</h3>
          <p className="product_desc">{props.tagline}</p>
          <span className="product_comment">
            <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 0 1-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill="#6f6f6f;" fill-rule="evenodd"></path></svg> &nbsp;
        {props.comments_count}</span>
          <span className="product_tags">
            {/* {props.topics.map(tag => (<button>{tag.name}</button>))} */}
            {props.topics[0].name}
          </span>
        </div>
      </div>


      <div className="product_number">
        <div onClick={() => props.update(props.id)} className="symbol">▲</div>
        <span className="product_num">{props.votes_count}</span>
      </div>
    </div>
  )
}

export default Card