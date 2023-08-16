import type { Component } from 'solid-js';

import logo from '../assets/logo.svg';
import styles from '../styles/App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          I made this with <code>create-solid-app</code>!
        </p>
      </header>
    </div>
  );
};

export default App;
