export default [
  {
    family: 'XfinityBrownBold',
    src: 'https://static.cimcontent.net/common-web-assets/fonts/xfinity-brown-optimized/xfinitybrown-bold.woff'
  },
  {
    family: 'DMSansRegular',
    src: [
      // Allow for fallbacks
      'https://static.cimcontent.net/common-web-assets/fonts/dm-sans/dmsans-regular.woff2',
      './fonts/Xfinity/dmsans-regular.woff2',
      'local(Arial)'
    ]
  },
  {
    family: 'DMSansBold',
    src: [
      'https://static.cimcontent.net/common-web-assets/fonts/dm-sans/dmsans-bold.woff2'
    ]
  },
  {
    family: 'XfinityStandardBold',
    src: 'https://static.cimcontent.net/common-web-assets/fonts/xfinity-standard-optimized/xfinitystandard-bold.woff'
  },
  {
    family: 'XfinityStandardMedium',
    src: 'https://static.cimcontent.net/common-web-assets/fonts/xfinity-standard-optimized/xfinitystandard-medium.woff'
  }
];
