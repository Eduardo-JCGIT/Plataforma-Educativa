import React from "react";
import Nav from "../welcome/Nav";
import Vidcourse from "../../vid/course/BienvenidoHTML.mp4"
import CommentVid from "./Com-vid-nx";
import ContCourse from "../course-details/Cont-course";

const PlayCourse = () =>{

    return(
        <div>
        <Nav/>
        <div className="cont-vid-nx">
        <div className="col-cont-vid-nx1">
        <video controls>
          <source src={Vidcourse} type="video/mp4" />
        </video>
        </div>
        <div className="col-cont-vid-nx2">
            <CommentVid/>
           
        </div>
        </div>
        <div className="container-general">
        <ContCourse/>
        </div>
        </div>
    )
}

export default PlayCourse