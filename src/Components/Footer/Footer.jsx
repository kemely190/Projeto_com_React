import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  // Se tiver na página principal (root '/'), não renderiza o Footer.
  if (location && location.pathname === '/') return null;

  return (
    <footer className="footer">
      <p className="copyright">&copy; {new Date().getFullYear()} ConnectFlight. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;