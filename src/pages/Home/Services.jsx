import burger from '../../assets/catering.png'
import pizza from '../../assets/pizza.png'
import crust from '../../assets/crust.png'

const Services = () => {
    return (
        <div>
            <h1 className='font-bold text-3xl text-center mt-20 text-red-800'>Our Services</h1>
            <div className="flex ">
            
            <div className='flex mt-12 '>
                <div className='  h-[200px] w-[50%] rec bg-slate-50 space-y-4 flex justify-center gap-2 items-center' >
                    <div>
                        <img src={burger} className='w-[50%] h-[50%] btn-circle ml-6' alt="" />
                    </div>
                    <div>
                        <h1>CATERING & EVENTS</h1>
                        <p>Catering allows for tailored menus to suit the occasion, whether its a wedding, corporate event.<br /> </p>
                    </div>

                </div>
                <div className='  h-[200px] w-[50%] rec bg-slate-300  space-y-4 flex justify-center gap-2 items-center' >
                    <div>
                        <img src={pizza} className='w-[50%] h-[50%] btn-circle ml-6' alt="" />
                    </div>
                    <div>
                        <h1>WORK AT CRUST PIZZA</h1>
                        <p>Crust Pizza fosters a team-oriented work environment where collaboration and communication are essential<br /> </p>
                    </div>

                </div>
                <div className='  h-[200px] w-[50%] rec  bg-slate-400  space-y-4 flex justify-center gap-2 items-center' >
                    <div>
                        <img src={crust} className='w-[50%] h-[50%] btn-circle ml-6' alt="" />
                    </div>
                    <div>
                        <h1>OWN A CRUST PIZZA</h1>
                        <p>Crust Pizza offers a diverse menu of gourmet pizzas, sides, and desserts, with a focus on fresh, high-quality ingredients and innovative flavor combinations<br /> </p>
                    </div>

                </div>
            </div>

        </div>
        </div>
    );
};

export default Services;