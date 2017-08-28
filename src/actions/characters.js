import { requestJson } from '../utils';
import md5 from 'md5';
import { apikey, privateApikey } from '../params';

export const CHARACTERSLOADED = 'CHARACTERSLOADED';

export const charactersLoaded = ({ characters }) => ({ type: CHARACTERSLOADED, characters });

// const hash = ts => crypto.createHash('md5').update(`${ts}${privateApikey}${apikey}`).digest('hex')
const hash = (ts) => md5(`${ts}${privateApikey}${apikey}`);

export const getCharacters = () => dispatch => {
    const body = {
        ts: Math.round(new Date() / 1000),
        apikey,
        hash: hash(this.ts),
    }
    requestJson({ method: 'get', url: '/v1/public/characters', body })
    .then(data => dispatch(charactersLoaded(data))
    ).catch(err => console.log('error : ', err));
}