import React from 'react';
import './styles.css';

export default function EJsForms() {
  return (
    <div className="containerEJsForm">
      <div>
        <form>
          <input type="text" autoComplete="off" placeholder="Nome da EJ" />
          <input type="text" autoComplete="off" placeholder="Título" />
          <textarea placeholder="Conteúdo" />
          <button type="submit">
            Postar
          </button>
        </form>
      </div>
    </div>
  );
}
