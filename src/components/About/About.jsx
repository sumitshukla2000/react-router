import React from 'react'

const About = () =>{
    return(
        <div className='bg-white'>
            <div className='max-w-screen-lg mx-auto py-8 px-4 '>
                <div className='md:flex mx-auto  items-center justify-center'>
                    <div className='sm:w-full md:w-1/2'>
                        <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" className="h-72 mx-auto" alt="img" />
                    </div>
                    <div className='sm:w-full md:w-1/2 flex flex-col items-center text-center'>
                        <h2 className='text-4xl font-bold max-w-md'>
                        React development is carried out by passionate developers
                        </h2>
                        <p className='text-md pt-4  max-w-lg'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className='text-md pt-4 max-w-lg'>Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;