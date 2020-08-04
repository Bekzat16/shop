import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from './header'
import Logs from './logs'
import Basket from './basket'
import Catalog from './catalog'
import { getProducts, getRates} from '../redux/reducers/shop'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
    dispatch(getRates())
  }, [dispatch])
  return (
    <div>
      <Header />
      <div className="container mx-auto px-12 py-6">
        <Route exact path="/" component={() => <Catalog />} />
        <Route exact path="/logs" component={() => <Logs />} />
        <Route exact path="/basket" component={() => <Basket />} />
      </div>
    </div>
  )
}

export default Home
