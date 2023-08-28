const dashboardView = async (req, res) => {
  try {
    const token = process.env.AUTH_REFRESH_TOKEN
    res.send('hello world!')
    console.log(token, '<-- token dari env');
  } catch (error) {
    console.log(error, '<-- error dashboard view')
  }
}

module.exports = { dashboardView }