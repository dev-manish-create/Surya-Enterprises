import "./Contactus.css";

const Contactus = () => {
  return (
    <div className="contact-container">
      <div className="contact-text">
        <h2>Request a call back right now</h2>
        <p>
            
             Our Service Area: Gurgaon, Delhi NCR, Faridabad, Noida  and all over India.
        </p>
        <h2>Book Demo Now!!!</h2>
        <p>Demo will be paid.</p>
      </div>
      <div className="contact-button">
        <a href="/contactus"><button>Contact</button></a>
      </div>
    </div>
  );
};

export default Contactus;
