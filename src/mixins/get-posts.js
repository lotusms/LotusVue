export default {
  created() {
    this.$http
      .get("https://lotusms-774d8.firebaseio.com/blogs.json")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        var blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });
      });
  }
};
