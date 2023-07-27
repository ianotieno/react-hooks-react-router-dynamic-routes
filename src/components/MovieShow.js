import React from "react";
import { useParams } from "react-router-dom";

// MovieShow.js
function MovieShow({ movies }) {
    // call useParams to access the `params` from the url
    const params = useParams();
  
    return (
      <div>
        {/* And here we access the `movieId` stored in `params` to render 
          information about the selected movie */}
       <h3>{movies[params.movieId].title}</h3>
        {console.log("this are my movies",(movies))}
      </div>
    );
  }
  
export default MovieShow;
