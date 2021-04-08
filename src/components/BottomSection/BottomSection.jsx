
import familyImg from "../../assets/homepage/family-gathering-mobile.jpg"

export const BottomSection = () => {


  return (
    <div className="bottom-section main-grid grid-col-full">
      <div className="bottom-container grid-col-center">
        <div className="main-content-container">
          <div className="img-section">
            <svg className="lines-svg" xmlns="http://www.w3.org/2000/svg" width="160" height="76"><g fill="#9E7F66" fill-rule="evenodd"><path d="M0 70h160v6H0zM0 56h160v6H0zM0 42h160v6H0zM0 28h160v6H0zM0 14h160v6H0zM0 0h160v6H0z" /></g></svg>
            <img src={familyImg} alt="" />
            <svg className="line-svg" xmlns="http://www.w3.org/2000/svg" width="71" height="7"><g fill="none" fill-rule="evenodd"><path fill="#9E7F66" d="M15 3h56v1H15z" /><circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" /></g></svg>
          </div>
          <div className="text-section">
            <h2>Family Gathering</h2>
            <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
            <button className="primary-button">BOOK A TABLE</button>
            <div className="list">
              <h3>FAMILY GATHERING</h3>
              <h3>SPECIAL EVENTS</h3>
              <h3>SOCIAL EVENTS</h3>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

