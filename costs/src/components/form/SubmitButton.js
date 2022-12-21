import "./SubmitButtonStyle.css"

function SubmitButton({ text }) {
    return (
      <div className="formControl">
        <button type="submit" className="btn">{text}</button>
      </div>
    );
  }
  
  export default SubmitButton;