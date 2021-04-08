import { useHistory } from "react-router"



export const AppFooter = () => {

  const { push } = useHistory()

  const navTo = (location) => {
    push(location);
  }

  return (
    <div className="footer-section grid-col-full main-grid">
      <div className="footer-container grid-col-center">
        <h1 className="footer-logo" onClick={() => navTo('/')}>dine</h1>
        <div className="nav-item">
          <p>Marthwaite, Sedbergh</p>
          <p>Cumbria</p>
          <p>+00 44 123 4567</p>
        </div>
        <div className="nav-item">
          <p>OPEN TIMES</p>
          <p>MON - FRI: 09:00 AM - 10:00 PM</p>
          <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
        </div>
      </div>
    </div>
  )
}

