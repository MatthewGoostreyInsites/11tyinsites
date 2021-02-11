/* --- REQUIRES --- */
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

/* --- CONFIG --- */
// Detects dev mode
// const dev = global.dev = (process.env.ELEVENTY_ENV === 'development');
// const now = new Date();

module.exports = (config) => {

    /* --- PLUGINS --- */
    config.addPlugin(eleventyNavigationPlugin);

    /* --- SHORTCODES --- */
    config.addShortcode('navlist', require('./components/nav.js'));

    return {
        dir: {
            input: 'src'
        },
        // Support file extensions
        templateFormats: [
            "md",
            "njk",
            "css",
            "svg",
            "png"
        ]
    }
}