import PropTypes from 'prop-types'

const Paragraph = ({ children }) => {
  return (
    <p className='text-[18px] font-light text-gray-900 ' >{ children }</p>
  )
}

Paragraph.propTypes = {
    children: PropTypes.node.isRequired
}

export default Paragraph