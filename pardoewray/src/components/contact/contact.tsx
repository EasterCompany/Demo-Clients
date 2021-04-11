import EmailBtn from '../buttons/email/email';
import PhoneBtn from '../buttons/phone/phone';


const ContactSection = () => {
  return <>
    <div className="home-buttons">
      <EmailBtn />
      <PhoneBtn />
    </div>
    <p style={{textAlign: "center", color: "grey"}}>
      Contact should be made between 9:00 - 17:00 on Monday to Friday.
    </p>
  </>
}


export default ContactSection;
