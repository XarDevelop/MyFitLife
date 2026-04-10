const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#1a1a1a', 
      color: 'white', 
      padding: '20px', 
      textAlign: 'center' ,
      marginTop: '30px'
    }}>
      <div style={{ marginBottom: '15px' }}>
        <h4>Contactos:</h4>
        <p>Wattsap:</p><strong>+53 51366196</strong>
        <p>faceboock:</p><strong>Fran Lopez</strong>
        <p>Instagram:</p><strong>Xar Developer</strong>
        <p>Github:</p><strong>XarDevelop</strong>
      </div>
      
      <p style={{ margin: 0, fontSize: '14px' }}>
        © 2026 Mi Empresa. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;