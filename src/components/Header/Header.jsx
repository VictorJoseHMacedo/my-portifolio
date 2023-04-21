import github from "../../assets/img/github.svg"
import linkedin from "../../assets/img/linkedin.svg"
import logofrontend from "../../assets/img/icon-frontend-mentor.svg"
import ring from "../../assets/img/pattern-rings.svg"
import avatar from "../../assets/img/avatar.svg"

import './index.scss';

const Header = () => {
    return (
        <>
            <header className="header-menu">
                <h1 className="header-menu__name">Victor José</h1>
                <nav className="header-menu__media">
                    <a href="https://github.com/VictorJoseHMacedo" target="_blank"><img src={github} alt="simbolo de github" /></a>

                    <a href="https://www.linkedin.com/in/victor-jos%C3%A9-944647236/" target="_blank"><img src={linkedin} alt="simbolo de github" /></a>

                    <a href="https://www.frontendmentor.io/profile/VictorJoseHMacedo" target="_blank"><img src={logofrontend} alt="simbolo de github" /></a>
                </nav>
            </header>

            <section className="container">
                <div className="my-photo">
                    <img className="foto-pessoal" src={avatar} alt=""/>
                </div>
                    <img src={ring} alt="Imagem de exemplo" className="imagem-anel" />

                    <h1 className="texto">
                        Prazer em te conhecer!
                    </h1>
                    <h3 className="my-name">Me chamo Victor José!</h3>
                    <div className="about-me">
                        <p>Nasci no Brasil. Sou desenvolvedor front-end e quero me </p>
                        tornar um grande desenvolvedor conhecido por todo<br />
                        Brasil e mundo <br className="spacing-button" />
                </div>

                <a className="link-wpp" href="https://wa.me/5581998477165?text=Ol%C3%A1+Victor,+tudo+bem+?+Vim+pelo+seu+portif%C3%B3lio!" target="_blank"><h5 className="contact-text"><span className="text-about-contact">Entre em contato</span></h5></a>
            </section>
        </>
    );
};

export default Header;