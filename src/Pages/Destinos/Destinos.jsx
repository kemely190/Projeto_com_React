// ...existing code...
import React, { useState } from 'react';

const destinations = [
    {
        id: 1,
        title: "Machu Picchu, Peru",
        price: 2800,
        location: "Cusco, Peru",
        img: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=1200&q=80",
        desc: "Explore as ruínas incas e trilhas históricas. Pacotes com guia disponíveis."
    },
    {
        id: 2,
        title: "Fiordes Noruegueses",
        price: 4100,
        location: "Noruega",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
        desc: "Cruzeiros panorâmicos entre montanhas e lagos glaciares."
    },
    {
        id: 3,
        title: "Cairo, Egito",
        price: 3500,
        location: "Egito",
        img: "https://www.civitatis.com/blog/wp-content/uploads/2025/01/que-ver-cairo-egipto.jpg",
        desc: "Visite as pirâmides, museus e mercados históricos."
    }
];

const cardStyle = {
    width: 320,
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
    background: 'white',
    display: 'flex',
    flexDirection: 'column'
};

const imageWrapStyle = {
    height: 180,
    overflow: 'hidden',
    background: '#f3f3f3'
};

const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
};

const contentStyle = {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: 1
};

const priceBadge = {
    background: 'linear-gradient(90deg,#7b61ff,#a86bff)',
    color: '#fff',
    padding: '6px 10px',
    borderRadius: 999,
    fontWeight: 600,
    fontSize: 14
};

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: 20,
    width: '100%',
    maxWidth: 1100,
    margin: '0 auto'
};

const overlayStyle = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
};

const modalStyle = {
    width: 'min(720px, 95%)',
    background: '#fff',
    borderRadius: 10,
    padding: 20,
    boxShadow: '0 10px 40px rgba(0,0,0,0.25)'
};

function Modal({ item, onClose }) {
    if (!item) return null;
    return (
        <div style={overlayStyle} onClick={onClose}>
            <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <img src={item.img} alt={item.title} style={{ width: 220, height: 140, objectFit: 'cover', borderRadius: 8 }} />
                    <div style={{ flex: 1 }}>
                        <h3 style={{ margin: 0 }}>{item.title}</h3>
                        <p style={{ margin: '6px 0', color: '#666' }}>{item.location}</p>
                        <p style={{ marginTop: 8 }}>{item.desc}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                <span style={priceBadge}>A partir de R$ {item.price}</span>
                            </div>
                            <div>
                                <button onClick={onClose} style={{ marginRight: 8, padding: '8px 12px', borderRadius: 6, border: '1px solid #ccc', background: '#fff', cursor: 'pointer' }}>Fechar</button>
                                <button style={{ padding: '8px 12px', borderRadius: 6, border: 'none', background: '#6f46ff', color: '#fff', cursor: 'pointer' }}>Reservar Agora</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Destinos = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div style={{ padding: '40px 16px', fontFamily: 'Inter, system-ui, sans-serif' }}>
            <header style={{ textAlign: 'center', marginBottom: 28 }}>
                <h2 style={{ margin: 0, fontSize: 34, color: '#1f2d3d' }}>Explore o Mundo</h2>
                <p style={{ marginTop: 8, color: '#506176' }}>Sua jornada começa aqui — descubra pacotes, preços e detalhes.</p>
            </header>

            <div style={gridStyle}>
                {destinations.map(d => (
                    <article key={d.id} style={cardStyle}>
                        <div style={imageWrapStyle}>
                            <img src={d.img} alt={d.title} style={imgStyle} />
                        </div>
                        <div style={contentStyle}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h4 style={{ margin: 0 }}>{d.title}</h4>
                                    <small style={{ color: '#667085' }}>{d.location}</small>
                                </div>
                                <div style={priceBadge}>R$ {d.price}</div>
                            </div>

                            <p style={{ color: '#475569', marginTop: 8, flex: 1 }}>{d.desc}</p>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                                <button onClick={() => setSelected(d)} style={{ padding: '8px 12px', borderRadius: 8, border: 'none', background: '#6f46ff', color: '#fff', cursor: 'pointer' }}>
                                    Ver detalhes
                                </button>
                                <button style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #e6e9ef', background: '#fff', cursor: 'pointer' }}>
                                    Favoritar
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <Modal item={selected} onClose={() => setSelected(null)} />
        </div>
    );
};

export default Destinos;
// ...existing code...