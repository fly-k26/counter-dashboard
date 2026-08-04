import { Plus, Minus } from 'lucide-react';
import './ActionButtons.scss';

function ActionButtons() {
    return (
        <div className="action-buttons">
            <button type="button" className="action-btn action-btn-logout">
                <Minus className="action-btn-icon" size={20} />
                <span>Odjava</span>
            </button>

            <button type="button" className="action-btn action-btn-login">
                <Plus className="action-btn-icon" size={20} />
                <span>Prijava</span>
            </button>
        </div>
    );
}

export default ActionButtons;