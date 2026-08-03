import { DoorClosed, Settings } from 'lucide-react';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <DoorClosed className="header-icon"/>
                <h1 className="header-title">Lokal - glavni vhod</h1>
            </div>
            <button type="button" className="header-settings-btn" aria-label="Settings">
                <Settings/>
            </button>
        </header>
    );
}

export default Header;