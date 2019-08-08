module.exports.getGamerInfo = async (req, res, fetch) => {
  try {
    const { platform, gamertag } = req.params;
    const headers = {
      'TRN-Api-Key': process.env.TRACKER_API_KEY
    };

    const response = await fetch(
      `${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`,
      { headers }
    );

    const data = await response.json();

    if (data.errors && data.errors.length > 0) {
      return res.status(404).json({ error: 'Profile Not Found!' });
    }

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
