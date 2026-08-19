import './Footer.scss';

function Footer({ maxCapacity, totalLogins, t }) {
    return (
        <footer className="footer-stats">
            <div className="footer-stat-item">
                <span className="footer-stat-label">{t.footerMaxCapacity}</span>
                <span className="footer-stat-value">{maxCapacity} {t.personsUnit}</span>
            </div>

            <div className="footer-stat-item">
                <span className="footer-stat-label">{t.footerTotalLogins}</span>
                <span className="footer-stat-value">{totalLogins} {t.loginsUnit}</span>
            </div>
        </footer>
    );
}

export default Footer;