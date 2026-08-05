import './Footer.scss';

function Footer() {
    return (
        <footer className="footer-stats">
            <div className="footer-stat-item">
                <span className="footer-stat-label">maksimalna kapaciteta</span>
                <span className="footer-stat-value">20 oseb</span>
            </div>
            <div className="footer-stat-item">
                <span className="footer-stat-label">danes zabeleženih</span>
                <span className="footer-stat-value">47 prijav</span>
            </div>
        </footer>
    );
}

export default Footer;