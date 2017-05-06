<template><div class="socket-message">
  socket-message {{message}}
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
        'message'
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
    }
  }
</script>

<style scoped>
  .socket-message {

  }
</style>
