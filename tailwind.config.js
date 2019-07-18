

module.exports = {
  theme: {
      extend: {
        height: theme => ({
          '128': '32rem',
              '256': '64rem',
        }),
        width: theme => ({
          '128': '32rem',
              '256': '64rem',
        }),
          maxHeight: theme => ({
              ...theme('spacing'),
              '1/4': '25%',
              '1/2': '50%',
              '3/4': '75%',
              '85v': '85vh',
          }),
          maxWidth: theme => ({
              ...theme('spacing'),
              '1/4': '25%',
              '1/2': '50%',
              '3/4': '75%',
              '85v': '85vw',
          }),
          minHeight: theme => ({
              '128': '32rem',
              '256': '64rem',
          }),
          minWidth: theme => ({
            '128': '32rem',
            '256': '64rem',
          })
      }
  },
  variants: {},
  plugins: []
}