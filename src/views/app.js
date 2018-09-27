var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.search('snow leopard');
    this.listenTo(this.videos, 'sync', this.selectFirst);
    this.render();
  },

  selectFirst: function() {
    this.videos.at(0).select();
  },

  render: function() {
    this.$el.html(this.template());

    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();

    new VideoPlayerView({
      collection: this.videos,
      el: this.$('.player')
    }).render();

    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')
});