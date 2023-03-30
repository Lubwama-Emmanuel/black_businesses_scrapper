exports.matchLink = (link) => {
  const regex = /\/business\/[0-9a-zA-Z-]+$/;
  const matchedLink = link.match(regex);
  if (regex.test(link)) {
    console.log(matchedLink[0]);

    return matchedLink[0];
  }
};

exports.matchEmail = (link) => {
  const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const matchedLink = link.match(regex);
  if (regex.test(link)) {
    console.log(matchedLink[0]);

    return matchedLink[0];
  }
};
