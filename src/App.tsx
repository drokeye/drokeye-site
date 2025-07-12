import { Toaster } from 'react-hot-toast';
import BackgroundCanvas from './layout/BackgroundCanvas';
import Navbar from './layout/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Writings from './pages/Writings';
import Links from './pages/Links';

function App() {
  return (
    <>
      <BackgroundCanvas />
      <Navbar />
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Home />
      <About />
      <Projects />
      <Writings />
      <Links />
      <footer className="text-center text-sm text-text/70 mt-16">© 2025 Prabakar - Made with ❤️</footer>
    </>
  );
}

export default App;
