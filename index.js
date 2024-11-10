#!/usr/bin/env node

const pgkJSON = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const log = console.log;
const { dim, italic } = chalk;
const chalkStyle = (hexColor) => chalk.hex(hexColor).bold.inverse;

const COLOR = {
    CUSTOM_A: `#3DD430`,
    CUSTOM_B: `#F888FA`,
    DREWS: `#3350AD`,
    GITHUB: `#6CC644`,
    TWITTER: `#1DA1F2`,
};

const customStyleA = chalkStyle(COLOR.CUSTOM_A);
const customStyleB = chalkStyle(COLOR.CUSTOM_B);

const twitterStyle = chalkStyle(COLOR.TWITTER);
const githubStyle = chalkStyle(COLOR.GITHUB);
const drewsStyle = chalkStyle(COLOR.DREWS).bgMagentaBright;

welcome({
    title: `Helge Drews 👨‍💻`,
    tagLine: `Nice to meet you!`,
    bgColor: COLOR.DREWS,
    color: `#FAE3E3`,
    bold: true,
    clear: true,
    version: pgkJSON.version,
    description: pgkJSON.description,
});

log(`
NAME: ${pgkJSON.name}
VERSION: ${pgkJSON.version}
DESCRIPTION: ${pgkJSON.description}
`);

log(`
->>> ${customStyleA(`Software Engineer`)} 🛠    ->>> ${customStyleB(
    `Open Sourcerer`
)} 🔓🦊

${italic(`Hello! 👋😃 I'm Helge, a full-stack software engineer focused on web development.
I’m currently working on Jamstack webpages built with ES6, React, Node.js, Contentful, AWS and a lot of other third party services.
I also use Python 🐍 for WebDev and for RaspberryPi fun. 🥳`)}

🐦 ${twitterStyle(` Twitter `)}: ${dim(`https://x.com/helgedrews`)}
🐙 ${githubStyle(` GitHub `)}: ${dim(`https://github.com/dahelg`)}
🏠 ${drewsStyle(` Website `)}: ${dim(`https://www.hdrews.de/`)}
`);
