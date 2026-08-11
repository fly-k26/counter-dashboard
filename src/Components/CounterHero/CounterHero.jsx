import './CounterHero.scss';

function CounterHero({ t }) {
    return (
        <div className="counter-hero">
            <div className="counter-hero-number-wrapper">
                <span className="counter-hero-current">18</span>
                <span className="counter-hero-divider">/</span>
                <span className="counter-hero-max">20</span>
            </div>
            <p className="counter-hero-label">{t.heroCurrent}</p>
            <div className="counter-hero-progress-track">
                <div className="counter-hero-progress-fill" style={{ width: '90%' }}></div>
            </div>
        </div>
    );
}

export default CounterHero;