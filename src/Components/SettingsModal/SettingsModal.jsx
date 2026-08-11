import { useState } from 'react';
import { X } from 'lucide-react';
import './SettingsModal.scss';

function SettingsModal({ isOpen, onClose, currentLanguage, maxCapacity, onSave, t }) {
    const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);
    const [tempMaxCapacity, setTempMaxCapacity] = useState(maxCapacity);

    if (!isOpen) return null;

    const handleSave = () => {
        onSave({
            language: selectedLanguage,
            maxCapacity: Number(tempMaxCapacity)
        });
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-card">
                <header className="modal-header">
                    <h2 className="modal-title">{t.settingsTitle}</h2>
                    <button type="button" className="modal-close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </header>
                <div className="modal-body">
                    <div className="modal-field">
                        <label htmlFor="max-capacity" className="modal-label">
                            {t.settingsMaxCapacity}
                        </label>
                        <input
                            id="max-capacity"
                            type="number"
                            className="modal-input"
                            value={tempMaxCapacity}
                            onChange={(e) => setTempMaxCapacity(e.target.value)}
                            min={1}
                        />
                    </div>
                    <div className="modal-field">
                        <label htmlFor="language-select" className="modal-label">
                            {t.settingsLanguage}
                        </label>
                        <select
                            id="language-select"
                            className="modal-select"
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}>
                            <option value="sl">Slovenščina</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                </div>
                <footer className="modal-footer">
                    <button type="button" className="modal-save-btn" onClick={handleSave}>
                        {t.settingsSave}
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default SettingsModal;