<template>
  <div>
    <h1>Random Word</h1>
    <button id="btn-get-random-word" @click="getRandomWord">Get Random Word</button>


    <ons-page>
    <ons-toolbar>
      <div class="center">My app3
      </div>
    </ons-toolbar>

    <p style="text-align: center">
      <button id="btn-get-random-word" @click="getRandomWord">Get Random Word</button>
      <ons-button onclick="ons.notification.alert('Hello world!')">Click me!</ons-button>
      <ons-button @click="mostrar">Click me2!</ons-button>
      <button @click="mostrar">hola</button>
      <p>{{randomWord}}</p>
    </p>
  </ons-page>
  </div>
</template>

<script>
export default {
  data () {
    return {
      randomWord: ''
    }
  },
  methods: {
    getRandomWord: function() {
        this.randomWord = '...';
        this.$http.get(
            'http://api.wordnik.com:80/v4/words.json/randomWord?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
        ).then(function (response) {
            this.randomWord = response.data.word;
        }, function (error) {
            alert(error.data);
        });
    }
  }
}
</script>