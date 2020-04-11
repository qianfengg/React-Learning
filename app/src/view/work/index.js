import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Frame from '../../common/component/frame'
import Skeleton from '../../common/component/skeleton'
import Tab from '../../common/component/tab'

import '../../common/css/miiaov.css'

import getWork from '../../store/action/getWork'

function Work (props) {
  let { data, loading, dispatch, match } = props
  let { id } = match.params
  console.log(data, loading)
  useEffect(() => {
    dispatch(getWork(id))
    return () => {
      dispatch({
        type: 'WORK_RESET'
      })
    }
  }, [])
  return (
    <div>
      <Frame>
        {
          loading ? <Skeleton/> : (
            <div className="work-details">
              <Tab
                data={ data.image_path.map(item => item.path) }
                render={(src) => <img src={src}/>}
              />
            </div>
          )
        }
      </Frame>
      <footer className="miiapv_footer">
        回复本帖
      </footer>
    </div>
  )
}

export default connect(state => ({...(state.work)}))(Work)