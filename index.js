#!/usr/bin/env node

const clearConsole = require("clear-any-console");
const pgkJSON = require("./package.json");

// Clears the console.
clearConsole();

console.log(`
NAME: ${pgkJSON.name}
VERSION: ${pgkJSON.version}
DESCRIPTION: ${pgkJSON.description}
`);

console.log(`
Helge Drews - Software Engineer - Open Sourcerer 🦊

Hello! 👋😃 I'm Helge, a full-stack software engineer focused on web development.
I’m currently working on Jamstack webpages built with ES6, React, Node.js, Contentful, AWS and a lot of other third party services.
I also use Python 🐍 for webdev and for RaspberryPi fun.

🕊  Twitter: https://twitter.com/helgedrews
🐙 GitHub: https://github.com/dahelg
🌍 Website: https://hdrews.de/
`);
