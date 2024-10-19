import React from 'react'
import './ContactUs.css'
import pegam_Icn from '../../assets/pegam_Icn.png'
import eml_Icn from '../../assets/eml_Icn.png'
import phn_icn from '../../assets/phn_Icn.png'
import loctionss_icon from '../../assets/locationss_Icon.png'
import nextBtn from '../../assets/nextBtn.png'


const ContactUs = () => {

 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={pegam_Icn} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact informmation below. Your feedback, questions and suggestion are important to us as we strive to provide exceptional service to our university.</p>
        <ul>
          <li><img src={eml_Icn} alt="" />afnan@gamil.com</li>
          <li><img src={phn_icn} alt="" />+1 99999999</li>
          <li><img src={loctionss_icon} alt="" />City: Peshawar Adbdara Road  </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text"  name='name' placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type='tel' name="phone" placeholder='Enter your mobile number' required/>
          <label>Write your message here</label>
          <textarea  name='message' rows="6" placeholder='Type message here' required />
          <center>
          <button type="submit" className='btn dark-btn' >
            Submit now <img src={nextBtn} alt="" />
          </button>
          </center>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default ContactUs