const SITE_CONFIG = {
  siteUrl: "http://mealiemcscriv.local/",
  siteTitle: "WILD Creative | Websites, Content and SEO",
  businessName: "WILD Creative",
  siteDescription: "Websites, Content and SEO",
  gaTrackingId: null,
  googleTagManagerId: null,
  createPosts: false,

  /**** THEME OPTIONS ****/
  cssVarPrefix: "wild",
  shouldShowBreakpoints: false,
  smoothScroll: false,
  usePageTransitions: false,
  useTransitionModal: false,
  menuPlacement: "top",
  webfonts: {
    typekit: {
      id: process.env.TYPEKIT_ID,
    },
  },
}

module.exports = SITE_CONFIG
