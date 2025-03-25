import './App.scss'
import { useParams } from 'react-router'
import Menu from './components/menu.tsx'
import splines from './components/splines.tsx'
import Spline from '@splinetool/react-spline'

const setParameters = (p1: string|undefined, p2: string|undefined) => {
  // if p2 is defined, then p1 is EN, otherwise FR is implied
  const langue = p2 ? 'en' : 'fr';
  // FR is implied, p1 is the spline ID
  const defaultSplineId = splines[langue][0].id;
  const id = p2 ? p2 : p1 ? p1 : defaultSplineId;
  const splineId = splines[langue].find((spline) => id === spline.id)?.id || defaultSplineId;
  return splineId;
};

function App() {

  let { p1, p2 } = useParams();
  const splineId = setParameters(p1, p2);
  return (
    <>
      <Menu current={splineId} />
      <div className='spline-container'>
        <Spline scene={ `https://prod.spline.design/${splineId}/scene.splinecode` } />
      </div>
    </>
  )
}

export default App
