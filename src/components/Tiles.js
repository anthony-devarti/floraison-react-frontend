import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Tiles() {
  return (
    <>
      {/* The desktop version of this section */}
      <div className="full-screen">
        <div className="imagefield">
          <div className="superheader">FOLLOW YOUR BLISS</div>
        </div>
        <div>
          <Row>
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
      </div>






      {/* The mobile version of this section */}
      <div className="mobile-screen mobile-background">
        <div className="superheader">BLISS</div>
        <div className="strip-box">
          <Row className="nav-strip" style={{ backgroundColor: "#f26d85" }}>
            <Link to="/cakes">Cakes</Link>
          </Row>
          <Row className="nav-strip" style={{ backgroundColor: "#72dbf2" }}>
            <Link to="/cookies">Cookies</Link>
          </Row>
          <Row className="nav-strip" style={{ backgroundColor: "#8a99bf" }}>
            <Link to="/cupcakes">Cupcakes</Link>
          </Row>
        </div>
      </div>
    </>
  );
}
