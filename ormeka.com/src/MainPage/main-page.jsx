
import MainCarousel from "./Carousel";
import MainLastProjects from "./MainLastProjects";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function MainPage() {
    const stats = [
        { id: 1, name: 'Hayalinizdeki Ev ve İş yerleri için Biz Buradayız', value: 'Estetik, Dayanıklılık ve Güven!' },
        { id: 2, name: 'Güvenilirlikten Doğan Yüksek Kalite!', value: 'Geleceği İnşa Ediyoruz' },
        { id: 3, name: 'İnşaatın Gücüyle Geleceği Şekillendiriyoruz', value: 'Bizimle Hayaliniz Gerçek Olsun!' },
    ];

    return (
        <div className="mainpage top-0">
            <div className="slider-container mb-20 max-h-[800px] overflow-hidden ">
             <MainCarousel/>  
            </div>
            <MainLastProjects/>

            <div className="group">
                <div className=" py-4 sm:py-3 mb-10">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                            {stats.map((stat) => (
                                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                    <dt className="text-base leading-7 text-stone-600">{stat.name}</dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
                                        {stat.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;