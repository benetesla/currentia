import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__icons">
          <a href="https://www.facebook.com/benevanio.santos.7/">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/bene_tesla/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/bene-tesla/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K1127982D6">
            <i className="fas fa-user-graduate"></i>
          </a>
        </div>
        <div className="footer__container__copy">
          <p>© 2023 - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer