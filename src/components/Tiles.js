import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Tiles() {
  return (
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
          <Link to="/cupcakes">Cupcake</Link>
        </div>
      </Col>
    </Row>
  );
}
