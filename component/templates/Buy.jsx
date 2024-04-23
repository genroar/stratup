import Filter from '../molecules/Filter'
import BuyList from '../organisms/BuyList'

function Buy() {
  return (
    <div>
      <div className=' container pt-[10px] lg:flex gap-[40px] ' >
        <Filter />
        <BuyList />
      </div>
    </div>
  )
}

export default Buy