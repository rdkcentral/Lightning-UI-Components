export default [
  {
    family: 'XfinityBrownBold',
    url: 'https://static.cimcontent.net/common-web-assets/fonts/xfinity-brown-optimized/xfinitybrown-bold.woff'
  },
  {
    family: 'DMSansRegular',
    urls: [
      // Allow for fallbacks
      'https://static.cimcontent.net/common-web-assets/fonts/dm-sans/dmsans-regular.woff2',
      './fonts/Xfinity/dmsans-regular.woff2',
      'local(Arial)'
    ]
  },
  {
    family: 'DMSansBold',
    urls: [
      'https://static.cimcontent.net/common-web-assets/fonts/dm-sans/dmsans-bold.woff2'
    ]
  },
  {
    family: 'XfinityStandardBold',
    url: 'https://static.cimcontent.net/common-web-assets/fonts/xfinity-standard-optimized/xfinitystandard-bold.woff'
  },
  {
    family: 'XfinityStandardMedium',
    url: 'https://static.cimcontent.net/common-web-assets/fonts/xfinity-standard-optimized/xfinitystandard-medium.woff'
  }
];
