var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.search();
    this.listenTo(this.videos, 'sync', this.selectFirst);
    this.render();
  },

  selectFirst: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },

  render: function() {
    this.$el.html(this.template());

    var videoList = new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    });
    var videoPlayer = new VideoPlayerView({
      collection: this.videos,
      el: this.$('.player')
    });
    var searchVideos = new SearchView({
      collection: this.videos,
      el: this.$('.search')
    });
    videoList.render();
    searchVideos.render();
    videoPlayer.render();
    return this;
  },

  template: templateURL('src/templates/app.html')
});