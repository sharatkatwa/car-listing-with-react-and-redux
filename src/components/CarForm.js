import { addCar, changeCost, changeName } from '../store'
import { useDispatch, useSelector } from 'react-redux'

function CarForm() {
  const dispatch = useDispatch()

  const { name, cost } = useSelector((state) => {
    return { name: state.form.name, cost: state.form.cost }
  })

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value))
  }

  const handleCostChange = (e) => {
    const costValue = parseInt(e.target.value) || 0
    dispatch(changeCost(costValue))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addCar({ name, cost }))
  }

  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
          <div className='field'>
            <label className='label'>Name</label>
            <input
              className='input is-expanded'
              onChange={handleNameChange}
              value={name}
            />
          </div>

          <div className='field'>
            <label className='label'>Cost</label>
            <input
              type='number'
              className='input is-expanded'
              value={cost || ''}
              onChange={handleCostChange}
            />
          </div>
          <div className='field'>
            <button className='button is-link'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CarForm
