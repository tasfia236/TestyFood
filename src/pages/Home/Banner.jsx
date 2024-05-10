
import Carousel from 'react-elastic-carousel';
import cover1 from '../../assets/images/image1.jpeg'
import cover2 from '../../assets/images/image2.jpeg'
import cover3 from '../../assets/images/image-3.jpeg'
import cover4 from '../../assets/images/image4.jpeg'

const Banner = () => {
    return (
        <Carousel className=''>
            <div><img className=' w-screen h-[500px]' src={cover2} alt="" /></div>
            <div><img className=' w-screen h-[500px]' src={cover1} alt="" /></div>
            <div><img className=' w-screen h-[500px]' src={cover3} alt="" /></div>
            <div><img className=' w-screen h-[500px]' src={cover4} alt="" /></div>
        </Carousel>
    );
};

export default Banner;