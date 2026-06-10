const PropTypes = require('prop-types');

function getSlug(absolutePath) {
  let myArray = absolutePath.split("/");
  let slug = myArray[myArray.length-2];
  return(slug); 
}

getSlug.propTypes = {
  absolutePath: PropTypes.string.isRequired,
}

module.exports = {getSlug}