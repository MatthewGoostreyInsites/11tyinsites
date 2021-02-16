/* --- REQUIRES --- */
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = (config) => {

    /* --- PASSTHROUGH --- */
    config.addPassthroughCopy('assets');

    /* --- PLUGINS --- */
    config.addPlugin(eleventyNavigationPlugin);

    return {
        dir: {
            input: 'src',
            output: 'build'
        }
    }
}