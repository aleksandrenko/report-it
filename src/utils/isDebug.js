
/* eslint no-restricted-globals: 0 */
const isDebug = window.location.href.indexOf("debug=true") !== -1 || ["localhost", "127.0.0.1"].indexOf(location.hostname) !== -1;

export default isDebug;