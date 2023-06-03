import request from './request'

export const getSongListType = async () => {
  const res = await request.get('/playlist/catlist')
  return res.data.sub
}

interface IGetTopPlaylistParams {
  order?: 'new' | 'hot'
  cat?: string
  limit?: number
  offset?: number
}
export const getTopPlaylist = async (params?: IGetTopPlaylistParams) => {
  const res = await request.get('/top/playlist', { params })
  return res.data.playlists
}
