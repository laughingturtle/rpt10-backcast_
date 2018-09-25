var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    this.fetch( {
      data: {
        q: query,
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      },
      success: function(data) {
        console.log('yay we have tubes!', data);
        // new VideoListView(data);
      },
      error: function(data) {
        console.log('boo, no tubes', data);
      }
    });
  },
  parse: function(response) {
    console.log('my returned data: ', response.items);
    return response.items;
  }
});
