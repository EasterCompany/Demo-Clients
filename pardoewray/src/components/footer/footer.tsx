import './footer.css';
import lockImg from '../../shared/assets/icons/lock.svg';
import linkedinLogo from '../../shared/assets/icons/linkedin.svg';

const Footer = () => {
  return <div id="footer">
    <div id="footer-info">
      <p> Phone: <a href="tel:0191 933 0028">0191 933 0028</a> </p>
      <p> Email: <a href="mailto:info@pardoewray.com">info@pardoewray.com</a> </p>
      <p> 3 Bankside | The Watermark | Gateshead | NE11 9SY </p>
    </div>
    <div id="footer-right">
      <div id="footer-logo"/>
      <div id="footer-refs">
        <a href="https://5c56eae8-0f8b-4751-9b48-4bdb49242d47.filesusr.com/ugd/541e18_26b3fd278755469b88d7814590a08071.pdf">
          <img src={lockImg} alt="GDPR Policy" />
        </a>
        <a href="https://www.linkedin.com/company/pardoewray/">
          <img src={linkedinLogo} alt="linkedin"/>
        </a>
      </div>
    </div>
  </div>
};

export default Footer;
