import { Button } from "react-bootstrap";

export default function Contact() {

  function handleSubmit() {
    console.log("this doesn't do anything")
  }

  return (
    <>
      <div className="contact-desktop">
        <div className="contact">
          <div className="superheader">Let's talk cake!</div>
          <div className="descriptor">
            <p>
              Want to reach out about something super-custom? (We do those, by the
              way) Or maybe you're a business looking to set up a recuring bulk
              order. Reach out to us here and we'll get back to you as soon as we
              get these cookies in the oven. (Don't worry, we set a timer)
            </p>
          </div>
          <div className="form">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="4"></textarea>
              </div>
              <Button type="submit" variant="primary" className="custom-buttons form-submit-button">
                SEND
              </Button>
            </form>
          </div>
        </div>
      </div>



      <div className="contact-mobile">
        <div className="form">
          <form id="contact-form-mobile" onSubmit={handleSubmit}>
            <div className="form-group">
              <h1>Let's talk cake!</h1>
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="1"></textarea>
            </div>
            <Button type="submit" variant="primary" className="custom-buttons form-submit-button">
              SEND
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
