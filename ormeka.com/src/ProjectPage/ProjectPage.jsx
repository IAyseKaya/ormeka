import Carousel from 'react-bootstrap/Carousel';
import projects from '../data/projects';

import { useParams } from 'react-router-dom';

function ProjectPage() {
    const { id ,name ,image } = useParams();
    const project = projects.find(project => project.id === parseInt(id, 10));
    return (
        <div className="Project">
            <div className="1-row">
                    <div className="">

                        <div className="images grid lg:grid-cols-4 sm:grid-cols-2 w-full">
                            <div className="img h-[500px] overflow-hidden lg:block lg:h-[800px]">
                                <img className='hover:scale-x-150 transition duration-500  ease-out object-cover h-full' src={project.images.image1src} alt={project.images.imgAlt} />
                            </div>
                            <div className="img  h-[500px] overflow-hidden lg:h-[800px]">
                                <img className='hover:scale-x-150 transition duration-500  ease-out object-cover h-full ' src={project.images.image2src} alt={project.images.imgAlt} />
                            </div>
                            <div className="img  h-[500px] overflow-hidden lg:h-[800px]">
                                <img className='hover:scale-x-150 transition duration-500  ease-out object-cover h-full' src={project.images.image3src} alt={project.images.imgAlt} />
                            </div>
                            <div className="img  h-[500px] overflow-hidden lg:h-[800px]">
                                <img className='hover:scale-x-125 transition duration-500  ease-out object-cover h-full' src={project.images.image4src} alt={project.images.imgAlt} />
                            </div>
                        </div>
                        <div className="relative isolate overflow-hidden flex flex-col px-6 py-4 sm:py-3 lg:overflow-visible lg:px-0">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-1 lg:items-center lg:gap-y-10">
                                <div className="lg:w-full lg:max-w-7xl mt-20">
                                    <div className="lg:pr-4">
                                        <p className="mt-16 text-4xl font-bold tracking-tight text-amber-400">{project.name}</p>
                                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">{project.title}</h1>
                                    </div>
                                    <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                        <li className="flex gap-x-3">
                                            <span>{project.descriptions.des1}</span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <span>{project.descriptions.des2}</span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <span>{project.descriptions.des3}</span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <span>{project.descriptions.des4}</span>
                                        </li>
                                    </ul>
                                    <a 
                                        href={project.sahibinden}
                                        className={project.sahibinden ? 'project-s-button mt-10 flex w-full items-center justify-center rounded-mdbg-stone-600 px-8 py-3 text-base font-medium border-4 border-amber-400 bg-stone-700 text-white hover:bg-amber-400 hover:text-slate-900 ' 
                                        : 'hidden'}
                                    >
                                        Projeyi Daha Ayrıntılı İncele
                                    </a>
                                </div>
                                <div className= "frames w-full lg:flex">
                                    <div className= {project.streetview ? 'iframe mr-2 w-full h-[500px]': 'h-0 w-0'}>
                                        <iframe src={project.streetview} frameborder="0" className="iframe w-full h-[500px]"></iframe>
                                    </div>
                                    <div className= {project.iframe ? ' iframe w-full h-[500px] ': 'h-0 w-0'}>
                                        <iframe src={project.iframe} frameborder="0" className="iframe w-full h-[500px]"></iframe>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
               
            </div>
        </div>
    );
}
export default ProjectPage;