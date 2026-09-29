import Form from "react-bootstrap/Form";

function Filter({ title, setTitle, rating, setRating }) {
  return (
    <div className="filter-box mb-4">
      <div className="row g-3">

        <div className="col-md-6">
          <Form.Control
            type="text"
            placeholder="Search movie by title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <Form.Select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">All ratings</option>
            <option value="9">9+</option>
            <option value="8">8+</option>
            <option value="7">7+</option>
            <option value="6">6+</option>
            <option value="5">5+</option>
          </Form.Select>
        </div>

      </div>
    </div>
  );
}

export default Filter;