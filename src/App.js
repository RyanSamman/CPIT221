import { Route, Switch } from 'react-router';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CourseCard from './pages/CourseCard';
import GradeCard from './pages/GradeCard';
import RubricCards from './pages/RubricCards';
import Writing from './pages/Writing';
import Values from './pages/Values';
import Buy from './pages/Buy';


function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  });

  const cardWidth = 0.8 * width < 800 ? 0.8 * width : "700px";

  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home width={cardWidth} />
        </Route>

        <Route path="/proposal/chosen">
          <CourseCard cardWidth={cardWidth} />
        </Route>

        <Route path="/proposal/grades">
          <GradeCard cardWidth={cardWidth} />
        </Route>

        <Route path="/proposal/rubric">
          <RubricCards cardWidth={cardWidth} />
        </Route>

        <Route path="/values">
          <Values width={cardWidth} />
        </Route>

        <Route path="/buy">
          <Buy width={cardWidth} />
        </Route>

        <Route path="/writing">
          <Writing width={cardWidth} />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
