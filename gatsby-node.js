const path = require("path")

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        wildChildComponents: path.resolve(
          __dirname,
          "node_modules/gatsby-theme-wild-child/src/components"
        ),
      },
    },
  })
}
