import app from './src/app'
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`⚡ Server running on port ${PORT}`)
})
