<template>
  <div class="card-container">
    <router-link
      :to="{
        name: 'NowPlayingDetail',
        params: {
          id: data.movie1.imdbID,
          title: data.movie1.Title,
          poster: data.movie1.Poster,
          release: data.movie1.Released,
          genre: data.movie1.Genre,
          actors: data.movie1.Actors,
          director: data.movie1.Director,
          length: data.movie1.Runtime,
          plot: data.movie1.Plot,
        },
      }"
      class="card"
    >
      <img :src="data.movie1.Poster" :alt="data.movie1.Title" />
      <p class="title">{{ data.movie1.Title }}</p>
      <div style="margin-top: 10px" v-if="data.movie1.length !== 0">
        <span class="year">{{ data.movie1.Year }}</span>
        <span class="rating"
          >IMdb: {{ data.movie1.imdbRating }} ({{
            data.movie1.imdbVotes
          }})</span
        >
        <span class="rated"> {{ data.movie1.Rated }}</span>
      </div>
      <p class="genre">{{ data.movie1.Genre }}</p>
      <div v-if="loading" class="loading">
        <HollowDotsSpinner
          :animation-duration="1000"
          :dot-size="15"
          :dots-num="3"
          color="#ff1d5e"
        />
        <p style="color: white; margin-top: 10px; font-size: 14px">
          Loading Data
        </p>
      </div>
    </router-link>
    <router-link
      :to="{
        name: 'NowPlayingDetail',
        params: {
          id: data.movie2.imdbID,
          title: data.movie2.Title,
          poster: data.movie2.Poster,
          release: data.movie2.Released,
          genre: data.movie2.Genre,
          actors: data.movie2.Actors,
          director: data.movie2.Director,
          length: data.movie2.Runtime,
          plot: data.movie2.Plot,
        },
      }"
      class="card"
    >
      <img :src="data.movie2.Poster" :alt="data.movie2.Title" />
      <p class="title">{{ data.movie2.Title }} {{ data.movie2.Rated }}</p>
      <div style="margin-top: 10px" v-if="data.movie2.length !== 0">
        <span class="year">{{ data.movie2.Year }}</span>
        <span class="rating"
          >IMdb: {{ data.movie2.imdbRating }} ({{
            data.movie2.imdbVotes
          }})</span
        >
        <span class="rated"> {{ data.movie2.Rated }}</span>
      </div>
      <p class="genre">{{ data.movie2.Genre }}</p>
      <div v-if="loading" class="loading">
        <HollowDotsSpinner
          :animation-duration="1000"
          :dot-size="15"
          :dots-num="3"
          color="#ff1d5e"
        />
        <p style="color: white; margin-top: 10px; font-size: 14px">
          Loading Data
        </p>
      </div> </router-link
    ><router-link
      :to="{
        name: 'NowPlayingDetail',
        params: {
          id: data.movie3.imdbID,
          title: data.movie3.Title,
          poster: data.movie3.Poster,
          release: data.movie3.Released,
          genre: data.movie3.Genre,
          actors: data.movie3.Actors,
          director: data.movie3.Director,
          length: data.movie3.Runtime,
          plot: data.movie3.Plot,
        },
      }"
      class="card"
    >
      <img :src="data.movie3.Poster" :alt="data.movie3.Title" />
      <p class="title">{{ data.movie3.Title }} {{ data.movie3.Rated }}</p>
      <div style="margin-top: 10px" v-if="data.movie3.length !== 0">
        <span class="year">{{ data.movie3.Year }}</span>
        <span class="rating"
          >IMdb: {{ data.movie3.imdbRating }} ({{
            data.movie3.imdbVotes
          }})</span
        >
        <span class="rated"> {{ data.movie3.Rated }}</span>
      </div>
      <p class="genre">{{ data.movie3.Genre }}</p>
      <div v-if="loading" class="loading">
        <HollowDotsSpinner
          :animation-duration="1000"
          :dot-size="15"
          :dots-num="3"
          color="#ff1d5e"
        />
        <p style="color: white; margin-top: 10px; font-size: 14px">
          Loading Data
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
import { search } from "@/api/api";
import { HollowDotsSpinner } from "epic-spinners";

export default {
  data() {
    return {
      data: {
        movie1: [],
        movie2: [],
        movie3: [],
      },
      loading: false,
    };
  },
  components: {
    HollowDotsSpinner,
  },
  methods: {
    async getDataMovie1() {
      await axios.get(search + "&i=tt0173840").then((res) => {
        this.data.movie1 = res.data;
        this.loading = false;
      });
    },
    async getDataMovie2() {
      await axios.get(search + "&i=tt9335498").then((res) => {
        this.data.movie2 = res.data;
        this.loading = false;
      });
    },
    async getDataMovie3() {
      await axios.get(search + "&i=tt3331846").then((res) => {
        this.data.movie3 = res.data;
        this.loading = false;
      });
    },
  },
  async created() {
    this.loading = true;
    try {
      this.getDataMovie1();
      this.getDataMovie2();
      this.getDataMovie3();
    } catch (error) {
      console.log(error);
      this.loading = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

a {
  text-decoration: none;
}

.card-container {
  width: 100%;
  padding: 40px;
}

.card {
  color: white;
  float: left;
  margin-right: 40px;
  margin-bottom: 40px;
  width: calc(270px - 20px);
  height: 500px;
  overflow: hidden;
  transition: 0.2s;
  position: relative;

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    transform: translateY(-10px);
  }

  .title {
    margin-top: 10px;
    min-height: 40px;
    max-height: 40px;
  }
  .genre {
    color: rgba(223, 223, 223, 0.534);
    font-size: 14px;
    margin-top: 10px;
  }

  .rating,
  .rated {
    color: white;
    background-color: rgb(255, 136, 0);
    width: 37px;
    border-radius: 5px;
    padding: 3px 4px;
    font-size: 12px;
    margin-right: 10px;
  }

  .rated {
    background-color: rgb(20, 13, 4);
  }

  .year {
    margin-right: 10px;
    color: white;
    background-color: rgb(185, 0, 0);
    width: 37px;
    border-radius: 5px;
    padding: 3px 4px;
    font-size: 12px;
  }

  img:not(.logo-icon) {
    border-radius: 10px;
    border: 2px solid black;
    box-shadow: 0px 5px 10px rgba(12, 11, 11, 0.623);
    width: 100%;
    height: 363px;
    // max-height: 363px;
  }
}

.card-container:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (min-width: 425px) and (max-width: 529px) {
  .card {
    height: auto;
    width: calc(150px);

    img:not(.logo-icon) {
      height: 215px;
    }

    .title {
      overflow: hidden;
    }
  }
}

@media screen and (min-width: 530px) and (max-width: 768px) {
  .card {
    height: auto;
    width: calc(185px);

    img:not(.logo-icon) {
      height: 285px;
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 949px) {
  .card {
    height: auto;
    width: calc(220px);

    img:not(.logo-icon) {
      height: 350px;
    }
  }
}

@media screen and (min-width: 950px) and (max-width: 1187px) {
  .card {
    height: auto;
    width: calc(300px);

    img:not(.logo-icon) {
      height: 450px;
    }
  }
}
</style>