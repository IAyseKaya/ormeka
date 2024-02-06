
const product = {
    name: 'Kaya Plaza',
    href: '/projeler',
    breadcrumbs: [
        { id: 1, name: 'Projeler', href: '#' },
        { id: 2, name: 'Kaya Plaza', href: '#' },
    ],
    images: [
        {
            src: 'https://media.discordapp.net/attachments/988883199209926710/1204068111670579311/IMG_1887.JPG?ex=65d362d0&is=65c0edd0&hm=57ab978625ad3784e92abfbbfa24091cf5d52cd92737bda91485f9d0312cca99&=&format=webp&width=721&height=541',
            alt: 'Two each of slate, white, and black shirts laying flat.',
        },
        {
            src: 'https://discord.com/channels/988883199209926707/988883199209926710/1204068112253849640',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://discord.com/channels/988883199209926707/988883199209926710/1204068112253849640',
            alt: 'Model wearing plain slate basic tee.',
        },
        {
            src: 'https://discord.com/channels/988883199209926707/988883199209926710/1204068112253849640',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    description:
        'Modern yaşamın konforunu ve işlevselliği bir araya getiren projemiz tamamlandı! 40 adet konforlu daire ve 3,700 m2 lik etkileyici ticari alan ile kentsel yaşamın yeni bir yıldızı olarak karşınızdayız. İskanını almış olan projemiz, estetik tasarımı ve işlevselliği ile öne çıkıyor. Her ayrıntıda kalite ve güveni bir araya getirerek, sizlere benzersiz bir yaşam deneyimi sunuyoruz. Şehrin merkezine olan yakınlığı ve çevresindeki olanaklarla birlikte, bu proje, yaşamınıza değer katmak için ideal bir tercih olabilir. Sizi, konforlu ve modern yaşam alanlarımızı keşfetmeye davet ediyoruz!',
    details:
        'Modern yaşamın konforunu ve işlevselliği bir araya getiren projemiz tamamlandı! 40 adet konforlu daire ve 3,700 m2 lik etkileyici ticari alan ile kentsel yaşamın yeni bir yıldızı olarak karşınızdayız. İskanını almış olan projemiz, estetik tasarımı ve işlevselliği ile öne çıkıyor. Her ayrıntıda kalite ve güveni bir araya getirerek, sizlere benzersiz bir yaşam deneyimi sunuyoruz. Şehrin merkezine olan yakınlığı ve çevresindeki olanaklarla birlikte, bu proje, yaşamınıza değer katmak için ideal bir tercih olabilir. Sizi, konforlu ve modern yaşam alanlarımızı keşfetmeye davet ediyoruz!',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

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
        <div className="mainpage ">
            <div className="slider-container top-0">
                <div className='w-full h-[900px] m-auto relative group'>
                    <div
                        className='slider-control w-full h-full bg-center bg-cover '
                    >
                        <div className="slider-text absolute flex items-center justify-center h-full w-full">
                            <div className="text flex items-center justify-center h-full w-full">
                                <img className='relative w-full h-[700px] object-cover' src="https://scontent.fesb3-2.fna.fbcdn.net/v/t39.30808-6/307989575_639144374582544_2852825320184913686_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=783fdb&_nc_ohc=a6BhGtS9FywAX9B_D10&_nc_ht=scontent.fesb3-2.fna&oh=00_AfAWLqTDvaJd3_EvcI90sqIBDYsFPMXJ2aManGXmqSOw6A&oe=65C5682F"
                                    alt='ormekainsaatslider' />
                                <div className="flex absolute flex-col items-center justify-center m-10 h-full w-full">
                                    <h1 className="text-4xl text-white font-bold tracking-tight drop-shadow-lg   sm:text-6xl">
                                       Modern Konutlar ve Ticaretin Buluştuğu Nokta 
                                    </h1>
                                    <p className="mt-4 text-lg text-white drop-shadow-lg ">
                                    40 Daire ve 3,700 m2 Ticari Alan İle Tamamlanan Yeni Projemiz!
                                    </p>
                                    <a
                                        href='/projects'
                                        className="font-semibold text-white text-lg leading-6 "
                                    >
                                        Projeyi İncele <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="projects">
                <div className="bg-white">
                    <div className="pt-6">
                        <nav aria-label="Breadcrumb">
                            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                                <li className="text-sm">
                                    <a href={product.href} aria-current="page" className="font-medium text-slate-500 hover:text-slate-600">
                                        {product.name}
                                    </a>
                                </li>
                            </ol>
                        </nav>

                        {/* Image gallery */}
                        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                                <img
                                    src={product.images[0].src}
                                    alt={product.images[0].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                    <img
                                        src='https://media.discordapp.net/attachments/988883199209926710/1204068111670579311/IMG_1887.JPG?ex=65d362d0&is=65c0edd0&hm=57ab978625ad3784e92abfbbfa24091cf5d52cd92737bda91485f9d0312cca99&=&format=webp&width=721&height=541'
                                        alt={product.images[1].alt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                    <img
                                        src='https://media.discordapp.net/attachments/988883199209926710/1204068111670579311/IMG_1887.JPG?ex=65d362d0&is=65c0edd0&hm=57ab978625ad3784e92abfbbfa24091cf5d52cd92737bda91485f9d0312cca99&=&format=webp&width=721&height=541'
                                        alt={product.images[2].alt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                <img
                                    src='https://media.discordapp.net/attachments/988883199209926710/1204068111670579311/IMG_1887.JPG?ex=65d362d0&is=65c0edd0&hm=57ab978625ad3784e92abfbbfa24091cf5d52cd92737bda91485f9d0312cca99&=&format=webp&width=721&height=541'
                                    alt={product.images[3].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>

                        {/* Project info */}
                        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                            <div className="lg:col-span-2 lg:border-r lg:border-slate-200 lg:pr-8">
                                <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{product.name}</h1>
                            </div>

                            {/* Options */}
                            <div className="lg:row-span-3 lg:mt-0 mt-24 mb-24">
                                <form className="mt-10">

                                    <button
                                        type="submit"
                                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-slate-600 px-8 py-3 text-base font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                                    >
                                        Projeyi İncele
                                    </button>
                                </form>
                            </div>

                            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-slate-200 lg:pb-16 lg:pr-8 lg:pt-6">
                                {/* Description and details */}
                                <div>
                                    <h3 className="sr-only">Description</h3>

                                    <div className="space-y-6">
                                        <p className="text-base text-slate-900">{product.description}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="group">
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                            {stats.map((stat) => (
                                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                    <dt className="text-base leading-7 text-slate-600">{stat.name}</dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
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