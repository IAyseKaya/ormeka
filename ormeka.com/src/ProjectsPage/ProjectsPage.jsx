import projects from '../data/projects';
import { Link } from 'react-router-dom';

function ProjectsPage() {
    
    return (
        <div className="Projects">
            <div className="">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h1 className="pt-6 text-3xl font-semibold leading-7 text-stone-900">Projelerimiz</h1>

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                            {projects.map((project) => (
                             
                                <div key={project.id} className="group relative mb-6 ">
                                    <Link to={`/proje/${project.id}`}></Link>
                                    <div className="border-4 border-amber-400 bg-stone-700 text-white
                                     relative h-80 w-full overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 contrast-125 brightness-110 sm:h-64 group-hover:scale-110 transition duration-500  ease-out  ">
                                        <div className="blackout absolute w-full h-full bg-black opacity-30"></div>
                                        <a href={`/proje/${project.id}`}>
                                        <img
                                            src={project.images.image1src}
                                            alt={project.images.imgAlt}
                                            className="h-full w-full object-cover object-center "
                                        /></a>
                                        <a href={`/proje/${project.id}`}
                                        className="project-hover-button mt-10 flex w-full items-center justify-center rounded-mdbg-stone-600 px-8 py-3 text-base font-medium 
                                        border-4 border-amber-400 bg-stone-700 text-white
                                        hover:bg-amber-400 hover:text-slate-900 "
                                    >
                                        Projeyi İncele
                                    
                                        </a>
                                        
                                    </div>
                                    <h3 className="mt-6 text-base font-semibold text-stone-900">
                                        <a href={`/proje/${project.id}`}>
                                            <span className="absolute inset-0" />
                                            {project.name}
                                        </a>
                                    </h3>
                                    <p className="text-sm text-stone-500 mt-1 mb-5">{project.descriptions.des1}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default ProjectsPage;