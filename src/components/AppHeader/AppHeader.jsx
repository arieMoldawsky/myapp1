import { useHistory } from "react-router"



export const AppHeader = () => {

  const { push } = useHistory()

  const navTo = (location) => {
    push(location);
  }

  return (
    <div className="header-section grid-col-full main-grid">
      <div className="header-container grid-col-center">
        <h1 className="header-logo" onClick={() => navTo('/')}>LOGO<span>.</span></h1>
        <div className="nav-item" onClick={() => navTo('/about')}>About</div>
      </div>
    </div>
  )
}

