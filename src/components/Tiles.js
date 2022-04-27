import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Tiles() {
  return (
    <div className="full-screen">
    <div className="superheader">Follow your bliss</div>
    <Row className="tiles">
      <Col className="tile cakes">
        <div className="tile-text">
          <Link to="/cakes">Cakes</Link>
        </div>
      </Col>
      <Col className="tile cookies">
        <div className="tile-text">
          <Link to="/cookies">Cookies</Link>
        </div>
      </Col>
      <Col className="tile cupcakes">
        <div className="tile-text">
          <Link to="/cupcakes">Cupcakes</Link>
        </div>
      </Col>
    </Row>
    </div>
  );
}
