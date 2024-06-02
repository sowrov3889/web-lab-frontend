import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../assets/images/pic4.jpg';
import img2 from '../assets/images/pic2.jpg';
import img3 from '../assets/images/pic3.jpg';
import img4 from '../assets/images/pic1.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel autoPlay interval={2000} infiniteLoop>
                <div>
                    <img className="md:max-h-[550px] rounded-b-2xl" src={img1} />
                </div>
                <div>
                    <img className="md:max-h-[550px] rounded-b-2xl" src={img2} />
                </div>
                <div>
                    <img className="md:max-h-[550px] rounded-b-2xl" src={img3} />
                </div>
                <div>
                    <img className="md:max-h-[550px] rounded-b-2xl" src={img4} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
