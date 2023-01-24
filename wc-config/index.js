const contactInfo = require("./contact-info.js")
const site = require("./site.js")
const colors = require("./colors.js")

module.exports = { ...contactInfo, ...site, brandColorPallete: colors }
