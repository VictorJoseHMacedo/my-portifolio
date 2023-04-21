import './index.scss';
import imc from "../../assets/PROJETOS-PORTIFOLIO/calculador-de-imc/imc.png"
import ccxp from "../../assets/PROJETOS-PORTIFOLIO/ccxp/ccxp.png"
import games from "../../assets/PROJETOS-PORTIFOLIO/ecommerce-games/games.png"
import frontend from "../../assets/PROJETOS-PORTIFOLIO/frontendmentor.io/train.png"
import coffee from "../../assets/PROJETOS-PORTIFOLIO/project-coffee/coffee.png"
import food from "../../assets/PROJETOS-PORTIFOLIO/project-food/food.png"
import github from "../../assets/img/github.svg"
import netlify from "../../assets/img/netlify.png"

const Projects = () => {
  return (
    <>
      <h2 className='projects' > <span className='title'>Projetos</span></h2>
      <div className="projects-time">
        <ul className='projects-list'>
          <li>
            <h4 className='title-projects'>CALCULADOR DE IMC</h4>
            <img src={imc} alt="" className='img-list' />
            <div className="linguagens-lista">
              <span className="linguagens">HTML</span>
              <span className="linguagens">CSS</span>
              <span className="linguagens">JAVASCRIPT</span>
            </div>
            <div className="link-to-project">
              <a href='https://github.com/VictorJoseHMacedo/Project-IMC-Victor' target='_blank'><img src={github} alt="" className='img-projects-link'/></a>
              <a href='https://calculador-imc-victor.netlify.app/' target='_blank'><img src={netlify} alt="" className='img-projects-link'/></a>
            </div>
          </li>

          <li>
            <h4 className='title-projects'>CCXP PROJECT</h4>
            <img src={ccxp} alt="" className='img-list' />
            <div className="linguagens-lista">
              <span className="linguagens">HTML</span>
              <span className="linguagens">CSS</span>
              <span className="linguagens">JAVASCRIPT</span>
            </div>
            <div className="link-to-project">
              <a href='https://github.com/VictorJoseHMacedo/CCXP-DNC' target='_blank'><img src={github} alt="" className='img-projects-link'/></a>
              <a href='https://ccxp-dnc.netlify.app/' target='_blank'><img src={netlify} alt="" className='img-projects-link'/></a>
            </div>
          </li>

          <li>
            <h4 className='title-projects'>ECOMMERCE GAMES</h4>
            <img src={games} alt="" className='img-list' />
            <div className="linguagens-lista">
              <span className="linguagens">REACT JS</span>
            </div>
            <div className="link-to-project">
              <a href='https://github.com/VictorJoseHMacedo/Projeto-ecommerce-dnc-games' target='_blank'><img src={github} alt="" className='img-projects-link'/></a>
              <a href='https://ecommerce-games-dnc.netlify.app/' target='_blank'><img src={netlify} alt="" className='img-projects-link'/></a>
            </div>
          </li>

          <li>
            <h4 className='title-projects'>FRONTENDMENTOR.IO</h4>
            <img src={frontend} alt="" className='img-list' />
            <div className="linguagens-lista">
              <span className="linguagens">HTML</span>
              <span className="linguagens">CSS</span>
              <span className="linguagens">JAVASCRIPT</span>
            </div>
            <div className="link-to-project">
              <a href='https://github.com/VictorJoseHMacedo/treino-front-end' target='_blank'><img src={github} alt="" className='img-projects-link'/></a>
              <a href='https://app.netlify.com/sites/frontendmentorio-challenge/overview' target='_blank'><img src={netlify} alt="" className='img-projects-link'/></a>
            </div>
          </li>

          <li>
            <h4 className='title-projects'>PROJECT COFFEE</h4>
            <img src={coffee} alt="" className='img-list' />
            <div className="linguagens-lista">
              <span className="linguagens">HTML</span>
              <span className="linguagens">CSS</span>
              <span className="linguagens">JAVASCRIPT</span>
            </div>
            <div className="link-to-project">
              <a href='https://github.com/VictorJoseHMacedo/Projeto-DNC-Coffee.git' target='_blank'><img src={github} alt="" className='img-projects-link'/></a>
              <a href='https://project-coffee-dnc.netlify.app/' target='_blank'><img src={netlify} alt="" className='img-projects-link'/></a>
            </div>
          </li>

          <li>
            <h4 className='title-projects'>PROJECT FOOD</h4>
            <img src={food} alt="" className='img-list' />
            <div className="linguagens-lista">
              <span className="linguagens">HTML</span>
              <span className="linguagens">CSS</span>
              <span className="linguagens">JAVASCRIPT</span>
            </div>
            <div className="link-to-project">
              <a href='https://github.com/VictorJoseHMacedo/dnc-project-food' target='_blank'><img src={github} alt="" className='img-projects-link'/></a>
              <a href='https://project-food-dnc-website.netlify.app/' target='_blank'><img src={netlify} alt="" className='img-projects-link'/></a>
            </div>
          </li>
        </ul >

      </div>
    </>
  );
};

document.addEventListener('scroll', function (e) {
  let top  = window.scrollY + window.innerHeight;
  let isVisible = top > document.querySelector('.projects-list').offsetTop;

if (isVisible) {
 document.querySelector('.projects-list').classList.add('animate');
}
});


export default Projects;