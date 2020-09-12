module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      unitToConvert: 'px',
      viewportWidth: 360,
      viewportHeight: 640,
      unitPrecision: 5,
      propList: ['!width*'], //能转化为vw的属性列表
      viewportUnit: 'vh',
      fontViewportUnit: 'vh',
      selectorBlackList: ['.nav-bar'],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [],
      landscape: false,
      landscapeUnit: 'vh',
      landscapeWidth: 640
    }
  }
}