import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="row g-4">
      {movies.map((movie) => (
        <div className="col-md-4" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;