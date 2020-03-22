export const imageSizesMixin = {
  computed: {
    twoCardImageWidth() {
      let value = '100%'
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          value = '100%'
          break
        case 'sm':
          value = '175px'
          break
        case 'md':
          value = '250px'
          break
        case 'lg':
          value = '350px'
          break
        case 'xl':
          value = '400px'
          break
      }
      return value
    },
    twoCardImageMaxWidth() {
      let value = '100%'
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          value = '100%'
          break
        case 'sm':
          value = '175px'
          break
        case 'md':
          value = '250px'
          break
        case 'lg':
          value = '350px'
          break
        case 'xl':
          value = '400px'
          break
      }
      return value
    },
    threeCardImageWidth() {
      let value = '100%'
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          value = '100%'
          break
        case 'sm':
          value = '175px'
          break
        case 'md':
          value = '250px'
          break
        case 'lg':
          value = '350px'
          break
        case 'xl':
          value = '400px'
          break
      }
      return value
    },
    threeCardImageMaxWidth() {
      let value = '100%'
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          value = '100%'
          break
        case 'sm':
          value = '175px'
          break
        case 'md':
          value = '250px'
          break
        case 'lg':
          value = '350px'
          break
        case 'xl':
          value = '400px'
          break
      }
      return value
    },
  }
}