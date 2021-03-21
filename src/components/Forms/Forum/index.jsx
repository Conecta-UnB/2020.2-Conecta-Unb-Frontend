import React from 'react';
import './styles.css';

export default function ForumForm() {
  return (
    <div className="containerForumForm">
      <div>
        <form>
          <input type="text" autoComplete="off" placeholder="Assunto" />
          <input type="text" autoComplete="off" placeholder="Título" />
          <textarea placeholder="Resumo" />
          <button type="submit">
            Postar
          </button>
        </form>
      </div>
    </div>
  );
}
