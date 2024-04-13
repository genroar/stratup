import PropTypes from 'prop-types'
const AnchorTag2 = ({ href, children, onClick }) => {
  
  const anchorStyle = "cursor-pointer text-[16px] font-normal   "
  
  return (
    <a className={anchorStyle} href={href} onClick={onClick} >{children}</a>
  )
}

AnchorTag2.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default AnchorTag2