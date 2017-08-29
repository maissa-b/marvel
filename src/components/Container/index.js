import React from 'react';
import PropTypes from 'prop-types';

import './Container.css';
import HerosPreview from '../HerosPreview';
import HeroInfos from '../HeroInfos';

const Container = ({ data = {}, characterData, getCharacter, getCharacters }) => (
  <div className="container">
    {
      (!characterData && <HerosPreview data={data} getCharacter={getCharacter} />)
      || <HeroInfos data={characterData.results[0]} getCharacters={getCharacters} />
    }
  </div>
);

Container.propTypes = {
  data: PropTypes.object,
  characterData: PropTypes.object,
  getCharacter: PropTypes.func.isRequired,
  getCharacters: PropTypes.func.isRequired,
};

export default Container;
