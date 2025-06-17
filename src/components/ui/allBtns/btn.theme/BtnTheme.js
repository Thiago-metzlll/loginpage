import React from 'react';
import { useTheme } from '../../../../theme/themeContext';
import styles from './BtnTheme.module.scss';

export default function BtnTheme({ className }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`${styles.btnTheme} ${className || ''}`}
      onClick={toggleTheme}
      aria-label="Alternar tema claro/escuro"
      type="button"
    >
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
}
