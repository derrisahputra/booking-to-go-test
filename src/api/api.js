const api_key = process.env.VUE_APP_API_KEY;
const base_url = process.env.VUE_APP_BASE_URL;

module.exports = {
    search: base_url + "?apikey=" + api_key
}