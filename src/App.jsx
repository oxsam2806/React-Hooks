import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description:
        "A thief who steals corporate secrets through dream-sharing technology.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
      rating: 8.8,
    },

    {
      id: 2,
      title: "The Dark Knight",
      description:
        "Batman faces the Joker, a criminal mastermind who wants to create chaos in Gotham.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 9.0,
    },

    {
      id: 3,
      title: "Interstellar",
      description:
        "A group of explorers travel through a wormhole in space in search of a new home.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      rating: 8.7,
    },
  ]);

  // Filter states
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  // New movie states
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };

  // Add a new movie
  const addMovie = (e) => {
    e.preventDefault();

    if (
      !newMovie.title ||
      !newMovie.description ||
      !newMovie.posterURL ||
      !newMovie.rating
    ) {
      alert("Please fill in all fields");
      return;
    }

    const movie = {
      id: Date.now(),
      title: newMovie.title,
      description: newMovie.description,
      posterURL: newMovie.posterURL,
      rating: Number(newMovie.rating),
    };

    setMovies([...movies, movie]);

    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });
  };

  // Filter movies
  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(title.toLowerCase());

    const matchesRating =
      rating === "" || movie.rating >= Number(rating);

    return matchesTitle && matchesRating;
  });

  return (
    <div className="app">
      <Container className="py-5">

        <h1 className="text-center mb-5">
          🎬 My Movie App
        </h1>

        {/* Add Movie */}
        <div className="add-movie shadow p-4 mb-5">
          <h2 className="mb-4">Add a New Movie</h2>

          <Form onSubmit={addMovie}>

            <Form.Group className="mb-3">
              <Form.Label>Movie Title</Form.Label>

              <Form.Control
                type="text"
                name="title"
                placeholder="Enter movie title"
                value={newMovie.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>

              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                placeholder="Enter movie description"
                value={newMovie.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Poster URL</Form.Label>

              <Form.Control
                type="text"
                name="posterURL"
                placeholder="Paste poster image URL"
                value={newMovie.posterURL}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>

              <Form.Control
                type="number"
                min="1"
                max="10"
                step="0.1"
                name="rating"
                placeholder="Example: 8.5"
                value={newMovie.rating}
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              Add Movie
            </Button>

          </Form>
        </div>

        {/* Filters */}
        <Filter
          title={title}
          setTitle={setTitle}
          rating={rating}
          setRating={setRating}
        />

        {/* Movie count */}
        <h2 className="mb-4">
          Movies ({filteredMovies.length})
        </h2>

        {/* Movies */}
        <MovieList movies={filteredMovies} />

      </Container>
    </div>
  );
}

export default App;