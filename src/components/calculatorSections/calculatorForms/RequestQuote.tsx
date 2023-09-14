import "./calculator.css";

function RequestQuote() {
  return (
    <div className="requestquote-container">
      <form className="requestquote-form">
        <div className="form-item">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="form-item">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="form-item">
          <input type="text" placeholder="State" />
          <input type="text" placeholder="LGA" />
        </div>
        <div className="form-item">
          <textarea name="" id="" placeholder="Address"></textarea>
        </div>
        <button>Request Quote</button>
        <span>
          By clicking the button, you agree to be contacted by the LightUpNaija
          team.
        </span>
      </form>
    </div>
  );
}

export default RequestQuote;
