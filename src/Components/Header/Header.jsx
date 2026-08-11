import { DoorOpen, Settings } from 'lucide-react';
import './Header.scss';

function Header({ onOpenSettings, t }) {
    return (
        <header className="header">
            <div className="header-title-wrapper">
                <DoorOpen className="header-icon" size={24} />
                <h1 className="header-title">{t.headerTitle}</h1>
            </div>
            <button type="button" className="header-settings-btn"
                onClick={onOpenSettings} aria-label={t.settingsTitle}>
                <Settings size={20} />
            </button>
        </header>
    );
}

export default Header;