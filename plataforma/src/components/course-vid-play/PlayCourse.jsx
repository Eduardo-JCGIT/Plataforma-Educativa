import React from "react";
import Nav from "../welcome/Nav";
import CommentVid from "./Com-vid-nx";
import ContCourse from "../course-details/Cont-course";
import ReactPlayer from 'react-player';
import video1 from '../../vid/IntHTML/BienvenidoHTML.mp4';
import video2 from '../../vid/IntHTML/FrontEnd.mp4';
import video3 from '../../vid/IntHTML/BackEnd.mp4';
import video4 from '../../vid/IntHTML/FullStack.mp4';
import video5 from '../../vid/IntHTML/EstaticvsDinamic.mp4';

const PlayCourse = ({ video }) =>{
    let videoUrl;

    if (video === 'video1') {
        videoUrl = video1;
      } else if (video === 'video2') {
        videoUrl = video2;
      } else if (video === 'video3') {
        videoUrl = video3;
      } else if (video === 'video4') {
        videoUrl = video4;
      } else if (video === 'video5') {
        videoUrl = video5;
      }


    return(
          <div className="scroll-hidden-cont-n">
          <Nav/>
          <div className="container-vid-cont scroll-desing">
            <div className="cont-vid-nx">
              <ReactPlayer url={videoUrl} controls={true} width="100%" height="auto"/>
              <ContCourse/>
            </div>
            <div className="cont-com-nx scroll-desing">
            <CommentVid/>
            </div>
          </div>
          </div>
    )
}

export default PlayCourse