/* vim: set ft=javascript ts=2 et sw=2 tw=80: */
var config = {
  slack_api_token: process.env.SLACK_API_TOKEN,

  regexes: [
    { regex: /\bguys\b/gi, message: [
        "Guys? 🤔",
        "Did you just say guys? 🤭",
        "No no no! 😤",
        "Did you just call me a guy? 🤨",
        "Did you consider using 'peeps' instead of 'guys'? _With love, your friendly passive-aggressive bot_ 😬"
      ]
    }
  ],

  build: function (id) { }
};

module.exports = config;
