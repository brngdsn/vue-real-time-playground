<template><div class="socket-message">

  <section class="section">
    <div class="container">
      <div>
        <h1 class="title is-spaced">Forms</h1>
        <h2 class="subtitle">
          Inputs are better when they're <strong>responsive</strong>.
        </h2>
        <hr>
        <div class="columns">
          <div class="column">
            <b-field>
              <b-input :placeholder="message.s"
                :value="message.s"
                type="text"
                icon="email"
                >
              </b-input>
            </b-field>
            <b-field>
              <b-input :placeholder="message.someTracker"
                :value="message.someTracker"
                icon="payment"
                >
              </b-input>
            </b-field>
          </div>
          <div class="column">
            <pre>socket-message={{message}}</pre>
          </div>
        </div>
        <hr>
        <h1 class="title is-spaced">Tables</h1>
        <h2 class="subtitle">
          Sometimes tables are needed, from <strong>socket JSON</strong>.
        </h2>
        <hr>
        <div>
          <b-table
            :data="message.tableData"
            :striped="true"
            :mobile-cards="hasMobileCards"
            default-sort="first_name"
            >

            <b-table-column field="id" label="ID" width="40" sortable numeric></b-table-column>
            <b-table-column field="first_name" label="First Name" sortable></b-table-column>
            <b-table-column field="last_name" label="Last Name" sortable></b-table-column>
            <b-table-column field="date" label="Date" sortable></b-table-column>

          </b-table>
        </div>
      </div>
    </div>
  </section>

</div></template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'socket-message',
    data () {
      return {
        busy: false
      }
    },
    computed: {
      ...mapGetters([
        'message',
        'connect'
      ])
    },
    methods: {
      ...mapActions([
        // some action
      ]),
      async fetch () {
        this.busy = true
        await Promise.resolve()
        this.busy = false
      }
    },
    async created () {
      this.fetch()
    },
    mounted () {
      console.log('* Mounted SocketMessage!')
      let i = setInterval(() => {
        if (this.connect) {
          clearInterval(i)
          this.$snackbar.open(`socket connected`)
        }
      }, 10)
    }
  }
</script>

<style scoped>
  .socket-message {

  }
</style>
