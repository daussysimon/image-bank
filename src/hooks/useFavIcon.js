import { useEffect, useState } from "react";
import axios from "axios";

const useFavIcon = (favItems => {
  const [favIconUrl, setFavIconUrl]= useState([]);
  useEffect( () => {
    favItems.map(element => {
      const favTest = [...favIconUrl];
      setFavIconUrl([...favTest, element])
      return favIconUrl;
          // eslint-disable-next-l
    });
  },[])
  return { favIconUrl }
})

export default useFavIcon