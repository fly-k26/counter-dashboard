import 'sass-reset';
import './Main.scss';
import Header from './Components/Header/Header.jsx';

function App() {
    return (
        <main className="app-container">
            <section className="counter-card">
                <Header />
            </section>
        </main>
    );
}

export default App;