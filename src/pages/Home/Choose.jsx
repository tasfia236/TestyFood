import burger from '../../assets/catering.png'
import pizza from '../../assets/pizza.png'
import crust from '../../assets/crust.png'
import drinks from '../../assets/drinks.jpeg'
const Choose = () => {
    return (
        <div className='bg-slate-50 p-5 mt-20'>
           <div className='text-center   space-y-5'>
           <h1 className='font-bold text-2xl text-red-500'>Choose & Enjoy</h1>
            <p>Choosing and enjoying food is a delightful journey <br /> that involves exploring flavors, textures, and cuisines.</p>
           </div>
           <div className='flex max-w-[1000px] ml-[35%] gap-6 items-center mt-10'>
           <img src={burger}  className='w-[10%] h-[10%] btn-circle'  alt="" />
           <img src={pizza}  className='w-[10%] h-[10%] btn-circle'  alt="" />
           <img src={crust}  className='w-[10%] h-[10%] btn-circle'  alt="" />
           <img src={drinks}  className='w-[10%] h-[10%] btn-circle'  alt="" />
           </div>
        </div>
    );
};

export default Choose;