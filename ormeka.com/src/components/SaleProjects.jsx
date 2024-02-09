import lastproject from "../data/projects";
import { Link } from 'react-router-dom';


function SaleProject() {

    const lastTwoProject = lastproject.slice(-2);
    return (
        <div className="projects">
            <div className="bg-stone-100">
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <h1 className="pt-6 pl-1 sm:pl-0 text-3xl font-semibold leading-7 text-stone-900">Son Projelerimiz</h1>
                </div>

                {lastTwoProject.map((project, index) => (
                    <div key={index} className="pt-6">
                        <Link to={`/proje/${project.id}`}></Link>
                        <div key={project.id} className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">

                            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block hover:scale-110 transition duration-500  ease-out">
                                <img
                                    src={project.images.image1src}
                                    alt={project.images.imgAlt}
                                    className="h-full w-full object-cover object-center  "
                                />
                            </div>
                            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg hover:scale-110 transition duration-500  ease-out">
                                    <img
                                        src={project.images.image2src}
                                        alt={project.images.imgAlt}
                                        className="h-full w-full object-cover object-center "
                                    />
                                </div>
                                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg hover:scale-110 transition duration-500  ease-out">
                                    <img
                                        src={project.images.image3src}
                                        alt={project.images.imgAlt}
                                        className="h-full w-full object-cover object-center "
                                    />
                                </div>
                            </div>
                            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg hover:scale-110 transition duration-500  ease-out">
                                <img
                                    src={project.images.image4src}
                                    alt={project.images.imgAlt}
                                    className="h-full w-full object-cover object-center "
                                />
                            </div>
                        </div>

                        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                            <div className="lg:col-span-2 lg:border-r lg:border-stone-200 lg:pr-8">
                                <h1 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">{project.name}</h1>
                            </div>
                            <div className="py-5 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-stone-200 lg:pb-16 lg:pr-8 lg:pt-6">

                                <div>
                                    <div className="space-y-6">
                                        <p className="text-base text-stone-900">{project.descriptions.des1}</p>
                                    </div>
                                </div>

                            </div>

                            <div className="lg:row-span-3 lg:mt-0 mb-24">
                                <form className="">
                                    <a className="flex w-full items-center justify-center rounded-mdbg-stone-600 px-8 py-3 text-base font-medium 
                                        border-4 border-amber-400 bg-stone-700 text-white
                                        hover:bg-amber-400 hover:text-slate-900 " href={`/proje/${project.id}`}>
                                        Projeyi İncele
                                    </a>
                                </form>
                            </div>


                        </div>

                    </div>
                ))}
            </div>

        </div>);
}
export default SaleProject;