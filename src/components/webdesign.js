import React from "react"
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap"
import '../css/main.css'

const Design = () => {
  return (
    <div className="">

   
    <div className="item">
    <div id='webdesign' className="design">
      
      <Card inverse className="design-card">
        <CardImgOverlay>
          <CardTitle className='design-card-title'>Web Design</CardTitle>
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
            cupiditate illum sed voluptate veniam velit dolorem! Autem officia
            provident nostrum tenetur cumque! Aut nisi blanditiis fuga itaque in
            voluptatem suscipit deleniti dolor reprehenderit, 
          </CardText>
          <CardText>
            <a href='#' className="btn">Learn More</a>
          </CardText>
        </CardImgOverlay>
      </Card>
      </div>
    </div>
    <div className="item">
    <div id='webhosting' className="design">
    <div className='filler'/>
      <Card inverse className="design-card">
        <CardImgOverlay>
          <CardTitle className='design-card-title'>Web Hosting</CardTitle>
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
            cupiditate illum sed voluptate veniam velit dolorem! Autem officia
            provident nostrum tenetur cumque! Aut nisi blanditiis fuga itaque in
            voluptatem suscipit deleniti dolor reprehenderit, 
          </CardText>
          <CardText>
            <a href='#' className="btn">Learn More</a>
          </CardText>
        </CardImgOverlay>
      </Card>
      </div>
    </div>
    <div className="item">
    <div id='uxdesign' className="design">
    <div className='filler'/>
      <Card inverse className="design-card">
        <CardImgOverlay>
          <CardTitle className='design-card-title'>UX Design</CardTitle>
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
            cupiditate illum sed voluptate veniam velit dolorem! Autem officia
            provident nostrum tenetur cumque! Aut nisi blanditiis fuga itaque in
            voluptatem suscipit deleniti dolor reprehenderit, 
          </CardText>
          <CardText>
            <a href='#' className="btn">Learn More</a>
          </CardText>
        </CardImgOverlay>
      </Card>
      </div>
    </div>
    <div className="item">
    <div id='marketing' className="design">
    <div className='filler'/>
      <Card inverse className="design-card">
        <CardImgOverlay>
          <CardTitle className='design-card-title'>Marketing</CardTitle>
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
            cupiditate illum sed voluptate veniam velit dolorem! Autem officia
            provident nostrum tenetur cumque! Aut nisi blanditiis fuga itaque in
            voluptatem suscipit deleniti dolor reprehenderit, 
          </CardText>
          <CardText>
            <a href='#' className="btn">Learn More</a>
          </CardText>
        </CardImgOverlay>
      </Card>
      </div>
    </div>
    </div>
    
  )
}

export default Design
