// ...existing code...
import React from 'react';

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

// descontos alinhados com os destinos (em ordem)
const discounts = ['30%','20%','15%'];

const styles = {
    page: { padding: '48px 16px', fontFamily: 'Inter, system-ui, sans-serif', color: '#1f2937' },
    header: { textAlign: 'center', marginBottom: 20 },
    title: { margin: 0, fontSize: 28, letterSpacing: 0.6 },
    subtitle: { margin: 0, color: '#6b7280' },
    grid: { maxWidth: 1100, margin: '24px auto 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 },
    card: { background: '#fff', borderRadius: 14, padding: 18, boxShadow: '0 8px 30px rgba(15,23,42,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 },
    thumb: { width: 100, height: 100, borderRadius: 999, overflow: 'hidden', border: '6px solid #f3f4f6' },
    img: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
    titleCard: { margin: 0, fontSize: 16, fontWeight: 700, textAlign: 'center' },
    locationSmall: { margin: '6px 0 0', color: '#9ca3af', fontSize: 13, textAlign: 'center' },
    discountBadge: { background: 'linear-gradient(90deg,#ff8a00,#ff5e62)', color: '#fff', padding: '8px 14px', borderRadius: 999, fontWeight: 800, fontSize: 18 },
    priceRow: { display: 'flex', gap: 10, alignItems: 'center', marginTop: 10 },
    originalPrice: { color: '#9ca3af', textDecoration: 'line-through' },
    finalPrice: { color: '#111827', fontWeight: 700 },
    cta: { marginTop: 12 },
    button: { background: 'linear-gradient(90deg,#6f46ff,#a86bff)', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: 999, cursor: 'pointer', fontWeight: 700 }
};

function OfferCard({ item, discount }) {
    // converte "30%" -> 0.30
    const pct = parseFloat(discount.replace('%','')) / 100;
    const discounted = Math.round(item.price * (1 - pct));
    return (
        <article style={styles.card} aria-labelledby={`offer-${item.id}-title`}>
            <div style={styles.thumb}>
                <img src={item.img} alt={item.title} style={styles.img} />
            </div>

            <div style={{ width: '100%' }}>
                <h3 id={`offer-${item.id}-title`} style={styles.titleCard}>{item.title.toUpperCase()}</h3>
                <p style={styles.locationSmall}>{item.location}</p>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
                    <span style={styles.discountBadge}>{discount} OFF</span>
                </div>

                <div style={styles.priceRow}>
                    <span style={styles.originalPrice}>R$ {item.price}</span>
                    <span style={styles.finalPrice}>R$ {discounted}</span>
                </div>

                <p style={{ color: '#475569', marginTop: 10, fontSize: 14 }}>{item.desc}</p>

                <div style={styles.cta}>
                    <button style={styles.button} aria-label={`Ver oferta ${item.title}`}>VER OFERTA</button>
                </div>
            </div>
        </article>
    );
}

const Ofertas = () => {
    const ofertas = destinations.map((d, i) => ({ ...d, discount: discounts[i] || '10%' }));

    return (
        <main style={styles.page}>
            <header style={styles.header}>
                <h2 style={styles.title}>OFERTAS EXCLUSIVAS</h2>
                <p style={styles.subtitle}>Planeje sua próxima aventura e economize!</p>
            </header>

            <section style={styles.grid} aria-label="Lista de ofertas">
                {ofertas.map(o => <OfferCard key={o.id} item={o} discount={o.discount} />)}
            </section>

            <p style={{ textAlign: 'center', color: '#94a3b8', marginTop: 28, fontSize: 13 }}>© Roteiro Mágico 2025. Todos os direitos reservados.</p>
        </main>
    );
};

export default Ofertas;
// ...existing code...