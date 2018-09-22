var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
    console.log('collection = ', this.collection);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // loop through video list, add to render(el)?
    this.$('.video-list').append(
      this.collection.forEach(function(video) {
        console.log('our video = ', video);
      })
    );
    return this;
  },

  template: templateURL('src/templates/videoList.html')
});
