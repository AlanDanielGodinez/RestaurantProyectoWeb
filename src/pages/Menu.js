import { useEffect } from "react";
import "../styles/partials/_menu.scss"; // Importa el archivo SCSS de estilos

export default function Menu() {
    const menuItems = [
        {
            category: "Entradas",
            items: [
                { name: "Bruschetta", description: "Pan tostado con tomate fresco y albahaca", price: "$45.00", image: "/img/gallery-menu/bruschetta.jpg" },
                { name: "Pizza Margarita", description: "Pizza con tomate, mozzarella y albahaca", price: "$75.00", image: "/img/gallery-menu/pizza.jpg" },
                { name: "Caprese Salad", description: "Ensalada de tomate, mozzarella y albahaca", price: "$60.00", image: "/img/gallery-menu/caprese.jpg" },
                { name: "Pan de Ajo", description: "Pan crujiente con mantequilla de ajo", price: "$40.00", image: "/img/gallery-menu/pan-ajo.jpg" },
                { name: "Calamares Fritos", description: "Calamares con salsa tártara", price: "$90.00", image: "/img/gallery-menu/calamares.jpg" },
            ],
        },
        {
            category: "Platos Fuertes",
            items: [
                { name: "Lasaña", description: "Lasaña de carne con salsa bechamel", price: "$140.00", image: "/img/gallery-menu/lasagna.jpg" },
                { name: "Risotto", description: "Risotto con hongos porcini", price: "$150.00", image: "/img/gallery-menu/risotto.jpg" },
                { name: "Pollo Parmesano", description: "Pechuga empanizada con queso parmesano", price: "$155.00", image: "/img/gallery-menu/pollo.jpg" },
                { name: "Salmón a la Plancha", description: "Salmón con espárragos frescos", price: "$200.00", image: "/img/gallery-menu/salmon.jpg" },
                { name: "Filete Mignon", description: "Filete de res con puré de papa", price: "$250.00", image: "/img/gallery-menu/mignon.jpg" },
            ],
        },
        {
            category: "Postres",
            items: [
                { name: "Tiramisú", description: "Postre italiano con capas de café y mascarpone", price: "$85.00", image: "/img/gallery-menu/tiramisu.jpg" },
                { name: "Panna Cotta", description: "Flan cremoso con frutos rojos", price: "$80.00", image: "/img/gallery-menu/panna-cotta.jpg" },
                { name: "Cheesecake", description: "Pay de queso con base de galleta", price: "$90.00", image: "/img/gallery-menu/cheesecake.jpg" },
                { name: "Helado Artesanal", description: "Helado con sabores naturales", price: "$70.00", image: "/img/gallery-menu/helado.jpg" },
                { name: "Brownie con Helado", description: "Brownie de chocolate con helado de vainilla", price: "$95.00", image: "/img/gallery-menu/brownie.jpg" },
            ],
        },
        {
            category: "Bebidas",
            items: [
                { name: "Limonada", description: "Fresca y natural", price: "$30.00", image: "/img/gallery-menu/limonada.jpg" },
                { name: "Té Helado", description: "Té con limón y menta", price: "$35.00", image: "/img/gallery-menu/te.jpg" },
                { name: "Café Espresso", description: "Café fuerte y aromático", price: "$40.00", image: "/img/gallery-menu/espresso.jpg" },
                { name: "Jugo Natural", description: "De naranja o zanahoria", price: "$35.00", image: "/img/gallery-menu/jugo.jpg" },
                { name: "Agua Mineral", description: "Botella de agua con gas", price: "$25.00", image: "/img/gallery-menu/agua.jpg" },
            ],
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const sections = document.querySelectorAll(".menu-section");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="menu-container">
            <h1>Menú</h1>
            {menuItems.map((section, index) => (
                <div key={index} className="menu-section">
                    <h2>{section.category}</h2>
                    <ul>
                        {section.items.map((item, idx) => (
                            <li key={idx} className="menu-item">
                                <img src={item.image} alt={item.name} className="menu-image" />
                                <div className="menu-details">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <span className="menu-price">{item.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
