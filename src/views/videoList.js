var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    //console.log('our collection 2', this.collection);
    this.listenTo(this.collection, 'sync', this.render);
    //this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    $('.video-list').append(
      this.collection.each(function(video) {
        new VideoListEntryView({model: video}).el;
      })
    );
    return this;
  },

  template: templateURL('src/templates/videoList.html')
});