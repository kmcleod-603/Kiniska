import './Footer.scss'

/**
 * This component represents the footer in the store
 */
const Footer = () => {
  return (
    <div className="footer">
    <p className="footer-link"><a href="mailto:olorequests@sunlife.com"><FontAwesomeIcon icon="envelope" size="sm" /> Product Support</a></p>
    <p className="footer-link"><a href="https://xnet.dsgraphics.com/PTI/sunlife/downloads/tutorial.pdf" target="_blank"><FontAwesomeIcon icon="download" size="sm" /> Tutorial</a></p>
    <p className="footer-link"><a href="https://xnet.dsgraphics.com/PTI/sunlife/downloads/tutorial.pdf" target="_blank"><FontAwesomeIcon icon="video" size="sm" /> Tutorial</a></p>
    <p className="footer-link"><a href="mailto:helpdesk@dsgraphics.com"><FontAwesomeIcon icon="envelope" size="sm" /> Technical Support</a></p>
  </div>
  )
}

export default Footer
