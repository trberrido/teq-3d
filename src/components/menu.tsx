import { useState } from 'react'
import { useParams } from 'react-router'
import splines from './splines.tsx'
import { Link } from 'react-router'

import './menu.scss'

const SplineItem = ({ name, langue, id, closeMenu }: { name:string, langue:string, id: string, closeMenu: () => void }) => {

	const href = `${langue === 'fr' ? '/' : '/en/'}${id}`;

	return (
		<li className='menu-splines__item'><Link onClick={closeMenu} className='menu-splines__link' to={ href }>{ name }</Link></li>
	)

}

const CreditsFR = () => (
<p className='menu__credits'>
	Ce projet a été développé par l’équipe <a href="https://vulgarisation.fr/" target="_blank">“La Physique Autrement”</a> (Université Paris-Saclay, CNRS) grâce au soutien de Quantum-Saclay.<br/><br/>
	Il a également bénéficié du soutien de la Chaire « La Physique Autrement » portée par la Fondation Paris-Saclay et soutenue par le groupe Air Liquide et le Credit Agricole-CIB.<br/><br/>
	Design graphique et numérique : <a target="_blank" href="https://dafox.co">da fox</a> / Contenu scientifique : Julien Bobroff.<br/><br/>

	Retrouvez d'autres projets de vulgarisation de la physique sur <a target="_blank" href="https://www.vulgarisation.fr">www.vulgarisation.fr</a> et d'autres animations quantiques sur <a href="https://toutestquantique.fr" target="_blank">toutestquantique.fr</a>
</p>
);

const CreditsEN = () => (
<p className='menu__credits'>
	This project was developed by the <a href="https://vulgarisation.fr/en" target="_blank">"Physics Reimagined"</a> team (Université Paris-Saclay, CNRS) with support from Quantum-Saclay.<br/><br/>
	It also benefited from the "Physics Reimagined" Chair, run by the Paris-Saclay Foundation and supported by the Air Liquide Group and Crédit Agricole-CIB.<br/><br/>
	Graphic and digital design: <a target="_blank" href="https://dafox.co/en">da fox</a> / Scientific content: Julien Bobroff.<br/><br/>

	Find other outreach physics projects at <a target="_blank" href="https://www.vulgarisation.fr/en">www.vulgarisation.fr</a> and other quantum animations at <a href="https://toutestquantique.fr/en" target="_blank">toutestquantique.fr</a>
</p>
);


const Menu = ({current}: {current: string}) => {
	let { p1, p2 } = useParams();
	const langue = p2 || p1 === 'en' ? 'en' : 'fr';

	const [isOpen, setIsOpen] = useState(true);

	const closeMenu = () => setIsOpen(false);

  return (
	<nav className="nav">
		<ul className="menu-langue">
			<li className='menu-langue__item'>
				<Link className={'menu-langue__link menu-langue__link--left menu-langue__link' + (langue === 'fr' ? '--active' : '--inactive')} to={`/${current}`}>
					FR
				</Link>
			</li>
			<li className='menu-langue__item'>
				<Link className={'menu-langue__link menu-langue__link--right menu-langue__link' + (langue === 'en' ? '--active' : '--inactive')} to={`/en/${current}`}>
					EN
				</Link>
			</li>
		</ul>
		<div className={'menu__container menu__container' + (isOpen ? '--open' : '--closed')}>
			<button className='menu-button' onClick={() => setIsOpen(!isOpen)}>Menu</button>

			<div className='menu__layout'>
				<ul className='menu-splines'>{
					splines[langue].map((spline) => <SplineItem key={spline.id} closeMenu={closeMenu} name={spline.name} langue={langue} id={spline.id} />)
				}</ul>
				{ langue === 'fr' ? <CreditsFR /> : <CreditsEN /> }
			</div>
		</div>
	</nav>
  );
};

export default Menu;