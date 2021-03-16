import React from "react";
import {ResultPageProvider} from "./pageContext/ResultPageContext"
import AutoCompleteGallery from "./resultPageComponents/AutoCompleteGallery";
import TextResult from "./resultPageComponents/TextResult";
import ReturnShowGallery from "./resultPageComponents/ReturnShowGallery";
import {ReturnModal} from "./resultPageComponents/ReturnModal"

function ResultPage() {

  return (
    <>
     <ResultPageProvider>
      <div className="gallery">
          <AutoCompleteGallery/>
          <TextResult/>
          <ReturnShowGallery/>
      </div>
        <ReturnModal/>
      </ResultPageProvider>
    </>
  );
}

export default ResultPage;


