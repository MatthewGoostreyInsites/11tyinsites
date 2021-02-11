/* --- REQUIRES --- */
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

/* --- CONFIG --- */
// Detects dev mode
// const dev = global.dev = (process.env.ELEVENTY_ENV === 'development');
// const now = new Date();

module.exports = (config) => {

    /* --- PASSTHROUGH --- */
    config.addPassthroughCopy('assets');

    /* --- PLUGINS --- */
    config.addPlugin(eleventyNavigationPlugin);

    /* --- SHORTCODES --- */
    // config.addShortcode('navlist', require('./components/nav.js'));

    return {
        dir: {
            input: 'src',
            output: 'build'
        }
    }
}