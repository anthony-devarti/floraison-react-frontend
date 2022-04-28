import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Tiles() {
  return (
    <>
      {/* The desktop version of this section */}
      <div className="full-screen">
        <div className="superheader">FOLLOW YOUR BLISS</div>
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
      {/* The mobile version of this section */}
      <div className="mobile-screen">
        <div className="superheader">BLISS</div>
        <Row className="nav-strip" style={{backgroundColor:"#f26d85"}}>
          <Link to="/cakes">Cakes</Link>
        </Row>
        <Row className="nav-strip" style={{backgroundColor:"#72dbf2"}}>
          <Link to="/cookies">Cookies</Link>
        </Row>
        <Row className="nav-strip" style={{backgroundColor:"#8a99bf"}}>
          <Link to="/cupcakes">Cupcakes</Link>
        </Row>
      </div>
    </>
  );
}
