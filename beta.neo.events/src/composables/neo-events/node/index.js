import axios from 'axios'

export async function getNodeStatus() {
  let data;

  try {
    const res = await axios.get('/api/v1/node')
    data = res.data
  } catch (err) {
    data = {
      exception: err.message,
    }
  }
  return data
}