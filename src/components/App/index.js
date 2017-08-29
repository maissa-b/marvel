import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header';
import Container from '../Container';
import { getCharacter, getCharacters } from '../../actions/characters';
import './App.css';

const App = ({ data, characterData, getCharacter: doGetCharacter, getCharacters: doGetCharacters }) => (
  <div className="App">
    <Header />
    <Container
      data={data}
      characterData={characterData}
      getCharacter={doGetCharacter}
      getCharacters={doGetCharacters}
    />
  </div>
);

const actions = { getCharacter, getCharacters };

const mapStateToProps = state => ({
  data: state.characters.data,
  characterData: state.characters.characterData,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

App.propTypes = {
  data: PropTypes.object,
  characterData: PropTypes.object,
  getCharacter: PropTypes.func.isRequired,
  getCharacters: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
