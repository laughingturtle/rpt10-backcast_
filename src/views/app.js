var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    var videoPlayer = new VideoPlayerView({
      collection: this.videos
    });
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    var videoList = new VideoListView({
      collection: this.videos
    });
    var searchVideos = new SearchView({
      collection: this.videos
    });
    searchVideos.render();
    videoList.render();
    return this;
  },

  template: templateURL('src/templates/app.html')
});