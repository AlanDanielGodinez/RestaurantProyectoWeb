// src/pages/Reserva.js

import { useState } from 'react';

export default function Reserva() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        fecha: '',
        hora: '',
        personas: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reserva realizada:', formData);
        alert('Reserva realizada con éxito');
    };

    return (
        <div className="reserva-container">
            <h2>Haz tu Reserva</h2>
            <form onSubmit={handleSubmit} className="reserva-form">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fecha">Fecha </label>
                    <input
                        type="date"
                        id="fecha"
                        name="fecha"
                        value={formData.fecha}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="hora">Hora </label>
                    <input
                        type="time"
                        id="hora"
                        name="hora"
                        value={formData.hora}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="personas">Número de Personas </label>
                    <input
                        type="number"
                        id="personas"
                        name="personas"
                        value={formData.personas}
                        onChange={handleChange}
                        min="1"
                        required
                    />
                </div>
                <button type="submit" className="btn">Confirmar Reserva</button>
            </form>
        </div>
    );
}
