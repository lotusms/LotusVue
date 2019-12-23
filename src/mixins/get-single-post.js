export default {
  created() {
    this.$http
      .get("https://lotusms-774d8.firebaseio.com/blogs/" + this.id + ".json")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.blog = data;
      });
  }
};
