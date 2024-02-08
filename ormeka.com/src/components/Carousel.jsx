import Carousel from 'react-bootstrap/Carousel';
import slides from '../data/slides';

function MainCarousel() {
    return (
        <div className="top-0">
            <Carousel fade>
                {
                    slides.map((carousel) =>
                        <Carousel.Item>
                            <div className="blackout absolute w-full h-full bg-black opacity-40"></div>
                            <img className='bg-stone-900 ' src={carousel.url} alt={carousel.imgAlt} />
                            
                            <Carousel.Caption>
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
                                    <div className="">
                                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                        
                                            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center justify-center lg:grid-cols-2 ">

                                                <dd className="pr-10 order-first leading-1 border-spacing-0 m-10 lg:border-r-2 lg:border-stone-100 font-sans font-thin tracking-tight text-white sm:text-4xl lg:text-7xl drop-shadow-lg">
                                                        {carousel.header}
                                                    </dd>
                                                    <dt className="font-normal text-base leading-7 mr-10 text-white sm:text-2xl lg:text-base drop-shadow-lg font-sans">
                                                        {carousel.description} <br />
                                                        <a
                                                            href={carousel.href}
                                                            className="font-thin text-base leading-7 mr-10 text-white sm:text-xl lg:text-base drop-shadow-lg font-sans"
                                                        >
                                                            {carousel.button} <span aria-hidden="true">&rarr;</span>
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