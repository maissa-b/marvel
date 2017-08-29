import { requestJson } from '../utils';
import md5 from 'md5';
import { apikey, privateApikey } from '../params';

export const CHARACTERSLOADED = 'CHARACTERSLOADED';
export const CHARACTERLOADED = 'CHARACTERLOADED';

export const charactersLoaded = data => ({ type: CHARACTERSLOADED, data });
export const characterLoaded = data => ({ type: CHARACTERLOADED, data });
// export const displayCharacterInfo

// requte, si resultat undifined renvoyer page globale

const hash = (ts) => md5(`${ts}${privateApikey}${apikey}`);

export const getCharacters = () => dispatch => {
    const ts = Math.round(new Date() / 1000);
    const body = {
      ts,
      apikey,
      hash: hash(ts),
      limit: 100,
    }
    requestJson({ method: 'get', url: '/v1/public/characters', body })
    .then(data => dispatch(charactersLoaded(data))
    ).catch(err => console.error('error : ', err));
}

export const getCharacter = id => dispatch => {
  const ts = Date.now();
  const body = {
    ts,
    apikey,
    hash: hash(ts),
  }
  requestJson({ method: 'get', url: `/v1/public/characters/${id}`, body })
  .then(data => dispatch(characterLoaded(data)))
  .catch(err => console.error(err));
}
