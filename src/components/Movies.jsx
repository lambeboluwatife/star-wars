import Clones from "../images/clones.jpg";
import Hope from "../images/hope.jpg";
import Empire from "../images/empire.jpg";
import Jedi from "../images/jedi.jpg";
import Phantom from "../images/phantom.jpeg";
import Revenge from "../images/revenge.jpg";

function getImagePoster(image) {
  if (image === "A New Hope") return Hope;
  if (image === "The Empire Strikes Back") return Empire;
  if (image === "Return of the Jedi") return Jedi;
  if (image === "The Phantom Menace")
    return "https://pbs.twimg.com/media/FA7SE4iXoAA14kI.jpg";
  if (image === "Attack of the Clones") return Clones;
  if (image === "Revenge of the Sith") return Revenge;
}

const Movies = ({ data }) => {
  return (
    <div className="movies">
      {data.results.map((movie) => (
        <div className="movie">
          <img src={getImagePoster(movie.title)} alt="" />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <h6>{movie.release_date}</h6>
            <div className="overview">
              <h3>Opening Crawl</h3>
              <p>{movie.opening_crawl}</p>
              <h6>Released On: {movie.release_date}</h6>
              <a href="#">More Info</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
