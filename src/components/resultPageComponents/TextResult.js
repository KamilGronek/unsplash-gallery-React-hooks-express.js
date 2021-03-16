import React,{useContext} from "react";
import { ResultPageContext } from "../pageContext/ResultPageContext";

function TextResult(){

        const {TextResult,handleOnClick}  =useContext(ResultPageContext)
    
    return(
        <div className="gallery__info">
        <h1 className="textResult" style={{ paddingBottom: "20px" }}>
          {TextResult()}
        </h1>
        <span style={{ cursor: "pointer" }} onClick={handleOnClick}>
          Go back
        </span>
      </div>
    )

}

export default TextResult