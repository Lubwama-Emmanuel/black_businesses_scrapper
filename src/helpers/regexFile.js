exports.matchLink = (link) => {
  const regex = /\/business\/[0-9a-zA-Z-]+$/;
  const matchedLink = link.match(regex);
  if (regex.test(link)) {
    console.log(matchedLink[0]);

    return matchedLink[0];
  }
};
