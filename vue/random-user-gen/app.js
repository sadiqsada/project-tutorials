const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    };
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api');
      const { results } = await res.json();

      console.log(results);

      const currentUser = results[0];

      this.firstName = currentUser.name.first;
      this.lastName = currentUser.name.last;
      this.email = currentUser.email;
      this.gender = currentUser.gender;
      this.picture = currentUser.picture.large;
    },
  },
});

app.mount('#app');
