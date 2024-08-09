import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cuisines  = (props)=>{
    let cuisinesTitle = props?.cuisinesData?.header?.title;
    let cuisineCards = props.cuisinesData.imageGridCards.info;
    console.log(props);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
    };    
    return (
        <div className="res-cuisines-container">
            <h1 className="res-cuisines-container-heading">{cuisinesTitle}</h1>
            <div className="res-cuisines-cards-container">
            <Slider {...settings}>
                {
                    cuisineCards.map(card=>{
                        return (
                            <div key={card.id} className="res-cuiseines-card">
                                <a href={card.action.link} className="res-cuisines-card-link">
                                   <img alt={card.accessibility.altText} className="res-cuisines-card-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+card.imageId} /> 
                                </a>
                            </div>
                        )
                    })
                }
            </Slider>
            </div>
        </div>
    )
}

export default Cuisines;