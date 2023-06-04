const router = require('express').Router();
const axios = require('axios');

router.get('/random', async(req, res) => {
  const options = {
    url: `${process.env.API_KEY}/search`,
    params: {
      part: 'snippet,id',
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_URL
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
    url: `${process.env.API_KEY}/search`,
    params: {
      relatedToVideoId: `${id}`,
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_URL
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
    url: `${process.env.API_KEY}/search`,
    params: {
      q: `${q}`,
      part: 'snippet,id',
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_URL
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
    url: `${process.env.API_KEY}/commentThreads`,
    params: {
      part: 'snippet',
      videoId: `${id}`,
      maxResults: '100'
    },
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_URL
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
    url: `${process.env.API_KEY}/videos`,
    params: {
      part: 'contentDetails,snippet,statistics',
      id: `${id}`
    },
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_URL
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
    url: `${process.env.API_KEY}/channels`,
    params: {
      part: 'snippet,statistics',
      id: `${id}`
    },
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_URL
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
    url: `${process.env.API_KEY}/search`,
    params: {
      channelId: `${id}`,
      part: 'snippet,id',
      // order: 'date',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_URL
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
    url: `${process.env.API_KEY}/playlistItems`,
    params: {
      playlistId: `${id}`,
      part: 'snippet',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_URL
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
