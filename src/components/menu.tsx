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

const Menu = ({current}: {current: string}) => {
	let { p1, p2 } = useParams();
	const langue = p2 || p1 === 'en' ? 'en' : 'fr';

	const [isOpen, setIsOpen] = useState(false);

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
			<ul className='menu-splines'>{
				splines[langue].map((spline) => <SplineItem key={spline.id} closeMenu={closeMenu} name={spline.name} langue={langue} id={spline.id} />)
			}</ul>
		</div>
	</nav>
  );
};

export default Menu;