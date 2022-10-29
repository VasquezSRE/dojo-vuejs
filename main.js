const app = Vue.createApp({
  data() {
    return {
      characters: [],
      favorites: [],
    };
  },
  created() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        this.characters = data.results;
      });
  },
  computed: {
    nFavorites() {
      return this.favorites.length;
    },
  },
  methods: {
    addToFavorites(id) {
      this.favorites.push(id);
    },
    removeToFavorites(id) {
      this.favorites = this.favorites.filter((e) => e !== id);
    },

    onFavorites(id) {
      return this.favorites.includes(id);
    },
  },
});
