import logo from "../img/lightormekalogo.png"
import gtmotor from "../img/gtmotordarkseffaf.png";
import gtyapi from "../img/gtyapidarkseffaf.png";
import orset from "../img/orsetlogo.png";
import navigation from "../data/navigation";

import { PiFacebookLogoThin, PiInstagramLogoThin } from "react-icons/pi";


function Footer() {

  return (
    <div className="footer bg-slate-900">
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-amber-400">
            Ormeka İnşaat: Güven ve Estetiği Buluşturan 35 Yıl!
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center sm:max-w-xl sm:grid-cols-1  lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="first-col h-[300px] col-span-4 w-full object-contain lg:col-span-1 flex flex-col items-start justify-start lg:border-stone-400 lg:border-r-2">
              <a href="/">
                <img

                  className="col-span-2 h-10 ml-10 w-outo object-cover lg:col-span-1"
                  src={logo}
                  alt="Transistor"
                  width={158}
                  height={48}
                />
              </a>
              <p className="text-sm m-10  leading-6 text-stone-400">
                Ormeka İnşaat, 1987 yılında köklü bir geçmiş ve sağlam bir vizyonla kurulmuş bir inşaat şirketidir. 35 yılı aşkın süredir sektördeki varlığını sürdüren firmamız, seçkin konut projeleri üretme amacıyla yola çıkarak, insanların hayallerini gerçeğe dönüştürmeyi kendisine misyon edinmiştir.
              </p>
            </div>
            <div className="second-col h-[300px] col-span-4 w-full object-contain lg:col-span-1 flex flex-col items-center justify-start lg:border-stone-400 lg:border-r-2">
              <p className="text-lg mb-5 leading-6 text-stone-300">KURUMSAL</p>
              {navigation.map((item) => (
                <div className="div  h-10">
                  <a key={item.name} href={item.href} className="text-lg text-stone-400 hover:border-b-2 hover:border-stone-300 hover:text-amber-400 font-light leading-6">
                    {item.name}
                  </a>
                </div>

              ))}
            </div>
            <div className="third-col h-[300px] col-span-4 w-full object-contain lg:col-span-1 flex flex-col items-center justify-between">
              <div className="flex flex-col items-center justify-center">
                <div className="group m-2">
                  <img

                    className="col-span-2 h-10  w-outo object-cover lg:col-span-1 opacity-70"
                    src={orset}
                    alt="Transistor"
                    width={158}
                    height={48}
                  />
                </div>

                <div className="group m-2">
                  <img

                    className="col-span-2 h-10  w-outo object-cover lg:col-span-1 opacity-70"
                    src={gtmotor}
                    alt="Transistor"
                    width={158}
                    height={48}
                  />
                </div>
                <div className="group m-2">
                  <img

                    className="col-span-2 h-10  w-outo object-cover lg:col-span-1 opacity-70"
                    src={gtyapi}
                    alt="Transistor"
                    width={158}
                    height={48}
                  />
                </div>

                <div className="social flex items-center justify-between w-[158px] mt-10">
                  <a href="">
                    <PiFacebookLogoThin className="h-10 w-10 m-2 bg-none text-stone-400 hover:text-amber-400" />
                  </a>
                  <a href="https://www.instagram.com/ormeka_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <PiInstagramLogoThin className="h-10 w-10 m-2 bg-none text-stone-400 hover:text-amber-400" />
                  </a>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;