import { Container, Row, Col } from "react-bootstrap";

export default function Tiles() {
  return (
      <Row className="tiles">
        <Col className="tile cakes">Cakes</Col>
        <Col className="tile cookies">Cookies</Col>
        <Col className="tile cupcakes">Cupcakes</Col>
      </Row>
  );
}
