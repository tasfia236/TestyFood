import burger from '../../assets/catering.png'
import pizza from '../../assets/pizza.png'
import crust from '../../assets/crust.png'

const Services = () => {
    return (
        <div>
            <h1 className='font-bold text-2xl text-center mt-20 text-red-500'>Our Services</h1>
            <div className="flex ">
            
            <div className='flex mt-12 '>
                <div className='  h-[200px] w-[50%] rec bg-slate-50 space-y-4 flex justify-center gap-2 items-center' >
                    <div>
                        <img src={burger} className='w-[50%] h-[50%] btn-circle ml-6' alt="" />
                    </div>
                    <div>
                        <h1>CATERING & EVENTS</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum maxime ipsa <br /> </p>
                    </div>

                </div>
                <div className='  h-[200px] w-[50%] rec bg-slate-300  space-y-4 flex justify-center gap-2 items-center' >
                    <div>
                        <img src={pizza} className='w-[50%] h-[50%] btn-circle ml-6' alt="" />
                    </div>
                    <div>
                        <h1>WORK AT CRUST PIZZA</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum maxime ipsa <br /> </p>
                    </div>

                </div>
                <div className='  h-[200px] w-[50%] rec  bg-slate-400  space-y-4 flex justify-center gap-2 items-center' >
                    <div>
                        <img src={crust} className='w-[50%] h-[50%] btn-circle ml-6' alt="" />
                    </div>
                    <div>
                        <h1>OWN A CRUST PIZZA</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum maxime ipsa <br /> </p>
                    </div>

                </div>
            </div>

        </div>
        </div>
    );
};

export default Services;