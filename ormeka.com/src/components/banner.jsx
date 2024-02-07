import { XMarkIcon , PhoneIcon } from '@heroicons/react/20/solid'

function banner() {

    return ( <div className="banner bg-orange-500">

<div className="relative isolate flex items-center gap-x-6 overflow-hidden  px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -transtone-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -transtone-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-stone-100">
          <strong className="font-semibold">Fırsatları Kaçırma</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Fiyat Teklifleri Almak İçin
        </p>
        <a
          href="#"
          className="flex 
          border-4 border-orange-500 bg-stone-700 text-white
          hover:bg-green-400 hover:border-stone-700  px-3.5 py-1 text-sm font-semibold  shadow-sm"
        >
         <PhoneIcon className="h-5 w-5 text-orange-500" aria-hidden="true" /> İletişime Geç 
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Kapat</span>
          <XMarkIcon className="h-5 w-5 text-slate-900" aria-hidden="true" />
        </button>
      </div>
    </div>
    
    </div>
    );
}
export default banner;