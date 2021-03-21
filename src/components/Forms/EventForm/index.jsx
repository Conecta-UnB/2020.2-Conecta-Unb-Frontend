import React from 'react';
import './styles.css';

export default function EventForms() {
  return (
    <div className="containerEventsForms">
      <div>
        <form>
          <input id="title" type="text" autoComplete="off" placeholder="Título" />
          <div className="eventsContent">
            <textarea placeholder="Descrição" />
            <div className="eventsInputs">
              <input type="date" autoCapitalize="off" placeholder="Data" />
              <input type="text" autoComplete="off" placeholder="Local" />
            </div>
          </div>
          <button type="submit">
            Postar
          </button>
        </form>
      </div>
    </div>
  );
}
