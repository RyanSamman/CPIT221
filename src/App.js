// React & React Router
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';

// Components
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MarkdownFile from './components/MarkdownFile';

// Pages
import Buy from './pages/Buy';
import Home from './pages/Home';
import Values from './pages/Values';
import Rubric from './pages/Rubric';
import Page404 from './pages/Page404';
import Writing from './writing/Writing';
import OurProposal from './pages/OurProposal';
import TextToSpeech from './pages/TextToSpeech';
import ChosenCourse from './pages/ChosenCourse';
import WeeklyWriting from './pages/WeeklyWriting';
import ProposalGrades from './pages/ProposalGrades';

// Markdown
import Secret from './markdown/Secret.md';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  });
  const MAX_SIZE = 800;
  const cardWidth = 0.9 * width < MAX_SIZE ? 0.9 * width : MAX_SIZE;
  const padding = 0.95 * width < MAX_SIZE ? "5%" : (width - MAX_SIZE) / 2;

  return (
    <>
      <Navbar />

      <div style={{ paddingLeft: padding, paddingRight: padding }}>
        <Switch>
          <Route exact path="/">
            <Home width={cardWidth} />
          </Route>

          <Route path="/secret">
            <Helmet>
              <title>Secret Page...</title>
              <meta name="description" content="A Secret Page." />
            </Helmet>
            <MarkdownFile width={cardWidth} url={Secret}/>
          </Route>

          <Route path="/proposal/ours">
            <OurProposal width={cardWidth} />
          </Route>

          <Route path="/proposal/chosen">
            <ChosenCourse cardWidth={cardWidth} />
          </Route>

          <Route path="/proposal/grades">
            <ProposalGrades cardWidth={cardWidth} />
          </Route>

          <Route path="/proposal/rubric">
            <Rubric cardWidth={cardWidth} />
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
