import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import Frame from '../../common/component/frame'
import Tab from '../../common/component/tab'
import getLecturers from '../../store/action/getLecturers'

import '../../common/css/teacher.css'

function Lecturer (props) {
  let { data, dispatch } = props;
  let newData = []; //一共拿到9个数据，3个一组
  useEffect(() => {
    dispatch(getLecturers())
  }, [])
  // console.log(data)
  for (let i = 0; i < data.length; i += 3) {
    newData.push([
      data[i],
      data[i + 1],
      data[i + 2]
    ])
  }
  console.log(newData)
  return (
    <Frame>
      <div className="teacher_banner">
        <h2><span>妙味团队</span></h2>
        { data.length < 1 ? '' : <Tab data={ newData } render={(data) => {
          return (
            <ul className="lecturer_list">
              {
                data.map(item => {
                  return (
                    <li key={item.id}>
                      <img src={item.icon}/>
                      <p>{item.title}</p>
                    </li>
                  )
                })
              }
            </ul>
          )
        }} /> }
      </div>
    </Frame>
  )
}

export default connect(state => state.lecturers)(Lecturer)