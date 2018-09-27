var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    // this.collection.each(function(vid) {
    //   $('.video-list').append(
    //     new VideoListEntryView({model: vid}).el);
    // });
    this.$('.video-list').append(
      this.collection.map(function(vid) {
        return new VideoListEntryView({model: vid}).render().$el;
      })
    );
    return this;
  },

  template: templateURL('src/templates/videoList.html')
});