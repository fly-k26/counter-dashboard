import './CounterHero.scss';

function CounterHero() {
    return (
        <div className="counter-hero">
            <div className="counter-hero-numbers">
                <span className="counter-hero-current">18</span>
                <span className="counter-hero-limit">/ 20</span>
            </div>
            <p className="counter-hero-label">trenutno prisotnih oseb</p>
            <div className="counter-hero-progress-track">
                <div className="counter-hero-progress-fill"></div>
            </div>
        </div>
    );
}

export default CounterHero;