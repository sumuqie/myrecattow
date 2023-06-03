import React, { useEffect, useState } from 'react'
import { getTopPlaylist } from '@/service/index'
// import { useRequest } from 'ahooks'
// Pick
// Record
// Reuired
// Partial
// Omit
// type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
export default function Home() {
  const [songListType, setSongListType] = useState([])
  console.log(songListType)

  useEffect(() => {
    getTopPlaylist()
      .then((res) => {
        setSongListType(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  // const { data: topPlaylist } = useRequest(() => getTopPlaylist())
  return <div>1</div>
}
