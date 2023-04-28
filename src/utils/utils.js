import md5 from "md5";
const getApiUrl = (id) => {
  const privateKey = '5b40698095108591c974ef4c2a98f60bd4a5c2b1';
  const publicKey = '75f168664512569cfa9ecac9699ce09e';
  const timestamp = new Date().toISOString()
  const hash = md5(timestamp + privateKey + publicKey)
  if (id) {
    const apiCharacterFromId = `https://gateway.marvel.com/v1/public/characters/${id}?orderBy=name&limit=50&ts=`;
    const apiUrlID = apiCharacterFromId + timestamp + "&apikey=" + publicKey + "&hash=" + hash;
    return apiUrlID;
  }
  const apiWithoutId = "https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=50&ts=";
  const apiUrlWithoutID = apiWithoutId + timestamp + "&apikey=" + publicKey + "&hash=" + hash;
  return apiUrlWithoutID;
}

const thumbnailPathChange = (thumbnailPath) => {
  const thumbnailPathHTTPS = thumbnailPath.replace('http', 'https');
  return thumbnailPathHTTPS;
}

const ageRatingMovieChange = (ageRating) => {
  if (ageRating != null) {
    let arrNumRating = ageRating.match(/(-?\d+(\.\d+)?)/g).map(v => +v);
    const arrComingOfAge = arrNumRating.map((num) => {
      if (num < 18) {
        return num
      }
      if (num >= 18) {
        return '+' + num
      }
    })
    return arrComingOfAge
  }
  return ageRating;
}

const getValidNameCharacterMarvel = (marvelCharacterName) => {
  const validCharacterName = marvelCharacterName.replace(/ /g, '').toLowerCase();
  return validCharacterName;
}

export { getApiUrl, thumbnailPathChange, ageRatingMovieChange,getValidNameCharacterMarvel }