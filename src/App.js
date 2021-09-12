import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { t } = useTranslation();

    function chooseLanguage(lang) {
        i18next.changeLanguage(lang)
    }

  return (
      <div className="App">
          <div className={"row"}>
              <div className={'col, mx-auto bg-secondary text-center py-4'}>
                  <button onClick={()=>chooseLanguage('en')} className={"btn btn-primary"}>
                      English
                  </button>
                  <button onClick={()=>chooseLanguage('si')} className={"btn btn-success mx-2"}>
                      Sinhalese
                  </button>
                  <button onClick={()=>chooseLanguage('ta')} className={"btn btn-warning"}>
                      Tamil
                  </button>
              </div>
          </div>
          <div className={"row my-3"}>
              <div className={"col"}>
                  <div className={"row"}>
                      <div className={"col text-center"}>
                          <h2>{t('stay_awhile_and_listen')}</h2>
                      </div>
                  </div>
                  <div className={"row"}>
                      <div className={"col text-center"}>
                          <h1>{t('hello')}</h1>
                      </div>
                  </div>
                  <div className={"row"}>
                      <div className={"col text-center"}>
                          <h1>{t('sample_para')}</h1>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;