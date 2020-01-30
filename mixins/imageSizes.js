export const imageSizesMixin = {
  computed: {
    eventAvatarSize() {
      let value = '128px'
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          value = '64px'
          break
        case 'sm':
          value = '64px'
          break
        case 'md':
          value = '128px'
          break
        case 'lg':
          value = '128px'
          break
        case 'xl':
          value = '128px'
          break
      }
      return value
    },
    responsiveWidth() {
      let value = '100%'
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          value = '100%'
          break
        case 'sm':
          value = '300px'
          break
        case 'md':
          value = '25vw'
          break
        case 'lg':
          value = '25vw'
          break
        case 'xl':
          value = '25vw'
          break
      }
      return value
    },
    responsiveMaxWidth() {
      let value = '100%'
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          value = '90vw'
          break
        case 'sm':
          value = '100%'
          break
        case 'md':
          value = '100%'
          break
        case 'lg':
          value = '100%'
          break
        case 'xl':
          value = '100%'
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