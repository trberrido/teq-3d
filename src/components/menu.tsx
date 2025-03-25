import { useParams } from 'react-router'
import splines from './splines.tsx'
import { Link } from 'react-router'

import './menu.scss'

const SplineItem = ({ name, langue, id }: { name:string, langue:string, id: string }) => {

	const href = `${langue === 'fr' ? '/' : '/en/'}${id}`;

	return (
		<li className='menu-splines__item'><Link className='menu-splines__link' to={ href }>{ name }</Link></li>
	)

}

const Menu = () => {
	let { p1, p2 } = useParams();
	const langue = p2 || p1 === 'en' ? 'en' : 'fr';

  return (
	<nav className="nav">
		<ul className="menu-langue">
			<li className='menu-langue__item'><Link className='menu-lang__link' to="/">FR</Link></li>
			<li className='menu-langue__item'><Link className='menu-lang__link' to="/en">EN</Link></li>
		</ul>
	  <button className='menu-button'>Menu</button>
	  <ul className='menu-splines'>{
		splines[langue].map((spline) => <SplineItem key={spline.id} name={spline.name} langue={langue} id={spline.id} />)
	  }</ul>
	</nav>
  );
};

export default Menu;