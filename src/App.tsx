import React from 'react';
import styles from './App.module.sass';
import {Button} from "./components/ui/Button";
import {ButtonWithIcon} from "./components/ui/ButtonWithIcon";
import {LinkWithIconOnly} from "./components/ui/LinkWithIconOnly";
import {LinkWithIcon} from "./components/ui/LinkWithIcon";


function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Button onClick={()=>{}}>Условия сервиса</Button>
        <ButtonWithIcon iconName='arrowLeft' />
        <ButtonWithIcon iconName='arrowRight' />
        <LinkWithIconOnly iconName='arrowLink' />
        <LinkWithIcon text="Казань" iconName='location' />
        <LinkWithIcon text='info@ecorus.ru' iconName='mail' isFooter={true}/>
        <LinkWithIcon text='+7 (800) 880-88-88' iconName='phone' isFooter={true}/>
      </header>
    </div>
  );
}

export default App;
