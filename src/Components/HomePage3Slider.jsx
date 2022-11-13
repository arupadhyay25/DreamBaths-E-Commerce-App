import styles from './HomePage3.module.css'

import Slider from "react-slick";
import { color } from '@chakra-ui/react';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,
        padding : '15px 10px' ,
        width:'50px' ,
        height:'50px' ,
        borderRadius:'30px',
        backgroundColor:'#333333',
        margin:'0px -25px 0px 0px'
     }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,
            padding : '15px 10px' ,
            width:'50px' ,
            height:'50px' ,
            borderRadius:'30px',
            backgroundColor:'#333333',
            margin:'0px 0px 0px -25px'
        }}
        onClick={onClick}
      />
    );
  }
const HomePage3Slider =()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        <div>
        <Slider {...settings} className={styles.HomPage_slider}>
          <div>
            <img src="/Image/homepage/Ig_img1.jpg" alt="img1"/>
          </div>
          <div>
          <img src="/Image/homepage/Ig_img2.jpg" alt="img2"/>
          </div>
          <div>
          <img src="/Image/homepage/Ig_img3.jpg" alt="img3"/>
          </div>
          <div>
          <img src="/Image/homepage/Ig_img4.jpg" alt="img4"/>
          </div>
          <div>
          <img src="/Image/homepage/Ig_img5.jpg" alt="img5"/>
          </div>
          <div>
          <img src="/Image/homepage/Ig_img6.jpg" alt="img6"/>
          </div>
          <div>
          <img src="/Image/homepage/Ig_img7.jpg" alt="img7"/>
          </div>
          <div>
          <img src="/Image/homepage/Ig_img8.jpg" alt="img8"/>
          </div>
        </Slider>
      </div>
    )
}

export default HomePage3Slider