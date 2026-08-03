import 'sass-reset';
import './Main.scss';
import Header from './Components/Header/Header.jsx';
import Alert from './Components/Alert/Alert.jsx';
import CounterHero from './Components/CounterHero/CounterHero.jsx';

function App() {
    return (
        <main className="app-container">
            <section className="counter-card">
                <Header />
                <Alert />
                <CounterHero />
            </section>
        </main>
    );
}

export default App;