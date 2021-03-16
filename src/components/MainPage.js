import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {MainPageContextProvider} from "./pageContext/MainPageContext";
import AutoCompleteMain from "./mainPageComponents/AutoCompleteMain";
import MainPageText from "./mainPageComponents/MainPageText"

function MainPage() {

  return (
    <>
      <div className="bg-picture">
        <div className="container-1">
            <MainPageText/>
          <div className="input-browser">
          <MainPageContextProvider>
            <AutoCompleteMain/>
          </MainPageContextProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
