import React from "react";

function contact() {

    return (
        <div className="contact flex flex-col justify-center items-center ">
            <div className="nav h-20 bg-stone-100"></div>

            <div className="contact grid  px-4 py-6  sm:grid sm:grid-cols-1 lg:grid-cols-2 sm:gap-8 sm:px-0 w-3/5 flex justify-center items-start">
                <div className='info mt-20 mb-20'>
                    <div className="px-4 sm:px-0">
                    <h1 className="pt-6 text-3xl font-semibold leading-7 text-stone-900">İletişim Bilgilerimiz</h1>
                        <p className="mt-1 max-w-2xl text-lg leading-6 text-stone-500"> Bizimle Bağlantı Kurun!</p>
                    </div>
                    <div className="mt-6 ">
                        <dl className="divide-y divide-stone-100">
                            <div className="px-4  sm:px-0">
                                <dd className="mt-1 text-lg leading-6 text-stone-700 sm:col-span-2 sm:mt-0">Sizlerle daha yakından iletişim kurmak ve ihtiyaçlarınıza en iyi şekilde yanıt vermek için buradayız. Her türlü soru, görüş veya öneri için bize ulaşmaktan çekinmeyin. Orset İnşaat olarak, sizinle tanışmak ve projelerimiz hakkında bilgi alışverişinde bulunmak için sabırsızlanıyoruz.
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-lg font-medium leading-6 text-stone-900">Adresimiz</dt>
                                <dd className="mt-1 text-lg leading-6 text-stone-700 sm:col-span-2 sm:mt-0">Battalgazi Mah. 1036. Sk. No:2/a
                                    Altındağ / Ankara</dd>
                            </div>
                            <div className="px-4 py-6 grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-lg font-medium leading-6 text-stone-900">Bizi Arayın</dt>
                                <dd className="mt-1 text-lg leading-6 text-stone-700 sm:col-span-2 sm:mt-0">0312 348 04 29</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-lg font-medium leading-6 text-stone-900">Bize Yazın</dt>
                                <dd className="mt-1 text-lg leading-6 text-stone-700 sm:col-span-2 sm:mt-0">ormekayapi@gmail.com</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dd className="mt-1 text-lg leading-6 text-stone-700 sm:col-span-2 sm:mt-0">
                                    Herhangi bir konuda yardıma ihtiyacınız olursa, aşağıdaki iletişim formunu doldurarak bize ulaşabilirsiniz. Size en kısa sürede geri dönüş yapacak, sorularınıza cevap verecek ve taleplerinizi değerlendireceğiz.
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dd className="mt-1 text-lg leading-6 text-stone-700 sm:col-span-2 sm:mt-0">
                                    Bizimle iletişime geçtiğiniz için teşekkür ederiz.
                                </dd>
                            </div>
                        </dl>

                    </div>
                </div>

                <div className="form mt-20 mb-20  border-r-stone-900 border-">
                    <div className="px-4 py-6 ">
                        <form>
                            <div className="space-y-12">
                                <div className=" pb-12">
                                    <div className="px-0 sm:px-0">
                                        <h3 className="text-xl font-semibold leading-7 text-stone-900">
                                            Sizinle İletişime Geçelim
                                        </h3>
                                        <p className="mt-1 max-w-2xl text-lg leading-6 text-stone-500">
                                            Her bir adımınızda yanınızda olmak ve en iyi çözümleri sunmak için buradayız.
                                        </p>
                                    </div>
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-lg font-medium leading-6 text-stone-900">
                                                Adınız
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="block caret-amber-500 w-full rounded-md border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-lg sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3 ">
                                            <label htmlFor="last-name" className="block text-lg font-medium leading-6 text-stone-900">
                                                Soyadınız
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="block w-full rounded-md border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-lg sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-full ">
                                            <label htmlFor="email" className="block text-lg font-medium leading-6 text-stone-900">
                                                Email adresiniz
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="block w-full rounded-md border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-lg sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-full ">
                                            <label htmlFor="phone" className="block text-lg font-medium leading-6 text-stone-900">
                                                Telefon
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    type="phone"
                                                    autoComplete="phone"
                                                    className="block w-full rounded-md border-0 py-1.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-lg sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-full">
                                            <label htmlFor="message" className="block text-lg font-medium leading-6 text-gray-900">
                                                Mesajınız
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={3}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
                                                    defaultValue={''}
                                                />
                                            </div>
                                            <p className="mt-3 text-lg leading-6 text-gray-600">Sorularınızı bekliyoruz! En kısa sürede size dönüş yapmaktan memnuniyet duyarız.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center  justify-end">
                                <button
                                    type="submit"
                                    className="rounded-md col-span-full px-6 py-2 shadow-sm text-base font-medium 
                                    border-4 border-amber-400 bg-stone-700 text-white
                                    hover:bg-amber-400 hover:text-slate-900"
                                >
                                    İletişim Bilgilerini İlet
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="map h-[500px] w-3/5 mb-20 bg-stone-100">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12233.412670716589!2d32.9014837278704!3d39.95585599440071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sERE%C4%9EL%C4%B0%20CADDDES%C4%B0%20NO%3A54%20KAYA%20PLAZA%20ALTINDA%C4%9E%20ANKARA%20!5e0!3m2!1str!2sus!4v1707225736674!5m2!1str!2sus"
                    width="100%"
                    height="500"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}
export default contact;