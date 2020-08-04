import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLogs } from '../redux/reducers/logs'

const Logs = () => {
  const dispatch = useDispatch()
  const logs = useSelector((s) => s.logs.logs)
  useEffect(() => {
    dispatch(setLogs())
  })
  return (
    <div>
      {logs.map((el) => (
        <div key={el.event} className="border-3 border-gray-200 mb-2 p-3">
          {el.time} : {el.event}
        </div>
      ))}
    </div>
  )
}

export default Logs
