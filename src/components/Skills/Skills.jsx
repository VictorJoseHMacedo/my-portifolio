import './index.scss';
import css from "../../assets/img/img-skills/css.svg";
import html from "../../assets/img/img-skills/html.svg";
import js from "../../assets/img/img-skills/js.svg";
import sass from "../../assets/img/img-skills/sass.svg";
import react from "../../assets/img/img-skills/react2.svg";
import phone from "../../assets/img/img-skills/phone.png";
import ring from "../../assets/img/pattern-rings.svg"

const Skills = () => {
    return (
        <>
        <h2 className='title-skills' > <span className='title'>Tecnologias</span></h2>
        <div className="skills-time">
        <ul className='skills-list'>
            <li>
                <img src={html} alt="" className='skills-img'/>
                <h3>HTML</h3>
            </li>

            <li>
                <img src={css} alt="" className='skills-img'/>
                <h3>CSS</h3>
            </li>

            <li>
                <img src={js} alt="" className='skills-img'/>
                <h3>Java Script</h3>
            </li>

            <li>
                <img src={react} alt="" className='skills-img'/>
                <h3>React JS</h3>
            </li>

            <li>
                <img src={sass} alt="" className='skills-img'/>
                <h3>SASS</h3>
            </li>

            <li>
                <img src={phone} alt="" className='skills-img'/>
                <h3>Responsividade</h3>
            </li>
            <img src={ring} alt="Imagem de exemplo" className="img-anel-skills" />
        </ul >

        </div>
        </>
    );
};

document.addEventListener('scroll', function (e) {
    let top  = window.scrollY + window.innerHeight;
    let isVisible = top > document.querySelector('.skills-list').offsetTop;

 if (isVisible) {
   document.querySelector('.skills-list').classList.add('animate');
 }
});

export default Skills;