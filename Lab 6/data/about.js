// "I pledge my honor that I have abided by the Stevens Honor System" - Matthew Brand

const aboutInfo = {
  name: "Matthew Brand",
  cwid: "10410988",
  biography: "",
  favoriteShows: [
    "Always Sunny in Philadelphia",
    "The Eric Andre Show",
    "Breaking Bad",
    "Arrested Development",
    "SNL"
  ],
  hobbies: [
    "Entrepeneurship",
    "Programming",
    "Mixing music",
    "Archery",
    "Traveling"
  ]
};

const exportedMethods = {
  getAbout() {
    return aboutInfo;
  }
};

module.exports = exportedMethods;
