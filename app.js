const app = Vue.createApp({
  template:
    /*html*/
    `
    <img :class="gender" :src="profileImage" :alt="imageAlt" />
    <h1>{{firstName}} {{lastName}}!</h1>
    <h3>Email : {{email}}</h3>
    <button @click="getUser" :class="gender">Get Random User</button>
    `,

  data() {
    return {
      firstName: "John",
      lastName: "Wick",
      email: "johnwick@gmail.com",
      gender: "male",
      profileImage: "https://randomuser.me/api/portraits/men/75.jpg",
    };
  },

  methods: {
    getUser() {
      fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((response) => {
          this.firstName = response.results[0].name.first;
          this.lastName = response.results[0].name.last;
          this.email = response.results[0].email;
          this.gender = response.results[0].gender;
          this.profileImage = response.results[0].picture.large;
        });
    },
  },

  computed: {
    imageAlt() {
      return this.firstName + " " + this.lastName;
    },
  },
});

app.mount("#app");
