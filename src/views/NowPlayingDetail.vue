<template>
  <div class="container">
    <template v-if="data.length !== 0">
      <div class="content">
        <h1>{{ $route.params.title || data.Title }} ({{ data.Rated }})</h1>
        <div class="detail-poster">
          <img
            class="poster"
            :src="$route.params.poster || data.Poster"
            :alt="data.Title"
          />
          <div class="detail-content">
            <table>
              <tr>
                <td>Release Date</td>
                <td>{{ $route.params.released || data.Released }}</td>
              </tr>
              <tr>
                <td>Language</td>
                <td>{{ $route.params.language || data.Language }}</td>
              </tr>
              <tr>
                <td>Genre</td>
                <td>{{ $route.params.genre || data.Genre }}</td>
              </tr>
              <tr>
                <td>Cast & Crew</td>
                <td>{{ $route.params.actors || data.Actors }}</td>
              </tr>
              <tr>
                <td>Director</td>
                <td>{{ $route.params.director || data.Director }}</td>
              </tr>
              <tr>
                <td>Length</td>
                <td>{{ $route.params.length }}</td>
              </tr>
            </table>

            <h1 style="margin-top: 20px">SINOPSIS</h1>
            <p style="margin-top: 20px; line-height: 1.4">
              {{ $route.params.plot || data.Plot }}
            </p>

            <div class="wrapper-button">
              <router-link to="" class="btn">Buy Ticket</router-link>
              <router-link to="" class="btn">Watch Trailer</router-link>
            </div>
          </div>
        </div>
        <div class="wrapper-now-playing">
          <h1>Now Playing</h1>
          <NowPlayingList style="margin-top: 40px" />
        </div>
      </div>
    </template>
    <template>
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
    </template>
  </div>
</template>

<script>
import axios from "axios";
import { search } from "@/api/api";
import NowPlayingList from "@/components/NowPlayingList.vue";
import { HollowDotsSpinner } from "epic-spinners";

export default {
  data() {
    return {
      data: [],
    };
  },
  components: {
    NowPlayingList,
    HollowDotsSpinner,
  },
  methods: {
    async getData() {
      await axios.get(search + "&i=" + this.$route.params.id).then((res) => {
        this.data = res.data;
        this.loading = false;
      });
    },
  },
  async created() {
    this.loading = true;
    try {
      this.getData();
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

.card-container {
  width: 100%;
  margin: 0;
  padding: 0;
}
.container {
  a {
    text-decoration: none;
  }
  color: white;
  margin-top: 80px;
  padding: 40px;
  position: relative;

  // .content {
  //   width: 100%;
  // }

  .detail-poster {
    margin-top: 18px;
    display: flex;

    .detail-content {
      margin-left: 20px;
    }
  }

  .wrapper-button {
    margin-top: 40px;
    display: flex;

    .btn {
      margin-right: 20px;
      background-color: #c0222e;
      border-radius: 15px;
      padding: 15px 30px;
      color: white;
    }
  }

  .wrapper-now-playing {
    margin-top: 60px;
  }

  table tr td {
    padding: 0px 5px 5px 5px;
  }

  img.poster {
    border-radius: 10px;
  }
}
</style>