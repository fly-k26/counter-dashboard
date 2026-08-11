import { RotateCcw } from 'lucide-react';
import './ResetButton.scss';

function ResetButton({ t }) {
    return (
        <div className="reset-container">
            <button type="button" className="reset-btn">
                <RotateCcw size={16} />
                <span>{t.buttonReset}</span>
            </button>
        </div>
    );
}

export default ResetButton;