import React,{useContext} from "react";
import AutoCompleteGallery from "@material-ui/lab/Autocomplete";
import {ResultPageContext } from "../pageContext/ResultPageContext"

function CustomInputAutocomplete() {

  const {resultsArray,onClickEnter,handleInputSearch
    ,handleAutoComplete} = useContext(ResultPageContext)

  let options = resultsArray.map((e) => e.query) || [""];
  return (
    <div className="gallery__input-browser">
    <AutoCompleteGallery
      id="custom-input-demo"
      onChange={(e, newValue) => {
        onClickEnter(e, newValue);
        handleAutoComplete(newValue);
      }}
      onInputChange={(e, newInputValue) => {
        handleInputSearch(newInputValue);
      }}
      options={options}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input
            placeholder="Search free high-resolution photos"
            type="text"
            {...params.inputProps}
            onKeyDown={(e) => {
              onClickEnter(e);
            }}
          />
        </div>
      )}
    />
    </div>
  );
}

export default CustomInputAutocomplete;
