var SearchView = Backbone.View.extend({

  events: {
    'click button': 'searchYouTube',
    'keyup input': 'pressEnter'
  },

  searchYouTube: function() {
    var query = this.$('input').val().trim();
    if (query) {
      this.collection.search(query);
    }
  },

  pressEnter: function(e) {
    if (e.keyCode === 13) {
      this.searchYouTube();
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
