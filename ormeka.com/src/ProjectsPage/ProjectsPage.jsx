import img1 from "../img/projects/kayaplaza.jpg";
import img2 from "../img/projects/kayaplazasiteler.JPG";
import img3 from "../img/projects/bulvar1011.JPG";
import img4 from "../img/projects/goldentower.JPG";
import img5 from "../img/projects/ostimişyeri.jpg";
import img6 from "../img/projects/bulvaranadolu.JPG";
import img7 from "../img/projects/zirvelife.JPG";
import img8 from "../img/projects/zirvelife1.jpg";
import img9 from "../img/projects/durusitesi.JPG";
import img10 from "../img/projects/kesifinssat.JPG";


const projects = [
    {
        id: 1,
        name: 'Kaya Plaza',
        href: '/project:1',
        imageSrc: img1,
        imageAlt: 'Kaya Plaza',
        description: '40 adet daire ve 3,700 m2 ticari alanı içeren projemiz başarıyla tamamlandı ve iskanı alındı. Sizi modern konutlar ve iş alanlarının buluştuğu bu özel projeyi keşfetmeye davet ediyoruz!',
    },
    {
        id: 2,
        name: 'Kaya Plaza Siteler',
        href: '/project:2',
        imageSrc: img2,
        imageAlt: 'Kaya Plaza Siteler',
        description: 'Projemiz başarıyla tamamlandı ve iskanı alındı. Toplamda 2200 m2 kapalı kullanım alanına sahip bu özel proje, size modern ve geniş yaşam alanları sunmaya hazır. Detayları keşfetmeye davetlisiniz!',
    },
    {
        id: 3,
        name: 'Bulvar 1011',
        href: '/project:3',
        imageSrc: img3,
        imageAlt: "Bulvar 1011",
        description: '180 adet konut ve 1.300 m2 ticari alanı içeren projemiz tamamlandı ve iskanı alındı. Sizleri bu özel yaşam alanlarını keşfetmeye davet ediyoruz!',
    },
    {
        id: 4,
        name: 'Golden Tower',
        href: '/project:4',
        imageSrc: img4,
        imageAlt: "Golden Tower",
        description: '60 adet ticari bağımsız bölümden oluşan projemiz tamamlanmış ve iskanı alınmıştır. Sizleri iş ve ticaretin kalbindeki bu özel alanları keşfetmeye davet ediyoruz!',
    },
    {
        id: 5,
        name: 'Ostim İş Yeri',
        href: '/project:5',
        imageSrc: img5,
        imageAlt: "Ostim İş Yeri Dükkan",
        description: 'Ankara`nın sanayinin kalbi olan OSTİM OSB`de birçok projemizi başarıyla tamamlayarak, yeni sahiplerine teslim ettik. Sanayi ve ticaretin nabzının attığı bu bölgede sunduğumuz projelerle, iş dünyasına değer katan bir ortak olmaktan gurur duyuyoruz.',
    },
     {
        id: 6,
        name: 'Bulvar Anadolu',
        href: '/project:6',
        imageSrc: img6,
        imageAlt: "Bulvar Anadolu",
        description: '2 blokta toplamda 128 bağımsız bölümden oluşan projemiz başarıyla tamamlandı ve iskanı alındı. Sizleri modern yaşamın konforuyla buluşturan bu özel projeyi keşfetmeye davet ediyoruz!',
    },
    
    
    {
        id: 7,
        name: 'Zirve Life',
        href: '/project:7',
        imageSrc: img7,
        imageAlt: "Bulvar 1011",
        description: 'Projemizin yapımı tamamlanmış olup, iskanı alınmıştır. Modern yaşamın konforu ve güvenliğiyle dolu bu özel projemizi keşfetmeye hazır mısınız?',
    },
    {
        id: 8,
        name: 'Zirve Life',
        href: '/project:8',
        imageSrc: img8,
        imageAlt: "Bulvar 1011",
        description: 'Projemizin yapımı tamamlanmış olup, iskanı alınmıştır. Modern yaşamın konforu ve güvenliğiyle dolu bu özel projemizi keşfetmeye hazır mısınız?',
    },
    {
        id: 9,
        name: 'Duru Sitesi',
        href: '/project:9',
        imageSrc: img9,
        imageAlt: "Bulvar 1011",
        description: 'Projemizin yapımı tamamlanmış olup, iskanı alınmıştır. Modern yaşamın konforu ve güvenliğiyle dolu bu özel projemizi keşfetmeye hazır mısınız?',
    },
   
    {
        id: 10,
        name: 'Keşif İnşaat',
        href: '/project:10',
        imageSrc: img10 ,
        imageAlt: "Keşif İnşaat",
        description: 'Projemizin yapımı tamamlanmış olup, iskanı alınmıştır. Modern yaşamın konforu ve güvenliğiyle dolu bu özel projemizi keşfetmeye hazır mısınız?',
    },


]

function ProjectsPage() {



    return (
        <div className="Projects">
            <div className="">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <h2 className="text-2xl font-bold text-stone-900">Projeler</h2>

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                            {projects.map((project) => (
                                <div key={project.name} className="group relative mb-6 ">
                                    <div className="border-4 border-amber-400 bg-stone-700 text-white
                                     relative h-80 w-full overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 contrast-125 brightness-110 sm:h-64 group-hover:scale-110 transition duration-500  ease-out  ">
                                        <div className="blackout absolute w-full h-full bg-black opacity-30"></div>
                                        <img
                                            src={project.imageSrc}
                                            alt={project.imageAlt}
                                            className="h-full w-full object-cover object-center "
                                        />
                                        <button
                                        type="submit"
                                        className="project-hover-button mt-10 flex w-full items-center justify-center rounded-mdbg-stone-600 px-8 py-3 text-base font-medium 
                                        border-4 border-amber-400 bg-stone-700 text-white
                                        hover:bg-amber-400 hover:text-slate-900 "
                                    >
                                        Projeyi İncele
                                    </button>
                                    </div>
                                    <h3 className="mt-6 text-base font-semibold text-stone-900">
                                        <a href={project.href}>
                                            <span className="absolute inset-0" />
                                            {project.name}
                                        </a>
                                    </h3>
                                    <p className="text-sm text-stone-500 mt-1 mb-5">{project.description}</p>
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