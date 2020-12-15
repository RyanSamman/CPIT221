// React & React Router
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import CourseCard from './pages/CourseCard';
import GradeCard from './pages/GradeCard';
import RubricCards from './pages/RubricCards';
import Writing from './writing/Writing';
import Values from './pages/Values';
import Buy from './pages/Buy';
import Page404 from './pages/Page404';
import TextToSpeech from './pages/TextToSpeech';
import OurProposal from './pages/OurProposal';
import WeeklyWriting from './pages/WeeklyWriting';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  });
  const MAX_SIZE = 800;
  const cardWidth = 0.8 * width < MAX_SIZE ? 0.8 * width : MAX_SIZE;
  const padding = 0.8 * width < MAX_SIZE ? "10%" : (width - MAX_SIZE) / 2;

  return (
    <>
      <Navbar />
      <div style={{ paddingLeft: padding, paddingRight: padding }}>
        <Switch>
          <Route exact path="/">
            <Home width={cardWidth} />
          </Route>
          
          <Route path="/proposal/ours">
            <OurProposal width={cardWidth} />
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

          <Route
            exact
            path="/writing/:id"
            render={props => <Writing width={cardWidth} id={props.match.params.id} />}>
          </Route>

          <Route path="/writing">
            <WeeklyWriting width={cardWidth} />
          </Route>

          <Route path="/tts">
            <TextToSpeech width={cardWidth} />
          </Route>

          <Route>
            <Page404 />
          </Route>

        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
