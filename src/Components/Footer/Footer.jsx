import './Footer.scss';

function Footer({ t }) {
    return (
        <footer className="footer-stats">
            <div className="footer-stat-item">
                <span className="footer-stat-label">{t.footerMaxCapacity}</span>
                <span className="footer-stat-value">20 {t.personsUnit}</span>
            </div>
            <div className="footer-stat-item">
                <span className="footer-stat-label">{t.footerTotalLogins}</span>
                <span className="footer-stat-value">47 {t.loginsUnit}</span>
            </div>
        </footer>
    );
}

export default Footer;