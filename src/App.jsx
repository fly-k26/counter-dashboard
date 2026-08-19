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

    const [currentCount, setCurrentCount] = useState(() => {
        const savedCount = localStorage.getItem('app_current_count');
        return savedCount !== null ? Number(savedCount) : 0;
    });

    const [totalLogins, setTotalLogins] = useState(() => {
        const savedLogins = localStorage.getItem('app_total_logins');
        return savedLogins !== null ? Number(savedLogins) : 0;
    });

    useEffect(() => {
        localStorage.setItem('app_language', language);
    }, [language]);

    useEffect(() => {
        localStorage.setItem('app_max_capacity', maxCapacity);
    }, [maxCapacity]);

    useEffect(() => {
        localStorage.setItem('app_current_count', currentCount);
    }, [currentCount]);

    useEffect(() => {
        localStorage.setItem('app_total_logins', totalLogins);
    }, [totalLogins]);

    const t = translations[language] || translations.sl;

    const handleLogin = () => {
        if (currentCount < maxCapacity) {
            setCurrentCount((prev) => prev + 1);
            setTotalLogins((prev) => prev + 1);
        }
    };

    const handleLogout = () => {
        if (currentCount > 0) {
            setCurrentCount((prev) => prev - 1);
        }
    };

    const handleReset = () => {
        setCurrentCount(0);
        setTotalLogins(0);
    };

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

                <Alert
                    currentCount={currentCount}
                    maxCapacity={maxCapacity}
                    t={t}
                />

                <CounterHero
                    currentCount={currentCount}
                    maxCapacity={maxCapacity}
                    t={t}
                />

                <ActionButtons
                    onLogin={handleLogin}
                    onLogout={handleLogout}
                    currentCount={currentCount}
                    maxCapacity={maxCapacity}
                    t={t}
                />

                <ResetButton
                    onReset={handleReset}
                    t={t}
                />
            </section>

            <Footer
                maxCapacity={maxCapacity}
                totalLogins={totalLogins}
                t={t}
            />

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