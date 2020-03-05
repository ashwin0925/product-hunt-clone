import React from "react"
import "../styles/aside.css"


function Aside() {
  return (
    <div className="aside_Flex">
      <div className="aside_heading">
        <span className="aside_sub">Makers working today</span>
      </div>
      <div className="box1">
        <div className="image_Box">
          <img className="image" src="https://ph-avatars.imgix.net/1456069/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop" alt="image1" />
          <img className="image" src="https://ph-avatars.imgix.net/166755/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop" alt="image1" />
          <img className="image" src="https://ph-avatars.imgix.net/1903430/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop" alt="image1" />
          <img className="image" src="https://ph-avatars.imgix.net/826276/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop" alt="image1" />
          <img className="image" src="https://ph-avatars.imgix.net/2397185/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop" alt="image1" />
          <img className="image" src="https://ph-avatars.imgix.net/112495/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop" alt="image1" />
          <img className="image" src="https://ph-avatars.imgix.net/1940488/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop" alt="image1" />
          <img className="image" src="https://ph-avatars.imgix.net/1440175/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop" alt="image1" />
          <img className="image" src="https://ph-avatars.imgix.net/2422879/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop" alt="image1" />
          <img className="image" src="https://ph-avatars.imgix.net/672374/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop" alt="image1" />
          <img className="image" src="https://ph-avatars.imgix.net/1062145/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop" alt="image1" />
          <img className="image" src="https://ph-avatars.imgix.net/1126875/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop" alt="image1" />
        </div>
        <div className="hr"></div>
        <p className="aside_Text">START WORKING NOW</p>
      </div>
      <div>
        <p className="aside_Text2">Product Hunt Radio</p>
      </div>
      <div className="box2">
        <p className="aside_Text3">How to grow and monetize communities with Jill Salzman</p>

        <div className="aside_Cat">
          <img class="cat_Image" src="https://ph-static.imgix.net/radio/ph_radio_cat.png?auto=format&auto=compress&w=90" alt="cat" />
        </div>
      </div>
      <div className="aside_Spons">
        <span className="aside_Sponsored">Sponsored by </span> <span className="aside_orange">headspin</span>
      </div>
      <div>
        <p className="aside_Text2">Newsletter</p>
      </div>

      <div className="box3" >
        <img className="computer_Image" src="https://ph-files.imgix.net/742f9303-ea31-4ab8-89fa-664e6be69029?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=290&amp;h=110&amp;fit=clamp&quot" alt="computer" />
        <span>
          <p className="aside_Text4">Remote teams, this is for you</p>
        </span>
      </div>

      <div className="box4">
        <p className="aside_Text5">Get the best new products in your inbox, every day 👇 </p>
        <input className="aside_email" type="text" placeholder="Your email" />
        <button className="aside_button">SUBSCRIBE</button>
      </div>


    </div >

  )

}

export default Aside