import React,{useContext} from "react";
import {ResultPageContext } from "../pageContext/ResultPageContext"

function ReturnShowGallery(){
    const {showGallery
      } = useContext(ResultPageContext);

    return(
        <div className="gallery__grid">
        {showGallery()}
        </div>
    )
}

export default ReturnShowGallery;