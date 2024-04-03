import { reactive } from "vue";

export const store = reactive({
  apiUrlMovie:
    "https://api.themoviedb.org/3/search/movie?api_key=bf84061ecaac4b2619e385bdbf185fc1",
  apiUrlSeries:
    "https://api.themoviedb.org/3/search/tv?api_key=bf84061ecaac4b2619e385bdbf185fc1",
  cardsList: [],
});
