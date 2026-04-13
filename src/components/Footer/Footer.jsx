import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-nutricion">
      <p>MyFitLife - Sigue con nosotros para un mejor desarrollo de tu cuerpo</p>
      <p>Información educativa. Consulta siempre a un profesional de la salud.</p>
      <div className="footer-content">
        <h4>📞 Contactos</h4>
        <div className="contactos-grid">
          <div className="contacto-item">
            <span className="contacto-label">WhatsApp:</span>
            <strong>+53 51366196</strong>
          </div>
          <div className="contacto-item">
            <span className="contacto-label">Facebook:</span>
            <strong>Fran Lopez</strong>
          </div>
          <div className="contacto-item">
            <span className="contacto-label">Instagram:</span>
            <strong>Xar Developer</strong>
          </div>
          <div className="contacto-item">
            <span className="contacto-label">GitHub:</span>
            <strong>XarDevelop</strong>
          </div>
        </div>
      </div>
      
      <div className="footer-copy">
        <p>© 2026 Mi Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;