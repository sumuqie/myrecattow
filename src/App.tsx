import React from 'react'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
// import Bar from '@/components/Bar'
import Home from './views/Home'
// 如何提取其他组件的props类型
// 对于自定义组件或者第三方组件 我们使用typeof计算组件类型后提取
// React.ComponentProps<T>
// const a: React.ComponentProps<typeof Bar> = { a: 1, c: {} }
// console.log(a.a)
// 对于内置的jsx元素的类型 我们直接使用标签名字字符串来计算
// const b: React.ComponentProps<"a">

function App() {
  return (
    <>
      {/* <Bar */}
      a={1}
      c=
      {{
        width: '100px',
        height: '100px',
        backgroundColor: 'red'
      }}
      {/* /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
