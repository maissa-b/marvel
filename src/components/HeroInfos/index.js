import React from 'react';
import PropTypes from 'prop-types';

import "./HeroInfos.css";

const HeroInfos = ({ data = {}, getCharacters }) => (
  <div className="hero_infos">
    <img className="hero_infos_img" alt="" src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
    <div className="hero_infos_infos">
      <div className="hero_infos_header">
        <h3>{data.name}</h3>
        <p>{data.description}</p>
      </div>
      <div className="hero_infos_container">
        <div>
          <h4>comics :</h4>
          <ul>
            { data.comics.items.map(item => <li key={item.id}>{item.name}</li>) }
          </ul>
        </div>
        <div>
          <h4>series :</h4>
          <ul>
            { data.series.items.map(item => <li key={item.id}>{item.name}</li>) }
          </ul>
        </div>
      </div>
      <button className="hero_infos_button" onClick={() => getCharacters()}>Back</button>
    </div>
  </div>
);

HeroInfos.propTypes = {
  data: PropTypes.object,
  getCharacters: PropTypes.func.isRequired,
};

export default HeroInfos;