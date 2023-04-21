import './index.scss';
import ring from "../../assets/img/pattern-rings.svg"
import github from "../../assets/img/github.svg"
import linkedin from "../../assets/img/linkedin.svg"
import logofrontend from "../../assets/img/icon-frontend-mentor.svg"


const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className="texts-footer">
          <h2 className="title-footer">Contato</h2>
          <h5 className="aboutme-footer"><p>Gostaria muito de saber sobre o seu projeto
            e gostaria de te ajudar. Preencha o formulário ao lado,
            e vou te retornar o mais rápido</p></h5>
          <img src={ring} alt="Imagem de exemplo" className="img-anel-skills-footer" />
        </div>
        <div className="form">
          <form className='form-inputs'  action="https://formsubmit.co/bitojose8@gmail.com" method="POST">
            <div className="name">
              <input type="text" placeholder="Nome" name="name" className="name-input" />
            </div>
            <div className="email">
              <input type="email" placeholder="E-mail" name="email" className="name-input" />
            </div>
            <div className="mensagem">
              <textarea type="text" placeholder="Mensagem" name="mensage" className="name-input" />
            </div>
            <button className='link-to-wpp-footer'>Enviar</button>
          </form>
        </div>
      </footer>
    </>
  )
}

export default Footer