/* --- RE-USABLE NAV COMPONENT --- */

// (hierarchical list of filtered page objects via eleventyNavigation(), current page)
module.exports = (eleventyNav, currentPage) => {

    const navRecurse = (page) => {

        // Checks for active page
        let active = (page.url === currentPage.url);
        let classList = [];
        if (active) {
            classList.push('active');
        };

        // Return nav
        return (
            `<li` + (classList.length ? ` class="${ classList }"` : '') + `>` +
            (active ? `<strong>` : `<a href="${ page.url }">`) +
            page.title +
            (active ? `</strong>` : `</a>`) + `</li>`
        );

    }

    // For each page object, return active nav
    let nav = '';
    for (let page of eleventyNav) {
        nav += navRecurse(page);
    };

    // Export nav
    return `<ul>${ nav }</ul>`;
}