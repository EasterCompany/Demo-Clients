import './styles.css';
import nathanImg from '../../assets/nathan.webp';


const Testimonial = (props: any) => {
  return <div className="testimonial-container">
    <div className="testimonial-body">
      <div className="testimonial-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam at posuere turpis.
        Vivamus faucibus odio ac vulputate pretium. Mauris sed.
      </div>
      <div className="testimonial-image">
        <img src={nathanImg} alt="user" />
      </div>
    </div>
    <div className="testimonial-foot">
      <div className="testimonial-divider"/>
      <div className="testimonial-detail">
        <h3> John Smith </h3>
        <h4> Full Stack Engineer </h4>
      </div>
    </div>
  </div>
}


export default Testimonial;
