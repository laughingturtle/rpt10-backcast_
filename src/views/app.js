var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    var videoList = new VideoListView({
      collection: this.videos
    });
    var videoPlayer = new VideoPlayerView({
      collection: this.videos
    });

    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    return this;
  },

  template: templateURL('src/templates/app.html')
});

