// React & React Router
import { useEffect, useState, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';

// Components
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MarkdownFile from './components/MarkdownFile';
import Skeleton from 'react-loading-skeleton';
import ErrorBoundry from './components/ErrorBoundry';

// Markdown
import Secret from './markdown/Secret.md';
import IssuesMarkdown from './markdown/Issues.md';

// Pages
const Buy = lazy(() => import('./pages/Buy'));
const Home = lazy(() => import('./pages/Home'));
const Values = lazy(() => import('./pages/Values'));
const Rubric = lazy(() => import('./pages/Rubric'));
const Page404 = lazy(() => import('./pages/Page404'));
const Writing = lazy(() => import('./writing/Writing'));
const OurProposal = lazy(() => import('./pages/OurProposal'));
const TextToSpeech = lazy(() => import('./pages/TextToSpeech'));
const ChosenCourse = lazy(() => import('./pages/ChosenCourse'));
const WeeklyWriting = lazy(() => import('./pages/WeeklyWriting'));
const ProposalGrades = lazy(() => import('./pages/ProposalGrades'));

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
        {/* // Error Boundries - https://reactjs.org/docs/error-boundaries.html */}
        <ErrorBoundry>
          {/* Code Splitting - https://reactjs.org/docs/code-splitting.html */}
          
            <div style={{ paddingLeft: padding, paddingRight: padding }}>
            <Suspense fallback={<p style={{ minHeight: "83vh"}}></p>}>
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

                <Route path="/issues">
                  <Helmet>
                    <title>Secret Page 2...</title>
                    <meta name="description" content="A Secret Page." />
                  </Helmet>
                  <MarkdownFile width={cardWidth} url={IssuesMarkdown}/>
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
              
          </Suspense>
            </div>
              
        </ErrorBoundry>
      <Footer />
      </>
  );
}

export default App;
