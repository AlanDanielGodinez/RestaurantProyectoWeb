
import Imagencustom from "./ImagenCustom"

export default  function Landing(){
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg"
    ]
    return (
        <div className="section landing">
            <div className="col tipografia">
                <h1 className="title">Welcome to La Dolce Vita</h1>
                <p className="info">En La Dolce Vita te invitamos a disfrutar de una experiencia única donde los sabores, la tradición y la pasión italiana se unen para hacer de cada bocado un momento inolvidable</p>
                {/* <p className="info">En La Dolce Vita ofrecemos lo mejor de la cocina italiana tradicional, con ingredientes frescos y auténticos. Ven a disfrutar de un ambiente cálido y sabores que te transportarán al corazón de Italia.</p> */}
                <button className="btn">Explorar Menú</button>
            </div>
            <div className="col galleria">
                {images.map((src, index) => (
                    
                 <Imagencustom key={index} ImgSrc={src} pt={"90%"} />
                 
                ))}
                
            </div>
        </div>
    )
}