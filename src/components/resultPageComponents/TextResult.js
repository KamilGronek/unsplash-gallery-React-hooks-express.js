import React,{useContext} from "react";
import { ResultPageContext } from "../pageContext/ResultPageContext";

function TextResult(){

        const {textResult,handleOnClick}  = useContext(ResultPageContext)
    
    return(
        <div className="gallery__info">
        <h1 className="textResult" style={{ paddingBottom: "20px" }}>
          {textResult()}
        </h1>
        <span style={{ cursor: "pointer" }} onClick={handleOnClick}>
          Go back
        </span>
      </div>
    )

}

export default TextResult