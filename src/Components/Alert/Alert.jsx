import { AlertTriangle } from 'lucide-react';
import './Alert.scss';

function Alert({ t }) {
    return (
        <div className="alert">
            <div className="alert-icon"><AlertTriangle size={18} /></div>
            <span className="alert-text">{t.alertAlmostFull}</span>
        </div>
    );
}

export default Alert;