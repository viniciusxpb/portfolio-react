

import { useState, useEffect } from 'react';
import './App.css';

import SBlock from './components/SBlockComponent';
import Card from './components/CardComponent';
import CardHeader from './components/CardHeaderComponent';
import CardBody from './components/CardBodyComponent';
import Header from './components/HeaderComponent';
import Person from './components/PersonComponent';
import GlobalWrapper from './components/GlobalWrapperComponent';
import { useTranslation } from 'react-i18next';
import TitleSection from './components/TitleSectionComponent';
import Footer from './components/FooterComponent';

import QuestoesAqui from "./assets/images/questoesAqui.png";
import Portfolio from "./assets/images/portfolio.png";
import Credimobi from "./assets/images/credimobi.png";
import Contact from './components/ContactComponent';
import CardFooter from './components/CardFooterComponent';



function App() {
  //Themes
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  //Translations
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const language = localStorage.getItem('language') || 'en'
    if (language === 'pt') {
      i18n.changeLanguage('en');
      localStorage.setItem('language', 'en');
    } else {
      i18n.changeLanguage('pt');
      localStorage.setItem('language', 'pt');
    }
  };

  return (
    <div className={`App ${theme}`}>

      <Header toggleTheme={toggleTheme} toggleLanguage={toggleLanguage} />

      <GlobalWrapper>
        <Person />
      </GlobalWrapper>

      <GlobalWrapper background="strong">
        <div className='global-CustomGrid1'>
          <TitleSection title={t('Education')}>
            <Card>
              <CardHeader
                iconLetter="I"
                p1={t('Systems for internet')}
                p2={t('Federal Institute of Triângulo Mineiro - IFTM')}
                p3={t('Uberlândia, MG - 2014 to 2017')}
              />
            </Card>
          </TitleSection>

          <TitleSection title={t('Skills')}>
            <Card>
              <div className='tagWrapper'>
                <SBlock value={t('Frontend/backend applications')} />
                <SBlock value={t('Web')} />
                <SBlock value={t('Documentation')} />
                <SBlock value={t('C#')} />
                <SBlock value={t('HTML')} />
                <SBlock value={t('CSS')} />
                <SBlock value={t('Angular')} />
                <SBlock value={t('Javascript')} />
                <SBlock value={t('MySql')} />
                <SBlock value={t('Oracle')} />
              </div>
            </Card>
          </TitleSection>
          <div className='global-CustomGrid1-box'>
            <TitleSection title={t('Languages')}>
              <Card>
                <CardHeader
                  iconLetter="I"
                  p1={t('Portuguese')}
                  p2={t('Fluent')}
                  p3={t('Native language')}
                />
              </Card>

              <Card>
                <CardHeader
                  iconLetter="I"
                  p1={t('English')}
                  p2={t('Fluent')}
                  p3={t('TOEFL Certificate - Test of English as a Foreign Language')}
                />
              </Card>

              <Card>
                <CardHeader
                  iconLetter="I"
                  p1={t('Spanish')}
                  p2={t('intermediate')}
                  p3={t('Centro Cultural de La Lengua Española - 6 months - 2017')}
                />
              </Card>

            </TitleSection>
          </div>
        </div>
      </GlobalWrapper>

      <GlobalWrapper background="strong">
        <TitleSection title={t('Work experience')}>
          <div className='globalCustomGrid'>
            <div className='globalCustomGrid__box'>
              <Card>
                <CardHeader
                  iconLetter="L"
                  p1={t('Front-End Developer')}
                  p2={t('Labsit - Remote')}
                  p3={t('June 2021 - 2023')}
                />

                <CardBody>
                  <p>
                    {t('Projects I worked on:')}
                  </p>
                  <p>
                    {t('Simplifique: Development and maintenance of code directly related to the business management area.')}
                  </p>
                </CardBody>

                <div className='tagWrapper'>
                  <SBlock value={t('HTML')} />
                  <SBlock value={t('SCSS')} />
                  <SBlock value={t('Angular')} />
                  <SBlock value={t('Javascript')} />
                </div>

              </Card>
              <Card>
                <CardHeader
                  iconLetter="L"
                  p1={t('Support analyst')}
                  p2={t('Landix - Uberlândia, MG')}
                  p3={t('March 2015 - January 2018')}
                />

                <CardBody>
                  <p>
                    {t('Landix-text1')}
                  </p>
                  <p>
                    {t('Landix-text2')}
                  </p>
                  <p>
                    {t('Landix-text3')}
                  </p>
                  <p>
                    {t('Landix-text4')}
                  </p>
                </CardBody>

                <div className='tagWrapper'>
                  <SBlock value={t('Oracle')} />
                  <SBlock value={t('SQL')} />
                </div>

              </Card>
            </div>
            <div className="globalCustomGrid__separator">
              <div className="globalCustomGrid__marker globalCustomGrid__marker-position1 globalCustomGrid__marker-invert">
                <div className="globalCustomGrid__circle"></div>
                <div className="globalCustomGrid__triangle"></div>
              </div>

              <div className="globalCustomGrid__marker globalCustomGrid__marker-position2 globalCustomGrid__marker">
                <div className="globalCustomGrid__circle"></div>
                <div className="globalCustomGrid__triangle"></div>
              </div>

              <div className="globalCustomGrid__marker globalCustomGrid__marker-position3 globalCustomGrid__marker-invert">
                <div className="globalCustomGrid__circle"></div>
                <div className="globalCustomGrid__triangle"></div>
              </div>

              <div className="globalCustomGrid__marker globalCustomGrid__marker-position4 globalCustomGrid__marker">
                <div className="globalCustomGrid__circle"></div>
                <div className="globalCustomGrid__triangle"></div>
              </div>
            </div>
            <div className='globalCustomGrid__box'>
              <Card>
                <CardHeader
                  iconLetter="C"
                  p1={t('Full-Stack Developer')}
                  p2={t('Cedro Technologies - Uberlândia, MG')}
                  p3={t('January 2018 - June 2021')}
                />

                <CardBody>
                  <p>
                    {t('Cedro-text1')}
                  </p>
                  <p>
                    {t('Cedro-text2')}
                  </p>
                  <p>
                    {t('Cedro-text3')}
                  </p>
                  <p>
                    {t('Cedro-text4')}
                  </p>
                  <p>
                    {t('Cedro-text5')}
                  </p>
                </CardBody>

                <div className='tagWrapper'>
                  <SBlock value={t('HTML')} />
                  <SBlock value={t('SCSS')} />
                  <SBlock value={t('Angular')} />
                  <SBlock value={t('Javascript')} />
                  <SBlock value={t('C#')} />
                </div>

              </Card>
              <Card>
                <CardHeader
                  iconLetter="I"
                  p1={t('Independent Full-Stack Developer')}
                  p2={t('Jetfy')}
                  p3={t('January 2014 - Present')}
                />

                <CardBody>
                  <p>
                    {t('independent-text')}
                  </p>
                </CardBody>

                <div className='tagWrapper'>
                  <SBlock value={t('Html')} />
                  <SBlock value={t('CSS')} />
                  <SBlock value={t('Angular')} />
                  <SBlock value={t('React')} />
                </div>

              </Card>
            </div>
          </div>
        </TitleSection>
      </GlobalWrapper>

      <GlobalWrapper background="strong">
        <TitleSection title={t('Latest Projects')}>
          <div className='global-horizontalList'>
            <Card>
              <CardHeader
                iconLetter="Q"
                p1={t('QuestoesAqui')}
                p2={t('Quizzes website')}
              />

              <CardBody>
                <img style={{ maxWidth: 250 }} src={QuestoesAqui} alt='me' />

                {t('questoesAqui-text')}



              </CardBody>

              <CardFooter>
                <a target='_blank' rel='noopener noreferrer' href="https://www.questoesaqui.com">
                  <button type="submit" className='global-button'>{t("Check out online")}</button>
                </a>
              </CardFooter>

            </Card>

            <Card>
              <CardHeader
                iconLetter="T"
                p1={t('This website')}
                p2={t('Resume')}
              />

              <CardBody>
                <img style={{ maxWidth: 250 }} src={Portfolio} alt='me' />

                {t('porfolio-text')}



              </CardBody>


              <CardFooter>
                <a target='_blank' rel='noopener noreferrer' href="https://github.com/viniciusxpb/portfolio-react">
                  <button type="submit" className='global-button'>{t("Check out online")}</button>
                </a>
              </CardFooter>

            </Card>

            <Card>
              <CardHeader
                iconLetter="C"
                p1={t('Credimobi')}
                p2={t('Real estate website')}
              />

              <CardBody>
                <img style={{ maxWidth: 250 }} src={Credimobi} alt='me' />

                {t('credimobi-text')}
              </CardBody>

              <CardFooter>
                <a target='_blank' rel='noopener noreferrer' href="https://credimobi.com.br">
                  <button type="submit" className='global-button'>{t("Check out online")}</button>
                </a>
              </CardFooter>

            </Card>
          </div>
        </TitleSection>
      </GlobalWrapper>

      <GlobalWrapper background="strong">
        <TitleSection title={t('Contact')}>
          <Contact t={t} />
        </TitleSection>
      </GlobalWrapper>
      <Footer />



    </div>
  );
}

export default App;