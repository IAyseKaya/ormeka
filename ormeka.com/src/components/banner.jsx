import { XMarkIcon, PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/20/solid'

import logo from "../img/lightormekalogo.png"

function banner() {

  return (<div className="banner border-b-2 border-amber-400 bg-stone-900 flex flex-col items-center justify-center">
    <div className=" lg:flex-1 flex items-center justify-center pt-10">
      <a href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Ormeka</span>
        <img
          className="w-auto h-20 "
          src={logo}
          alt="ormeka inşaat"
        />
      </a>
    </div>
    <hr className='bg-amber-400 opacity-100 h-0.5 w-3/5 mt-2'/>
    <div className="icons lg:flex-1 flex items-center justify-around p-10 lg:w-3/5 ">
      <div className="phoneDiv flex items-center justify-between">
        <PhoneIcon className="h-5 w-5 m-3 text-stone-300" />
        <div className="contact-cont">
        <p className="text-sm leading-6 text-stone-300">
          Telefon
        </p>
        <a href="tel:+903123480429" className="text-sm font-extralight leading-6 text-stone-300">
          0312 348 04 29
        </a>
        </div>
      </div>
      <div className="mailDiv flex items-center justify-between">
        <EnvelopeIcon className="h-5 w-5 m-3 text-stone-300" />
        <div className="contact-cont">
          <p className="text-sm leading-6 text-stone-300">
            Mail
          </p>
          <a href="mailto:info@ormeka.com" className="text-sm font-extralight leading-6 text-stone-300">
            info@ormeka.com
          </a>
        </div>
      </div>
      <div className="mapDiv flex items-center justify-between">
        <MapPinIcon className="h-5 w-5 m-3 text-stone-300" />
        <div className="contact-cont">
        <p className="text-sm leading-6 text-stone-300">
          Konum
        </p>
        <a href="https://maps.app.goo.gl/e3f3JDJGzJqLvBXV9" className="text-sm  font-extralight leading-6 text-stone-300">
          EREĞLİ CADDDESİ NO:54 <br />
          KAYA PLAZA ALTINDAĞ/ANKARA
        </a>
        </div>
      </div>

    </div>


  </div>
  );
}
export default banner;