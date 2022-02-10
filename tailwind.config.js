module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,jsx,ts,js}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ['Josefin Sans']
      },
      screens: {
        sm: '375px'
      }
    }
  },
   plugins: [
    require('flowbite/plugin')
  ],
  // ...
}
