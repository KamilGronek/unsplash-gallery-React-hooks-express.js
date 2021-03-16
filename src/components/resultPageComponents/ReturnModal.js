import {useContext} from "react";
import { ResultPageContext } from "../pageContext/ResultPageContext";

 export function ReturnModal(){
    const {ShowModal
    } = useContext(ResultPageContext);

    return(
        ShowModal()
    )

}


