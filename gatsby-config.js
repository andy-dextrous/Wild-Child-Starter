require("dotenv").config()
const defaultOptions = require("gatsby-theme-wild-child/defaultOptions")
const options = require("./wc-config")

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-wild-child`,
      options: {
        ...defaultOptions,
        ...options,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        wild: "gatsby-theme-wild-child",
        wildSrc: "gatsby-theme-wild-child/src",
        wildUtils: "gatsby-theme-wild-child/src/utils",
        wildComponents: "gatsby-theme-wild-child/src/components",
        wildTemplates: "gatsby-theme-wild-child/src/templates",
        wildSections: "gatsby-theme-wild-child/src/sections",
        wildHooks: "gatsby-theme-wild-child/src/hooks",
        wildGsap: "gatsby-theme-wild-child/src/gsap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: "./src/gatsby-theme-wild-child/assets/images/",
      },
      __key: "images",
    },
    // Plugins specific to this website go here
    `gatsby-plugin-gatsby-cloud`,
  ],
}
