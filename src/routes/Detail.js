import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // console.log(json);
  };
  const { id } = useParams();
  useEffect(() => {
    getMovie();
  }, []);
  return <div></div>;
}
export default Detail;
