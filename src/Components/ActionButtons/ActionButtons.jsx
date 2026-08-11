import { Minus, Plus } from 'lucide-react';
import './ActionButtons.scss';

function ActionButtons({ t }) {
    return (
        <div className="action-buttons">
            <button type="button" className="action-btn action-btn-logout">
                <Minus size={20} />
                <span>{t.buttonLogout}</span>
            </button>
            <button type="button" className="action-btn action-btn-login">
                <Plus size={20} />
                <span>{t.buttonLogin}</span>
            </button>
        </div>
    );
}

export default ActionButtons;