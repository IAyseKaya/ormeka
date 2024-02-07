import Carousel from 'react-bootstrap/Carousel';
import slides from '../data/slides';

function MainCarousel() {
    return (
        <div className="top-0">
            <Carousel fade>
                {
                    slides.map((carousel) =>
                        <Carousel.Item>
                            <img className='bg-stone-900' src={carousel.url} alt={carousel.imgAlt} />
                            <Carousel.Caption>
                                <div className="group-left w-1/2">
                                    <div className="py-24 sm:py-32">
                                        <div className="mx-auto ">
                                            <dl className="grid grid-cols-1 gap-x-8 gap-y-1 text-center lg:grid-cols-3">
                                                <div key={carousel.id} className="mx-auto flex  gap-y-10">
                                                    <dd className="pr-10 order-first border-spacing-0 m-10 border-r-2 border-stone-100 font-sans font-thin tracking-tight text-black sm:text-2xl lg:text-4xl drop-shadow-lg">
                                                        {carousel.header}
                                                    </dd>
                                                    <dt className="ml-10 font-thin text-sm leading-7 mr-10 text-black sm:text-2xl lg:text-base drop-shadow-lg font-sans">
                                                        {carousel.description} <br />
                                                        <a
                                                href={carousel.href}
                                                className="ml-10 font-thin text-sm leading-7 mr-10 text-black sm:text-2xl lg:text-base drop-shadow-lg font-sans"
                                            >
                                                {carousel.button} <span aria-hidden="true">&rarr;</span>
                                            </a>
                                                    </dt>
                                                </div>
                                                
                                            </dl>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="group-right">
                                    <div className="">
                                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                            
                                            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
                                                
                                                    <div  className="mx-auto flex max-w-xs flex-col gap-y-4">
                                                        <dt className="text-base leading-7 text-stone-800">Daire</dt>
                                                        <dd className="order-first text-3xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
                                                            1000+
                                                        </dd>
                                                    </div>
                                                    <div  className="mx-auto flex max-w-xs flex-col gap-y-4">
                                                        <dt className="text-base leading-7 text-stone-600">İş Yeri</dt>
                                                        <dd className="order-first text-3xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
                                                            100+
                                                        </dd>
                                                    </div>
                                                
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