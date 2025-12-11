function Contato() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Fale Conosco</h1>
      <p>Estamos à disposição para tirar suas dúvidas.</p>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          marginTop: '2rem',
          fontSize: '1.1rem',
        }}
      >
        <li style={{ marginBottom: '1rem' }}>
          <strong>✉️ Email:</strong> contato@techstore.com
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>📞 Telefone:</strong> (11) 99999-9999
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>📍 Endereço:</strong> Rua da Tecnologia, 123 - São Paulo
        </li>
      </ul>
    </div>
  );
}

export default Contato;
