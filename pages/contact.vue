<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col>
        <main id="contact-page">
          <!-- Main Section -->
          <v-container class="d-flex flex-column align-center py-12" fluid>
            <v-container class="content-container d-flex flex-column justify-center">
              <h1
                :class="{'display-3 font-weight-bold white--text text-center pb-3': $breakpoint.mdAndUp, 'display-1 font-weight-bold white--text text-center pb-3': $breakpoint.smAndDown}"
              >Contact</h1>
            </v-container>
          </v-container>

          <v-container>
            <v-row>
              <v-col
                :class="{'col-9 col-md-6 mx-auto': $breakpoint.mdAndUp, 'col-12 col-md-6 mx-auto px-12': $breakpoint.smAndDown}"
              >
                <h2
                  :class="{'display-2': $breakpoint.mdAndUp, 'display-1': $breakpoint.smAndDown}"
                >Have a question?</h2>
                <p
                  :class="{'headline': $breakpoint.mdAndUp, 'title': $breakpoint.smAndDown}"
                >Send us a message!</p>

                <v-form
                  id="contact-form"
                  ref="form"
                  v-model="valid"
                  name="contact"
                  method="post"
                  value="contactform"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  lazy-validation
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <v-text-field v-model="name" :rules="nameRules" label="Name" name="name" required></v-text-field>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    name="email"
                    required
                  ></v-text-field>
                  <v-textarea
                    v-model="message"
                    :rules="messageRules"
                    label="Your Message"
                    name="message"
                    required
                  ></v-textarea>
                  <v-btn class="mr-4" name="reset" color="info" @click="reset">Reset</v-btn>
                  <v-btn
                    type="submit"
                    name="submit"
                    :disabled="!valid"
                    color="secondary"
                    class="mr-4"
                  >Submit</v-btn>
                </v-form>
              </v-col>
            </v-row>
          </v-container>
        </main>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Contact',
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  data: () => ({
    sliderModel: null,
    valid: true,
    name: '',
    nameRules: [v => !!v || 'Name is required'],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    message: '',
    messageRules: [
      v => !!v || 'Message is required',
      v =>
        (v && v.length <= 1000) ||
        'Your message must be less than 1000 characters. Please email us at company@email.com'
    ]
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset() {
      this.$refs.form.reset()
      this.$refs.form.resetValidation()
    }
  }
}
</script>

<style lang="scss">
</style>
