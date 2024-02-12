import logo from '../img/ormekalogokareseffaf.png';
function about() {

    return (
        <div className="about flex flex-col justify-center items-center">
            <img src={logo} alt="ormeka" className='w-auto h-[1000px] absolute z-10 opacity-20'/>
            <div className='mt-20 mb-20 w-3/5 z-20'>
                <div  className="px-0 lg:px-4 sm:px-0">
                <h1 className="pt-6 text-3xl font-semibold leading-7 text-stone-900">Hakkımızda</h1>
                    <p className="mt-1 max-w-2xl text-xl leading-6 text-stone-500">Estetiği ve Kaliteyi Bir Araya Getiriyoruz</p>
                </div>
                <div className="mt-6">
                    <dl className="">
                        <div className="px-0 lg:px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                            <dt className="text-sm sm:text-lg font-bold  font- leading-6 text-stone-900">Biz Kimiz</dt>
                            <dd className="mt-1 text-sm sm:text-lg leading-6 text-stone-700 sm:col-span-4 sm:mt-0">Ormeka İnşaat, 1987 yılında kurulmuş bir inşaat şirketidir ve seçkin konut projeleri üretme amacıyla yola çıkmıştır. Misyonumuz, "İnsanların içinde kendini mutlu, huzurlu ve güvende hissedecekleri mekanlar inşa etmeyi" hedeflemektedir.
                                <br />
                                Şirketimizi diğerlerinden ayıran temel özelliklerden biri, projelerinde sadece inşaat ve malzeme kalitesine değil, aynı zamanda çevresel ve sosyal unsurlara da büyük bir önem vermektir. Müşterilerimizin yaşam kalitesini artırmak adına estetik tasarıma odaklanıyor ve projelerimizi bu değerlere uygun bir şekilde geliştiriyoruz.
                                <br />
                                Ayrıca, müşterilerimizin bir an önce evlerine yerleşmelerini sağlamak için projelerimizi süratle ve zamanında bitirme konusundaki kararlılığımızı vurgulamaktayız. Müşterilerimize duyduğumuz güveni boşa çıkarmamak ve projelerimizi zamanında tamamlayarak kalitemizi kanıtlamak, vazgeçilmez ilkelerimiz arasında yer almaktadır.
                                <br />
                                Ormeka İnşaat, kalite ve müşteri memnuniyetini esas alan bir ticaret ve hizmet anlayışını benimsemektedir. Bu anlayışı, sadece inşaat aşamasında değil, aynı zamanda satış ve hizmet süreçlerini de içine alan kurumsal boyutlarda gerçekleştirmeyi hedeflemektedir.
                                <br />
                            </dd>
                        </div>
                        <div className="px-0 lg:px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                            <dt className="text-sm sm:text-lg  font-bold  leading-6 text-stone-900">Vizyonumuz</dt>
                            <dd className="mt-1 text-sm sm:text-lg  leading-6 text-stone-700 sm:col-span-4 sm:mt-0">Vizyonumuz, estetik ve fonksiyonel açıdan en iyi çözümleri sunarak, müşteri beklentilerinin ötesine geçmek, müşteri memnuniyetini sağlamak ve çalışanlarımızın tatmin ve memnuniyetini sağlayarak sektörde öncülük etmektir.
                                <br /></dd>
                        </div>
                        <div className="px-0 lg:px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                            <dt className="text-sm sm:text-lg font-bold  leading-6 text-stone-900">Misyonumuz</dt>
                            <dd className="mt-1 text-sm sm:text-lg leading-6 text-stone-700 sm:col-span-4 sm:mt-0">Misyonumuz, yüksek standartlarda kaliteli hizmet sunarak müşteri memnuniyetini en üst düzeye çıkarmak, müşterilerimizin haklarına saygı göstermek ve çevreye karşı sorumluluklarımızı yerine getirmektir.
                                <br /></dd>
                        </div>
                        <div className="px-0 lg:px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                            <dt className="text-sm sm:text-lg font-bold  leading-6 text-stone-900">Firma Politikamız</dt>
                            <dd className="mt-1 text-sm sm:text-lg leading-6 text-stone-700 sm:col-span-4 sm:mt-0"> Firma Politikamız, müşteri beklentilerini her defasında, zamanında ve tam olarak karşılamak; çevreye saygılı, estetik ve fonksiyonel açıdan müşteri memnuniyetini en üst düzeyde sağlayacak hizmeti sunmaktır.
                                <br />
                                Hizmette güven, müşteri memnuniyeti, kalite, hız ve stabilite prensiplerine bağlı bir şekilde, etik değerlere önem veren, müşteri odaklı çözümlere öncelik veren ve sosyal sorumluluk sahibi bir inşaat firması olarak tanınmaktayız. Ormeka İnşaat olarak, müşteri memnuniyetini sağlama konusundaki kararlılığımızı sürdürmekteyiz, ve bu doğrultuda ilerlemeye devam ediyoruz.
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>
        </div>
    );
}
export default about;