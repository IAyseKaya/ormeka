import orsetlogo from "../img/ek/orsetlogo.jpg";
import yapilogo from "../img/ek/yapilogo.png";
import motorslogo from "../img/ek/motorslogo.png"
import orset from "../img/ek/orsetbulvar1011.jpeg";
import motors from "../img/ek/motorluarac.jpg";
import yapi from "../img/ek/yapımalzeme.jpg";

const companies = [
    {
      name: 'ORSET',
      description: 'ORSET bir inşaat firmasıdır. Misyonu, insanların mutlu, huzurlu ve güvende hissedecekleri mekanlar inşa etmeyi hedeflemektedir. Projelerinde inşaat ve malzeme kalitesinin yanı sıra çevresel ve sosyal unsurlara da önem verir. ',
      imageSrc: orset,
      imageAlt: 'ORSET İNŞAAT TAAHHÜT TURİZM İTHALAT İHRACAT SAN VE TİC LTD ŞTİ',
      href: 'https://www.orsetinsaat.com.tr/',
      logo: orsetlogo ,
    },
    {
      name: 'GÖKTÜRK MOTORLU ARAÇLAR',
      description: 'Göktürk Motorlu Araçlar, araç deneyiminizi bir üst seviyeye taşımak için burada! Sunduğu geniş araç yelpazesiyle her ihtiyaca hitap ediyor.',
      imageSrc: motors,
      imageAlt: 'GÖKTÜRK GRUP MOTORLU ARAÇLAR SAN VE TİC LTD ŞTİ',
      href: '#',
      logo: motorslogo,
    },
    {
      name: 'GÖKTÜRK MOBİLYA YAPI MALZEME',
      description: 'Göktürk Mobilya Yapı Malzeme, tecrübeli ve uzman ekibiyle müşterilerine estetik ve kaliteli ürünleri bir araya getirme taahhüdüyle hizmet vermektedir.',
      imageSrc: yapi,
      imageAlt: 'GÖKTÜRK MOBİLYA YAPI MALZEMELERİ SAN VE TİC LTD ŞTİ',
      href: '#',
      logo: yapilogo,
    },
  ]

function GroupCompany() {

    return(
        <div className="group">
 <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h1 className="pt-6 pl-1 sm:pl-0 text-3xl font-semibold leading-7 text-stone-900">Grup Şirketlerimiz</h1>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {companies.map((company) => (
              <div key={company.name} className="group relative hover:scale-110 transition duration-500  ease-out ">
                <div className="relative flex items-center justify-center h-40 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64">
                  <img className="logos  w-auto" src={company.logo} alt={company.imageAlt}/>
                    
                </div>
                <h3 className="mt-6 text-base font-semibold text-gray-900">
                  <a target="_blank" rel="noopener noreferrer"
                   href={company.href}>
                    <span className="absolute inset-0 " />
                    {company.name}
                  </a>
                </h3>
                <p className="text-base font-normal text-gray-700">{company.description}</p>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
        </div>
    );
}
export default GroupCompany;