import React from 'react';
import './styles.css';

export default function Forum() {
  return (
    <div className="Title">
      <h1>
        Fórum
      </h1>
      <div className="StaticTopic">
        <h2>
          Titulo
        </h2>
        <h3>
          Descrição
        </h3>
        <h4>
          Editar
        </h4>
        <div className="Lixeirinha" />
      </div>
    </div>
  );
}
