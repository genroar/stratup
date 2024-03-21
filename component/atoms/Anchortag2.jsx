import PropTypes from 'prop-types'

const AnchorTag2 = ({ href, children }) => {
  
  const anchorStyle = "cursor-pointer text-[16px] font-normal   "
  
  return (
    <a className={anchorStyle} href={href}>{children}</a>
  )
}

AnchorTag2.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default AnchorTag2