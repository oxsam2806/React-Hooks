import Card from "react-bootstrap/Card";

function MovieCard({ movie }) {
  return (
    <Card className="movie-card h-100 shadow">
      <Card.Img
        variant="top"
        src={movie.posterURL}
        alt={movie.title}
        className="movie-poster"
      />

      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>

        <Card.Text>{movie.description}</Card.Text>

        <div className="rating">
          ⭐ {movie.rating}/10
        </div>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;