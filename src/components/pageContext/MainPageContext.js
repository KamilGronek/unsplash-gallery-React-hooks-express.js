import React, { createContext, useState ,useEffect} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


export const MainPageContext = createContext();


export const MainPageContextProvider = ({children}) =>{

    const [resultsArray, setResultsArray] = useState([]);
    const [inputName, setInputName] = useState("");
    const [clickEnter, setClickEnter] = useState(true);
  
    const history = useHistory();
  
    useEffect(() => {
      axios
        .get(
          `https://photocollection1.herokuapp.com/api/nautocomplete/${inputName}`
        )
        .then((response) => {
          setResultsArray(response.data.autocomplete);
        });
    }, [inputName]);
  
    const onClickEnter = (e) => {
      if (e.keyCode === 13 && resultsArray.length !== 0) {
        setClickEnter(!clickEnter);
        const location = {
          pathname: `/result/${e.target.value}`,
          state: {
            click: clickEnter,
          },
        };
        history.push(location);
      }
    };
  
    const handleAutoComplete = (newValue) => {
      setInputName(newValue);
  
      const location = {
        pathname: `/result/${newValue}`,
      };
      history.push(location);
    };
  
    const handleInputSearch = (value) => {
      if (value.length > 2) {
        setInputName(value);
      } else {
        setInputName("");
      }
    };
  
return(
        <MainPageContext.Provider value={{resultsArray,onClickEnter,handleInputSearch,
            handleAutoComplete}}>
            {children}
        </MainPageContext.Provider>
);
};

