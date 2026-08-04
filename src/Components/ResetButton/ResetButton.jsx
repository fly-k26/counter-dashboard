import { RotateCcw } from 'lucide-react';
import './ResetButton.scss';

function ResetButton() {
    return (
        <div className="reset-container">
            <button type="button" className="reset-btn">
                <RotateCcw className="reset-btn-icon" size={18} />
                <span>Ponastavi za nov dan</span>
            </button>
        </div>
    );
}

export default ResetButton;
