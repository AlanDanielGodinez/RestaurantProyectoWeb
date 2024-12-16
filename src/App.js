//import react from 'react';
import Navbar from './components/Navbar';
import Landing from "./components/Landing";
import ExpItaliano from './components/Exp-Italiano';
import QuoteSection from './components/QuoteSection';
import ChiefSection from './components/ChiefSection';
import Footer from './components/Footer';

function App() {
    return (
   <div className='App'>
    <Navbar/>
    <div className='container main'>
    <Landing />
    <ExpItaliano />
    <QuoteSection />
    <ChiefSection />
    

    </div>
    <Footer />
   </div>
    );
}

export default App;