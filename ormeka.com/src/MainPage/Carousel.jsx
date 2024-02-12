import Carousel from 'react-bootstrap/Carousel';
import slides from '../data/slides';
import { FaChevronRight } from "react-icons/fa";


function MainCarousel() {
    return (
        <div className="top-0 max-h-[800px] w-auto overflow-hidden">
            <Carousel fade>
                {
                    slides.map((carousel) =>
                        <Carousel.Item key={carousel.id}>
                            <div key={carousel.id} className="blackout absolute w-full h-full bg-black opacity-20"></div>
                            <img className='bg-stone-900 object-center' src={carousel.url} alt={carousel.imgAlt} />
                            <Carousel.Caption className='lg:top-10'>
                                <div className="group-left w-1/2">
                                    <div className="py-24 sm:py-32">
                                        <div className="mx-auto ">
                                            <dl className="grid grid-cols-1 gap-x-8 gap-y-1 text-center lg:grid-cols-3">
                                                <div key={carousel.id} className="mx-auto flex  gap-y-10">
                                                    
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div className="group-right">
                                    <div className="h-0 w-0 sm:h-full sm:w-full">
                                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                        
                                            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center justify-center lg:grid-cols-2 ">

                                                <dd className="pr-10   order-first leading-1 border-spacing-0 m-10 lg:border-r-2 lg:border-stone-100 font-sans font-thin tracking-tight text-white sm:text-4xl lg:text-7xl drop-shadow-lg">
                                                        {carousel.header}
                                                    </dd>
                                                    <dt className="font-normal flex flex-col items-center justify-center text-base leading-7 mr-10 text-white sm:text-2xl lg:text-base drop-shadow-lg font-sans">
                                                        {carousel.description} <br />
                                                        <a
                                                            href={carousel.href}
                                                            className="flex items-center justify-center sm:mt-5 font-thin text-base leading-7 text-white sm:text-xl lg:text-base drop-shadow-lg font-sans"
                                                        >
                                                            {carousel.button} <FaChevronRight  className="text-white ml-2 text-sm"/>
                                                        </a>
                                                    </dt> 
                                            </dl>
                                        </div>
                                    </div>
                                </div>

                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </div>
    );
}

export default MainCarousel;