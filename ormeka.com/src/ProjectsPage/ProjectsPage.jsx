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
                            {projects.map((project, index) => (
                                <div key={project.id} className="group relative mb-6">
                                    <Link to={`/proje/${project.link}/`}></Link>
                                    <div
                                        className="border-4 border-slate-400 bg-stone-700 text-white
                                     relative h-80 w-full 
                                      group-hover:scale-110 transition duration-500 ease-out"

                                    >
                                        <img
                                            src={project.images.image1src}
                                            alt={project.images.imgAlt}
                                            className="border-4 border-amber-400 h-full w-full w-outo object-fill object-center hover:scale-110 transition duration-500 ease-out"
                                        />

                                    </div>
                                    <h3 className="mt-6 text-base font-semibold text-stone-900">
                                        <a href={`/proje/${project.link}`}>
                                            <span className="absolute inset-0" />
                                            {project.name}
                                        </a>
                                    </h3>
                                    <p className="text-sm text-stone-500 mt-1 mb-5 h-20 overflow-hidden">{project.descriptions.des1}</p>
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