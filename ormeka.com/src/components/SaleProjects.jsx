import salesproject from "../data/salesproject";


function SaleProject() {

    return (
        <div className="projects">
            <div className="bg-stone-100">
                <h1 className="pt-6 text-3xl font-semibold leading-7 text-stone-900">Satıştaki Projelerimiz</h1>
                 {salesproject.map((project) => (
                 <div className="pt-6">
                        <div key={project.id} className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">

                            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                                <img
                                    src={project.images.image1src}
                                    alt={project.images.imgAlt}
                                    className="h-full w-full object-cover object-center hover:scale-110 transition duration-500  ease-out "
                                />
                            </div>
                            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                    <img
                                        src={project.images.image2src}
                                        alt={project.images.imgAlt}
                                        className="h-full w-full object-cover object-center  hover:scale-110 transition duration-500  ease-out"
                                    />
                                </div>
                                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                    <img
                                        src={project.images.image3src}
                                        alt={project.images.imgAlt}
                                        className="h-full w-full object-cover object-center  hover:scale-110 transition duration-500  ease-out"
                                    />
                                </div>
                            </div>
                            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg ">
                                <img
                                    src='https://media.discordapp.net/attachments/988883199209926710/1204068111670579311/IMG_1887.JPG?ex=65d362d0&is=65c0edd0&hm=57ab978625ad3784e92abfbbfa24091cf5d52cd92737bda91485f9d0312cca99&=&format=webp&width=721&height=541'
                                    alt={project.images.imgAlt}
                                    className="h-full w-full object-cover object-center  hover:scale-110 duration-100 "
                                />
                            </div>
                        </div>
                   
                        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                            <div className="lg:col-span-2 lg:border-r lg:border-stone-200 lg:pr-8">
                                <h1 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">{project.name}</h1>
                            </div>


                            <div className="lg:row-span-3 lg:mt-0 mt-24 mb-24">
                                <form className="mt-10">

                                    <button
                                        type="submit"
                                        className="mt-10 flex w-full items-center justify-center rounded-mdbg-stone-600 px-8 py-3 text-base font-medium 
                                        border-4 border-amber-400 bg-stone-700 text-white
                                        hover:bg-amber-400 hover:text-slate-900 "
                                    >
                                        Projeyi İncele
                                    </button>
                                </form>
                            </div>

                            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-stone-200 lg:pb-16 lg:pr-8 lg:pt-6">

                                <div>
                                    <h3 className="sr-only">Description</h3>

                                    <div className="space-y-6">
                                        <p className="text-base text-stone-900">{project.description}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                  
                </div>
  ))}
            </div>

        </div>);
}
export default SaleProject;