import { TriangleAlert } from 'lucide-react';
import './Alert.scss';

function Alert() {
    return (
        <div className="alert">
            <TriangleAlert className="alert-icon" />
            <span className="alert-text">Kapaciteta skoraj dosežena</span>
        </div>
    );
}

export default Alert;