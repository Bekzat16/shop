import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToSelection, removeFromSelection } from '../redux/reducers/shop'

const Basket = () => {
  const dispatch = useDispatch()
  const catalog = useSelector((s) => s.shop.products)
  const selected = useSelector((s) => s.shop.selected)
  const currency = useSelector((s) => s.shop.currency)
  const base = useSelector((s) => s.shop.base)
  const cart = catalog.filter((el) => Object.keys(selected).includes(el.id))
  const total = Object.keys(selected)
    .reduce((acc, rec) => {
      return (
        acc + cart.find((item) => item.id === rec).price * (currency[base] || 1) * selected[rec]
      )
    }, 0)
    .toFixed(2)
  const ratesSymbols = {
    USD: '$',
    EUR: '€',
    CAD: 'C$'
  }
  return (
    <div>
      {cart.map((el) => {
        return (
          <div className="flex flex-wrap border-2 border-gray-200 mb-2 p-3" key={el.id}>
            <div className="w-1/2">{el.title}</div>
            <div className="w-1/2">
              <div className="quantity flex justify-center">
                <button
                  type="button"
                  className="border-2 border-gray-200 py-1 px-2"
                  onClick={() => dispatch(removeFromSelection(el.id))}
                >
                  -
                </button>
                <span className="inline-block px-5">{selected[el.id] || 0}</span>
                <button
                  type="button"
                  className="border-2 border-gray-200 py-1 px-2"
                  onClick={() => dispatch(addToSelection(el.id))}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )
      })}
      <div className="text-right">
        <span>
          Total: {total} {ratesSymbols[base]}
        </span>
      </div>
    </div>
  )
}

export default Basket
