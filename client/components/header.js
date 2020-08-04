import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setBase } from '../redux/reducers/shop'

const Header = () => {
  const dispatch = useDispatch()
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div>
        {['USD', 'EUR', 'CAD'].map((el, index) => {
          return (
            <button
              /* eslint-disable-next-line react/no-array-index-key */
              key={index}
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => dispatch(setBase(el))}
            >
              {el}
            </button>
          )
        })}
      </div>
      <div className="text-white">
        <Link to="/" className="mr-3">
          Home
        </Link>
        <Link to="/basket" className="mr-3">
          Basket
        </Link>
        <Link to="/logs">Logs</Link>
      </div>
    </nav>
  )
  // return (
  //   <nav className="flex items-center justify-between flex-wrap bg-blue-800 py-4 px-24">
  //     <div>
  //       <button type="button" className="bg-blue-600 hover:bg-blue-500 rounded text-white p-2">
  //         USD
  //       </button>
  //       <button type="button" className="bg-blue-600 hover:bg-blue-500 rounded text-white p-2 mx-3">
  //         EUR
  //       </button>
  //       <button type="button" className="bg-blue-600 hover:bg-blue-500 rounded text-white p-2">
  //         CAD
  //       </button>
  //     </div>
  //     <div className="flex items-center flex-shrink-0 text-white mr-6">
  //       <NavLink to="/" className="text-white font-bold mr-5">
  //         Home
  //       </NavLink>
  //       <NavLink to="/logs" className="text-white font-bold mr-5">
  //         Logs
  //       </NavLink>
  //       <NavLink to="/basket" className="text-white font-bold">
  //         Basket
  //       </NavLink>
  //     </div>
  //   </nav>
  // )
}

export default React.memo(Header)
