import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/search/",
  apiParams: {
    api_key: "bf84061ecaac4b2619e385bdbf185fc1",
    language: "it-IT",
    query: "batman",
  },
  movie: [],
  tv: [],
});
