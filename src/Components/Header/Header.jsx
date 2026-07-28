import { DoorClosed, Settings } from 'lucide-react';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header_left">
                <DoorClosed className="header_icon"/>
                <h1 className="header_title">Lokal - glavni vhod</h1>
            </div>
            <button type="button" className="header_settings-btn" aria-label="Settings">
                <Settings/>
            </button>
        </header>
    );
}

export default Header;