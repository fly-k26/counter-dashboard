import { Minus, Plus } from 'lucide-react';
import './ActionButtons.scss';

function ActionButtons({ onLogin, onLogout, currentCount, maxCapacity, t }) {

    const isLogoutDisabled = currentCount <= 0;
    const isLoginDisabled = currentCount >= maxCapacity;

    return (
        <div className="action-buttons">
            <button type="button" className="action-btn action-btn-logout" onClick={onLogout} disabled={isLogoutDisabled}>
                <Minus size={20} />
                <span>{t.buttonLogout}</span>
            </button>

            <button type="button" className="action-btn action-btn-login" onClick={onLogin} disabled={isLoginDisabled}>
                <Plus size={20} />
                <span>{t.buttonLogin}</span>
            </button>
        </div>
    );
}

export default ActionButtons;