import './CounterHero.scss';

function CounterHero({ currentCount, maxCapacity, t }) {

    const percentage = Math.min(Math.round((currentCount / maxCapacity) * 100), 100);

    return (
        <div className="counter-hero">
            <div className="counter-hero-number-wrapper">
                <span className="counter-hero-current">{currentCount}</span>
                <span className="counter-hero-divider">/</span>
                <span className="counter-hero-max">{maxCapacity}</span>
            </div>
            <p className="counter-hero-label">{t.heroCurrent}</p>

            <div className="counter-hero-progress-track">
                <div className="counter-hero-progress-fill" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
}

export default CounterHero;