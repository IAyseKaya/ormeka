const projects = [
    {
        id: 1,
        name: 'Kaya Plaza',
        href: '/project:1',
        imageSrc: "",
        imageAlt: 'Kaya Plaza',
        description: '40 adet daire ve 3,700 m2 ticari alanı içeren projemiz başarıyla tamamlandı ve iskanı alındı. Sizi modern konutlar ve iş alanlarının buluştuğu bu özel projeyi keşfetmeye davet ediyoruz!',
    },
    {
        id: 2,
        name: 'Kaya Plaza Siteler',
        href: '/project:2',
        imageSrc: '',
        imageAlt: 'Kaya Plaza Siteler',
        description: 'Projemiz başarıyla tamamlandı ve iskanı alındı. Toplamda 2200 m2 kapalı kullanım alanına sahip bu özel proje, size modern ve geniş yaşam alanları sunmaya hazır. Detayları keşfetmeye davetlisiniz!',
    },
    {
        id: 3,
        name: 'Bulvar 1011',
        href: '/project:3',
        imageSrc: '',
        imageAlt: "Bulvar 1011",
        description: '180 adet konut ve 1.300 m2 ticari alanı içeren projemiz tamamlandı ve iskanı alındı. Sizleri bu özel yaşam alanlarını keşfetmeye davet ediyoruz!',
    },
    {
        id: 4,
        name: 'Bulvar Anadolu',
        href: '/project:4',
        imageSrc: '',
        imageAlt: "Bulvar Anadolu",
        description: '2 blokta toplamda 128 bağımsız bölümden oluşan projemiz başarıyla tamamlandı ve iskanı alındı. Sizleri modern yaşamın konforuyla buluşturan bu özel projeyi keşfetmeye davet ediyoruz!',
    },{
        id: 5,
        name: 'Golden Tower',
        href: '/project:5',
        imageSrc: '',
        imageAlt: "Golden Tower",
        description: '60 adet ticari bağımsız bölümden oluşan projemiz tamamlanmış ve iskanı alınmıştır. Sizleri iş ve ticaretin kalbindeki bu özel alanları keşfetmeye davet ediyoruz!',
    },
    {
        id: 6,
        name: 'Ostim İş Yeri',
        href: '/project:6',
        imageSrc: '',
        imageAlt: "Bulvar 1011",
        description: 'Ankara`nın sanayinin kalbi olan OSTİM OSB`de birçok projemizi başarıyla tamamlayarak, yeni sahiplerine teslim ettik. Sanayi ve ticaretin nabzının attığı bu bölgede sunduğumuz projelerle, iş dünyasına değer katan bir ortak olmaktan gurur duyuyoruz.',
    }, 
    
    {
        id: 7,
        name: 'Ostim İş Yeri',
        href: '/project:7',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Bulvar 1011",
        description: '',
    },
    {
        id: 8,
        name: 'Duru Sitesi',
        href: '/project:8',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Bulvar 1011",
        description: 'Projemizin yapımı tamamlanmış olup, iskanı alınmıştır. Modern yaşamın konforu ve güvenliğiyle dolu bu özel projemizi keşfetmeye hazır mısınız?',
    },
    {
        id: 9,
        name: 'Duru Sitesi',
        href: '/project:9',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Bulvar 1011",
        description: 'Projemizin yapımı tamamlanmış olup, iskanı alınmıştır. Modern yaşamın konforu ve güvenliğiyle dolu bu özel projemizi keşfetmeye hazır mısınız?',
    },
   
    {
        id: 10,
        name: 'Duru Sitesi',
        href: '/project:10',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Bulvar 1011",
        description: 'Projemizin yapımı tamamlanmış olup, iskanı alınmıştır. Modern yaşamın konforu ve güvenliğiyle dolu bu özel projemizi keşfetmeye hazır mısınız?',
    },


]

function ProjectsPage() {

    return (
        <div className="Projects">
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <h2 className="text-2xl font-bold text-stone-900">Projeler</h2>

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                            {projects.map((project) => (
                                <div key={project.name} className="group relative mb-6 ">
                                    <div className="border-4 border-orange-500 bg-stone-700 text-white
                                     relative h-80 w-full overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img
                                            src={project.imageSrc}
                                            alt={project.imageAlt}
                                            className="h-full w-full object-cover object-center "
                                        />
                                    </div>
                                    <h3 className="mt-6 text-base font-semibold text-stone-900">
                                        <a href={project.href}>
                                            <span className="absolute inset-0" />
                                            {project.name}
                                        </a>
                                    </h3>
                                    <p className="text-sm text-stone-500">{project.description}</p>
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