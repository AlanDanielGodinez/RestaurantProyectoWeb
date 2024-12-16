

export default function ExpItaliano(){
    const list = [
        "Recetas italianas auténticas.",
        "Ingredientes frescos y seleccionados.",
        "Ambiente cálido y familiar.",
        "Perfecto para ocasiones especiales.",
        "Menús diseñados con pasión por nuestros chefs expertos",
        "Un rincón de Italia en cada plato, para que vivas una experiencia inolvidable."
    ]
    return(
        <div className="section expItalia">
            <div className="col img">
                    <img src="/img/gallery/img_10.jpg" alt="" />
                </div>
            <div className="col tipografia">
                <h1 className="title">Vive la Experiencia Italiana</h1>
                {list.map((item, index) => (
                    <p className="exp-item" key={index}>{item}</p>
                ))}

                {/* <p className="info">En La Dolce Vita ofrecemos lo mejor de la cocina italiana tradicional, con ingredientes frescos y auténticos. Ven a disfrutar de un ambiente cálido y sabores que te transportarán al corazón de Italia.</p> */}
                <button className="btn">Haz tu Reserva</button>
            </div>
            
        </div>
    )
}