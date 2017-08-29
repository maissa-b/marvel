import React from 'react';
import PropTypes from 'prop-types';

import './HeroPreview.css';

const HeroPreview = ({ heroInfos, getCharacter }) => (
  <div className="hero_preview">
    <img
      className="hero_preview_img"
      src={`${heroInfos.thumbnail.path}.${heroInfos.thumbnail.extension}`}
      alt=""
      onClick={() => getCharacter(heroInfos.id)}
    />
    <p className="hero_preview_name">{heroInfos.name}</p>
  </div>
);

const HerosPreview = ({ data, getCharacter }) => (
  <div className="container">
    {data.results && data.results.map(result => (
        <HeroPreview
          key={result.id}
          heroInfos={result}
          getCharacter={getCharacter}
        />
      ))}
  </div>
);

HeroPreview.propTypes = {
  heroInfos: PropTypes.object.isRequired,
  getCharacter: PropTypes.func.isRequired,
};

HerosPreview.propTypes = {
  data: PropTypes.object,
  getCharacter: PropTypes.func.isRequired,
};

export default HerosPreview;