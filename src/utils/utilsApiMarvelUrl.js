import md5 from "md5";

const api = "https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=50&ts="
const privateKey = '5b40698095108591c974ef4c2a98f60bd4a5c2b1';
const publicKey = '75f168664512569cfa9ecac9699ce09e';
const timestamp = new Date().toISOString()
const hash = md5(timestamp + privateKey + publicKey)
const apiUrl = api + timestamp + "&apikey=" + publicKey + "&hash=" + hash;
export default apiUrl;

export const thumbnailPathChange = (thumbnailPath) => {
 const thumbnailPathHTTPS = thumbnailPath.replace('http','https');
 return thumbnailPathHTTPS;
}