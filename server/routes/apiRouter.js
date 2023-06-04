const router = require('express').Router();
const axios = require('axios');

router.get('/random', async(req, res) => {
  const options = {
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      part: 'snippet,id',
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '1cf4946cddmsh1acab0b3b1f40adp1537ffjsn59391fc76084',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.json({
      data: response.data
    })
  } catch (error) {
    res.json({
      error
    })
  }
})

router.get('/suggested/:id', async(req, res) => {
  const id = req.params.id

    const options = {
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      relatedToVideoId: `${id}`,
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '1cf4946cddmsh1acab0b3b1f40adp1537ffjsn59391fc76084',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.json({
      data: response.data
    })
  } catch (error) {
    res.json({
      error
    })
  }
});

router.get('/search/:q', async(req, res) => {
  const q = req.params.q

    const options = {
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: `${q}`,
      part: 'snippet,id',
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '1cf4946cddmsh1acab0b3b1f40adp1537ffjsn59391fc76084',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.json({
      data: response.data
    })
  } catch (error) {
    res.json({
      error
    })
  }
})

router.get('/vidio-comment/:id', async(req, res) => {
  const id = req.params.id

    const options = {
    url: 'https://youtube-v31.p.rapidapi.com/commentThreads',
    params: {
      part: 'snippet',
      videoId: `${id}`,
      maxResults: '100'
    },
    headers: {
      'X-RapidAPI-Key': '1cf4946cddmsh1acab0b3b1f40adp1537ffjsn59391fc76084',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.json({
      data: response.data
    })
  } catch (error) {
    res.json({
      error
    })
  }
})

router.get('/vidio-details/:id', async(req, res) => {
  const id = req.params.id

    const options = {
    url: 'https://youtube-v31.p.rapidapi.com/videos',
    params: {
      part: 'contentDetails,snippet,statistics',
      id: `${id}`
    },
    headers: {
      'X-RapidAPI-Key': '1cf4946cddmsh1acab0b3b1f40adp1537ffjsn59391fc76084',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.json({
      data: response.data
    })
  } catch (error) {
    res.json({
      error
    })
  }
})

router.get('/channel-details/:id', async(req, res) => {
  const id = req.params.id

    const options = {
    url: 'https://youtube-v31.p.rapidapi.com/channels',
    params: {
      part: 'snippet,statistics',
      id: `${id}`
    },
    headers: {
      'X-RapidAPI-Key': '1cf4946cddmsh1acab0b3b1f40adp1537ffjsn59391fc76084',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.json({
      data: response.data
    })
  } catch (error) {
    res.json({
      error
    })
  }
})

router.get('/channel-vidio/:id', async(req, res) => {
  const id = req.params.id

    const options = {
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      channelId: `${id}`,
      part: 'snippet,id',
      // order: 'date',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '1cf4946cddmsh1acab0b3b1f40adp1537ffjsn59391fc76084',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.json({
      data: response.data
    })
  } catch (error) {
    res.json({
      error
    })
  }
})

router.get('/playlist-video/:id', async(req, res) => {
  const id = req.params.id

    const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/playlistItems',
    params: {
      playlistId: `${id}`,
      part: 'snippet',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '1cf4946cddmsh1acab0b3b1f40adp1537ffjsn59391fc76084',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.json({
      data: response.data
    })
  } catch (error) {
    res.json({
      error
    })
  }
})

module.exports = router
