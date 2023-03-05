import React from 'react';
import Slider from "react-slick";
import testimonio1 from "../../assets/images/testimonio1.jpg";
import testimonio2 from "../../assets/images/testimonio2.jpg";
import testimonio3 from "../../assets/images/testimonio3.jpg";
import testimonio4 from "../../assets/images/testimonio4.jpg";

const Testimonial = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ]


    }

  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>"Excelente experiencia, el hotel es desde el punto de vista arquitectura y decoración muy bonito, 
            super acogedor. Las tiendas africanas espectaculares. El trato exquisito, la cocina buenísima! 
            Y los tratamientos del spa muy buenos también. Lo dicho que de nuevo son los mejores 
            recomendando experiencias!!!!"</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={testimonio1} className='w-25 h-25 rounded-2' alt='' />
            <div>
                <h6 className='mb-0 mt-3'>Carolina Perez</h6>
                <p>Cliente</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>"Acabamos de volver de un viaje a Japón que nos organizó "Viajando" y ha resultado inolvidable. 
            La ruta estuvo muy bien diseñada y todas las ciudades y pueblos que visitamos valían realmente 
            la pena. Muy buena selección de hoteles y alojamientos tradicionales. La 
            información aportada antes del viaje fue muy útil".</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={testimonio2} className='w-25 h-25 rounded-2' alt='' />
            <div>
                <h6 className='mb-0 mt-3'>Diego Peralta</h6>
                <p>Cliente</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>"Encantados con "Viajando", nuestra luna de miel ha sido increíble, Toscana y Roma espectacular... 
            gracias por un viaje inolvidable, un servicio de 10 en todos los sentidos, recomendable 100%. 
            Sin duda volveremos a contratar sus servicios!!! Gracias María, Raquel y Jorge son un equipo 
            extraordinario!!!"</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={testimonio3} className='w-25 h-25 rounded-2' alt='' />
            <div>
                <h6 className='mb-0 mt-3'>Noelia Diaz</h6>
                <p>Cliente</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>"Contratamos con ellos un viaje de 5 días a Paris, mi pareja y yo .... Aunque ya teníamos 
            pensado que cosas visitar, todas las rutas ha seguir cada día que nos organizaron para ver 
            todo Paris en esos 5 días y no quedarnos nada sin ver fue perfecto... sacamos todas las entradas 
            desde la agencia"</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={testimonio4} className='w-25 h-25 rounded-2' alt='' />
            <div>
                <h6 className='mb-0 mt-3'>Pedro Gutierrez</h6>
                <p>Cliente</p>
            </div>
        </div>
    </div>
  </Slider>
}

export default Testimonial