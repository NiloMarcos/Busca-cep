import React from "react";

import './items.scss';

export default function RenderItems({ cepUser }) {
  return (
    <div className="div-response">
      {cepUser && (
        <div className="info-cep">
          <p>CEP: {cepUser.cep}</p>
          <p>Logradouro: {cepUser.logradouro}</p>
          <p>Bairro: {cepUser.bairro}</p>
          <p>Cidade: {cepUser.localidade} - {cepUser.uf}</p>
        </div>
      )}
    </div>
  );
}
