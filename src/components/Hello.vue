<template>
  <div class="hello">

    <SocketMessage/>

    <section class="hero is-light is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h2>Essential Links</h2>
              <ul>
                <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
                <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
                <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
                <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
                <br>
                <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
              </ul>
            </div>
            <div class="column">
              <h2>Ecosystem</h2>
              <ul>
                <li><a href="https://nodejs.org">nodejs</a>
                <li><a href="https://github.com/MetinSeylan/Vue-Socket.io">vue-socket.io</a>
                <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
                <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
                <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
                <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <img src="../assets/logo.png">
          <br>
          <br>
          <p>
            <strong>socket-ui-playground</strong> by <a href="brn.gdsn@gmail.com">@brngdsn</a>. 
            <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
          </p>
          <p>
            <a class="icon" href="https://github.com/jgthms/bulma">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import SocketMessage from '@/components/SocketMessage'
export default {
  name: 'hello',
  components: {
    SocketMessage
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
