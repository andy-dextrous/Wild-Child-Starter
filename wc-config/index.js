const contactInfo = require("./contact-info.js")
const site = require("./site.js")
const colors = require("./colors.js")

const options = { ...contactInfo, ...site, brandColorPallete: colors }

module.exports = options
