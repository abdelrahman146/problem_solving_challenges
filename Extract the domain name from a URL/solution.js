function domainName(url) {
  return url.replace(/.+:\/\/|www\.|\..+/gm, '');
}

module.exports = domainName;
