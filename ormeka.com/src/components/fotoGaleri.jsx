import galeri from "../data/fotoGaleri";
import Carousel from 'react-bootstrap/Carousel';

function fotoGaleri() {
    return (
        <div className="images flex items-center justify-center">
            <div className="w-1/2">
                <Carousel fade className="flex items-center justify-center">
                    {
                        galeri.map((foto) =>
                            <Carousel.Item>
                                <img className='bg-stone-900 ' src={foto.image} alt={foto.imageAlt} />
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