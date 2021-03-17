import React,{useContext} from "react";
import {ResultPageContext } from "../pageContext/ResultPageContext"

function ReturnShowGallery(){
    const {gallery
      } = useContext(ResultPageContext);

    return(
        <div className="gallery__grid">
        {gallery()}
        </div>
    )
}

export default ReturnShowGallery;