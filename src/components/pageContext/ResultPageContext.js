import React, {createContext, useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation, useParams } from "react-router-dom";
import ModalSide from "../resultPageComponents/contextComponents/ModalSide";
import ShowGallery from "../resultPageComponents/contextComponents/ShowGallery";

export const ResultPageContext = createContext();

export const  ResultPageProvider=({children})=> {

  const { message } = useParams("");
  const location = useLocation();
  const click = location.state;
  const [resultsPhotoArray, setResultsPhotoArray] = useState([]);
  const [resultsArray, setResultsArray] = useState([]);
  const [inputName, setInputName] = useState(message);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [id, setId] = useState("");

  const [clickEnter, setClickEnter] = useState(click);
  const accessKey = "9tJMde6Lvj7EwGnMaTcycDeV9-hZ4nrZv17OfGZ1p40";
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${inputName}&per_page=100=&client_id=${accessKey}`
      )
      .then((response) => {
        setResultsPhotoArray(response.data.results);
        console.log(response);
      });
  }, [clickEnter]);

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
      window.history.replaceState(null, "", `/result/${e.target.value}`);
    }
  };

  const handleInputSearch = (value) => {
    if (value.length > 2) {
      setInputName(value);
    } else {
      setInputName("");
    }
  };

  const getIdPicture = (id) => {
    setId(id);
    setModalIsOpen(true);
  };

  const showGallery = () => {
    return resultsPhotoArray.map((result) => (
      <ShowGallery
        key={result.id}
        result={result}
        getIdPicture={getIdPicture}
      />
    ));
  };

  const ShowModal = () => {
    let tab = resultsPhotoArray
      .filter((result) => result.id === id)
      .map((res) => (
        <ModalSide
          key={res.id}
          res={res}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      ));
    return tab;
  };

  const TextResult = () => {
    return inputName;
  };


  const handleOnClick = () => history.goBack();

  const handleAutoComplete = (newValue) => {
    setClickEnter(!clickEnter);
    window.history.replaceState(null, "", `/result/${newValue}`);
  };

  return(
      <ResultPageContext.Provider value={{resultsArray,onClickEnter,handleInputSearch,handleOnClick
      ,handleAutoComplete, showGallery,ShowModal,TextResult}}>
          {children}
      </ResultPageContext.Provider>
  )

}




