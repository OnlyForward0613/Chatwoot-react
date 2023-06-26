module.exports = {
  dark: 'class',
  content: [
    './app/javascript/widget/**/*.vue',
    './app/javascript/portal/**/*.vue',
    './app/javascript/shared/**/*.vue',
    './app/javascript/survey/**/*.vue',
    './app/views/**/*.html.erb',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      current: 'currentColor',
      woot: {
        25: '#F5FAFF',
        50: '#EBF5FF',
        75: '#D6EBFF',
        100: '#C2E1FF',
        200: '#99CEFF',
        300: '#70BAFF',
        400: '#47A6FF',
        500: '#1F93FF',
        600: '#1976CC',
        700: '#135899',
        800: '#0C3B66',
        900: '#061D33',
      },
      green: {
        50: '#E6F8E6',
        100: '#C4EEC2',
        200: '#9DE29A',
        300: '#6FD86F',
        400: '#44CE4B',
        500: '#00C41D',
        600: '#00B412',
        700: '#00A200',
        800: '#009000',
        900: '#007000',
      },
      yellow: {
        50: '#FEFDE8',
        100: '#FDFCC4',
        200: '#FCF68C',
        300: '#F9E736',
        400: '#F6D819',
        500: '#E6C00C',
        600: '#C69608',
        700: '#9E6b0A',
        800: '#835510',
        900: '#6F4514',
      },
      slate: {
        25: '#F8FAFC',
        50: '#F1F5F8',
        75: '#EBF0F5',
        100: ' #E4EBF1',
        200: ' #C9D7E3',
        300: ' #AEC3D5',
        400: ' #93AFC8',
        500: ' #779BBB',
        600: ' #446888',
        700: ' #37546D',
        800: ' #293F51',
        900: ' #1B2836',
      },
      black: {
        50: '#F7F7F7',
        100: '#ECECED',
        200: '#DDDDE0',
        300: '#C6C7CA',
        400: '#ABACAF',
        500: '#96979C',
        600: '#6E6F73',
        700: '#5A5B5F',
        800: '#3C3D40',
        900: '#1B1C1F',
      },
      red: {
        50: '#FFEBEE',
        100: '#FFCCD1',
        200: '#F69898',
        300: '#EF6F6F',
        400: '#F94B4A',
        500: '#FF382D',
        600: '#F02B2D',
        700: '#DE1E27',
        800: '#D11320',
        900: '#C30011',
      },
      body: '#2f3b49',
    },
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line
    require('@tailwindcss/typography'),
  ],
};
