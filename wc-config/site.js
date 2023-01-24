const SITE_CONFIG = {
  siteUrl: "https://wildcreative.com.au",
  siteTitle: "WILD Creative | Websites, Content and SEO",
  businessName: "WILD Creative",
  siteDescription: "Websites, Content and SEO",
  gaTrackingId: null,
  googleTagManagerId: null,

  /**** THEME OPTIONS ****/
  cssVarPrefix: "wild",
  shouldShowBreakpoints: false,
  smoothScroll: true,
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
