var Videos = Backbone.Collection.extend({

  model: Video,
  //url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet,id&q=${query}&maxResults=5',
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        console.log('Youtube Works! yay!');
        console.log('our data = ', data);

      },
      error: function (data) {
        console.error('youtube: Failed to receive data', data);
      }
    });
  }
});