import './styles.css';
import Testimonial from './testimonial';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';


const TestimonialSection = () => {
  return <div className="testimonial-section">
    <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={3}
      >
        <ButtonBack id="cBtn-left"> </ButtonBack>
        <ButtonNext id="cBtn-right"> </ButtonNext>
        <Slider className="slider-section">
          <Slide index={0}> <Testimonial/> </Slide>
          <Slide index={1}> <Testimonial/> </Slide>
          <Slide index={2}> <Testimonial/> </Slide>
        </Slider>
    </CarouselProvider>
  </div>
}


export default TestimonialSection;
