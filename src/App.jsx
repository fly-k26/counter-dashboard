import { useState, useEffect } from 'react';
import 'sass-reset';
import './Main.scss';
import { translations } from './i18n/translations.js';
import Header from './Components/Header/Header.jsx';
import Alert from './Components/Alert/Alert.jsx';
import CounterHero from './Components/CounterHero/CounterHero.jsx';
import ActionButtons from './Components/ActionButtons/ActionButtons.jsx';
import ResetButton from './Components/ResetButton/ResetButton.jsx';
import Footer from './Components/Footer/Footer.jsx';
import SettingsModal from './Components/SettingsModal/SettingsModal.jsx';

function App() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [language, setLanguage] = useState(() => {return localStorage.getItem('app_language') || 'sl';});
    const [maxCapacity, setMaxCapacity] = useState(() => {
        const savedCapacity = localStorage.getItem('app_max_capacity');
        return savedCapacity ? Number(savedCapacity) : 20;
    });

    useEffect(() => {
        localStorage.setItem('app_language', language);
    }, [language]);

    useEffect(() => {
        localStorage.setItem('app_max_capacity', maxCapacity);
    }, [maxCapacity]);

    const t = translations[language] || translations.sl;
    const handleOpenSettings = () => {setIsSettingsOpen(true);};
    const handleCloseSettings = () => {setIsSettingsOpen(false);};
    const handleSaveSettings = (newSettings) => {
        setLanguage(newSettings.language);
        setMaxCapacity(newSettings.maxCapacity);
    };

    return (
        <main className="app-container">
            <section className="counter-card">
                <Header onOpenSettings={handleOpenSettings} t={t} />
                <Alert t={t} />
                <CounterHero t={t} />
                <ActionButtons t={t} />
                <ResetButton t={t} />
            </section>
            <Footer t={t} />
            <SettingsModal
                key={isSettingsOpen}
                isOpen={isSettingsOpen}
                onClose={handleCloseSettings}
                currentLanguage={language}
                maxCapacity={maxCapacity}
                onSave={handleSaveSettings}
                t={t}
            />
        </main>
    );
}

export default App;