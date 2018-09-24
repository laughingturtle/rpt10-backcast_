var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.collection = new Videos(exampleVideoData);
    console.log(this.collection);
  },

  render: function() {
    this.$el.html(this.template());

    return this;
  },

  template: templateURL('src/templates/app.html')

});
