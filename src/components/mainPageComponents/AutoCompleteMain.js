import React,{useContext} from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { MainPageContext } from "../pageContext/MainPageContext";


function CustomInputAutocomplete() {
  
  const { resultsArray,onClickEnter,handleInputSearch,
    handleAutoComplete
  } = useContext(MainPageContext);


  let options = resultsArray.map((e) => e.query) || [""];
  return (
    <Autocomplete
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
  );
}

export default CustomInputAutocomplete;

