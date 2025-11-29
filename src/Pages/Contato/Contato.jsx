// ...existing code...
import React, { useState } from 'react';

const ContactForm = () => {
    const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log('Enviando contato:', form);
        alert('Mensagem enviada. Obrigado!');
        setForm({ nome: '', email: '', mensagem: '' });
    };

    return (
        <form onSubmit={handleSubmit} style={{maxWidth: '400px', margin: '20px auto', padding: '30px', backgroundColor: 'var(--color-background-light)', borderRadius: '8px', textAlign: 'left', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}}>
            <label htmlFor="nome" style={{display: 'block', marginBottom: '5px', fontWeight: '500', color: 'var(--color-secondary)'}}>Nome:</label>
            <input id="nome" name="nome" value={form.nome} onChange={handleChange} type="text" required style={{width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ddd'}} autoComplete="name" />

            <label htmlFor="email" style={{display: 'block', marginBottom: '5px', fontWeight: '500', color: 'var(--color-secondary)'}}>Email:</label>
            <input id="email" name="email" value={form.email} onChange={handleChange} type="email" required style={{width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ddd'}} autoComplete="email" />
            
            <label htmlFor="mensagem" style={{display: 'block', marginBottom: '5px', fontWeight: '500', color: 'var(--color-secondary)'}}>Mensagem:</label>
            <textarea id="mensagem" name="mensagem" value={form.mensagem} onChange={handleChange} rows="4" required style={{width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ddd'}}></textarea>
            
            <button type="submit" style={{backgroundColor: 'var(--color-primary)', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%', fontSize: '1rem', transition: 'background-color 0.3s'}}>
              Enviar Mensagem
            </button>
        </form>
    );
};

const Contato = () => {
  return (
    <div className="page-wrapper">
      <h2 style={{color: 'var(--color-primary)', margin: '2rem 0'}}>📞 Fale Conosco</h2>
      <p style={{marginBottom: '1rem', color: 'var(--color-secondary)'}}>Para dúvidas ou sugestões, utilize o formulário abaixo.</p>
      <ContactForm />
    </div>
  );
};

export default Contato;
// ...existing code...