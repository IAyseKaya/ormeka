import galeri from "../data/fotoGaleri";
import Carousel from 'react-bootstrap/Carousel';

function fotoGaleri() {
    return (
        <div className="images flex items-center justify-center">
            <div className="w-full sm:w-1/2 flex items-center justify-center">
                <Carousel fade className="flex items-center justify-center ">
                    {
                        galeri.map((foto) =>
                            <Carousel.Item>
                                <img className='bg-stone-100 flex items-center justify-center h-[300px] sm:h-[700px] object-scale-down sm:object-cover' src={foto.image} alt={foto.imageAlt} />
                                <Carousel.Caption> </Carousel.Caption>
                            </Carousel.Item>
                        )
                    }
                </Carousel>
            </div>
        </div>
    );
}
export default fotoGaleri;