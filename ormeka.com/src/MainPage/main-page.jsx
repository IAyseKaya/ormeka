
import MainCarousel from "./Carousel";
import MainLastProjects from "./MainLastProjects";
import footerimg from '../img/ek/footerimg.png'
import { PiBuildingsThin, PiInfinityThin, PiArticleNyTimesThin } from "react-icons/pi";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function MainPage() {
    const stats = [
        {
            id: 1,
            icon: <PiBuildingsThin className="h-full w-full"/>,
            name: 'Hayalinizdeki Ev ve İş yerleri için Biz Buradayız',
            value: 'Estetik, Dayanıklılık ve Güven!'
        },
        {
            id: 2,
            icon: <PiInfinityThin className="h-full w-full"/>,
            name: 'Güvenilirlikten Doğan Yüksek Kalite!',
            value: 'Geleceği İnşa Ediyoruz'
        },
        {
            id: 3,
            icon: <PiArticleNyTimesThin className="h-full w-full"/>,
            name: 'İnşaatın Gücüyle Geleceği Şekillendiriyoruz',
            value: 'Bizimle Hayaliniz Gerçek Olsun!'
        },
    ];

    return (
        <div className="mainpage top-0">
            <div className="slider-container mb-20 max-h-[800px] overflow-hidden ">
                <MainCarousel />
            </div>
            <MainLastProjects />

            <div className="group sm:mb-20">
                <div className=" py-4 sm:py-3 mb-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                            {stats.map((stat) => (
                                <div key={stat.id} className="mx-auto flex max-w-xs flex-col items-center justify-center gap-y-4">
                                    <div className="div order-first  h-40 w-40 text-stone-900">
                                        {stat.icon}
                                    </div>
                                    <dd className=" text-2xl font-semibold tracking-tight text-stone-900 sm:text-xl">
                                        {stat.value}
                                    </dd>
                                    <dt className="text-base leading-7 text-stone-600">{stat.name}</dt>

                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="div  bg-amber-400">
                <a target="_blank" rel="noopener noreferrer"
                    href="mailto:ormekayapi@gmail.com" className=" relative ">
                    <img src={footerimg} alt="orset inşaat" className="h-auto w-full" /></a>
            </div>
        </div>
    );
}

export default MainPage;