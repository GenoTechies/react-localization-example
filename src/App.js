import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
      <div className="App">
        <h1>{t('hello')}</h1>
        <h2>{t('stay_awhile_and_listen')}</h2>
      </div>
  );
}

export default App;