import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "Juan Carlos",
            img: "/img/top-chiefs/img_1.jpg",
            experiencia: "10 Años",
            especialidad: "pasta",
        },
        {
            name: "Mario Rossi",
            img: "/img/top-chiefs/img_2.jpg",
            experiencia: "05 Años",
            especialidad: "postres",
        },
        {
            name: "Luis Bianchi",
            img: "/img/top-chiefs/img_3.jpg",
            experiencia: "13 Años",
            especialidad: "pizza",
        },
        {
            name: "Chris Moretti",
            img: "/img/top-chiefs/img_4.jpg",
            experiencia: "08 Años",
            especialidad: "Entradas"
        },
        {
            name: "Francesca Bellini",
            img: "/img/top-chiefs/img_5.jpg",
            experiencia: "09 Años",
            especialidad: "Salsas"
        },
        {
            name: "Antonio Ricci",
            img: "/img/top-chiefs/img_6.jpg",
            experiencia: "04 Años",
            especialidad: "Risottos"
        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}