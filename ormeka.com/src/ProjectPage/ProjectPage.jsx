import projects from '../data/projects';

function ProjectPage() {

    return (
        <div className="Project">

            <div className="1-row">
                {projects.map((project) => (
                    <div className="">

                        <div className="images grid grid-cols-4 w-full">
                            <div className="img h-[500px] lg:h-[800px]">
                                <img className='hover:scale-x-150 transition duration-500  ease-out  object-cover h-full' src={project.images.image1src} alt={project.images.imgAlt} />
                                <div className="blackout absolute h-full bg-black opacity-40"></div>
                            </div>
                            <div className="img  h-[500px] lg:h-[800px]">
                                <div className="blackout absolute   h-full bg-black opacity-40"></div>
                                <img className='hover:scale-x-150 transition duration-500  ease-out relative  object-cover h-full ' src={project.images.image2src} alt={project.images.imgAlt} />
                            </div>
                            <div className="img  h-[500px] lg:h-[800px]">
                                <div className="blackout absolute   h-full bg-black opacity-40"></div>
                                <img className='hover:scale-x-150 transition duration-500  ease-out  object-cover h-full' src={project.images.image3src} alt={project.images.imgAlt} />
                            </div>
                            <div className="img  h-[500px] lg:h-[800px]">
                                <div className="blackout absolute   h-full bg-black opacity-40"></div>
                                <img className='hover:scale-x-150 transition duration-500  ease-out  object-cover h-full' src={project.images.image4src} alt={project.images.imgAlt} />
                            </div>
                        </div>
                        <div className="relative isolate overflow-hidden flex flex-col px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-10">
                            <div className=" lg:mx-auto  lg:w-full lg:max-w-7xl lg:px-8 mt-20">
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
                                

                            </div>
                            <div className="iframe w-full h-[700px]">
                                    <iframe src={project.iframe} frameborder="0" className="iframe w-full h-[500]"></iframe>
                                </div>
                        </div></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ProjectPage;