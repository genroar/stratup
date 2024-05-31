import Filter from '../molecules/Filter'
import BuyList from '../organisms/BuyList'
import Container from '../atoms/Container'

function Buy() {
  return (
    <div>
      <div className='pt-[10px]  ' >
        <Container>
          <div className='xl:flex lg:flex md:flex block gap-[20px]'>
            <div className='xl:w-[25%] lg:w-[25%] md:w-[25%] xl:block lg:block md:block sm:block hidden'>
              <Filter />
            </div>
            <div className='xl:w-[75%] lg:w-[75%] md:w-[75%] sm:w-[100%] w-[100%]'>
              <BuyList />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Buy