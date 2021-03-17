import {useContext} from "react";
import { ResultPageContext } from "../pageContext/ResultPageContext";

 export function ReturnModal(){
    const {galleryModal
    } = useContext(ResultPageContext);

    return(
        galleryModal()
    )

}


