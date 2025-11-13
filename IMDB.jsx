import axios from "axios";
import React, { useEffect, useState } from "react";

import './IMDB.css'

const IMDB = () => {

  const [data, setData] = useState([]);
  const Api = "https://www.omdbapi.com/?apikey=1c12799f&s=titanic&page=1";
  const getApi = async () => {
    try {
      const res = await axios.get(Api);
setData(res.data.Search);
      console.log(res.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="img-list">
    
      {data.map((curMovie, index) => {
        return (
          <div className="item" key={index}>
          <li >

          <img  src={curMovie.Poster} />
            <h1> {curMovie.Title} 
            </h1>
          </li>
          </div>
        );
      })}
    </div>
  );
};

export default IMDB;
