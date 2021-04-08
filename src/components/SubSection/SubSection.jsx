
import enjoyablePlace from "../../assets/homepage/enjoyable-place-desktop.jpg";
import localyPlace from "../../assets/homepage/locally-sourced-desktop.jpg";


export const SubSection = () => {


  return (
    <div className="sub-section main-grid grid-col-full">
      <div className="sub-container grid-col-center">
        <img className="enjoyable-img" src={enjoyablePlace} alt="" />
        <img className="localy-img" src={localyPlace} alt="" />
        {/* <svg className="lines-pattern" xmlns="http://www.w3.org/2000/svg" width="160" height="76"><g fill="#9E7F66" fill-rule="evenodd"><path d="M0 70h160v6H0zM0 56h160v6H0zM0 42h160v6H0zM0 28h160v6H0zM0 14h160v6H0zM0 0h160v6H0z"/></g></svg> */}
        <div className="first-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="895" height="320"><path fill="#5C6779" fill-rule="evenodd" d="M795 0H0v320h895V100C895 44.772 850.228 0 795 0z" opacity=".077" /></svg>
          <div className="sub-first-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7"><g fill="none" fill-rule="evenodd"><path fill="#9E7F66" d="M15 3h56v1H15z" /><circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" /></g></svg>
            <h2>Enjoyable place for all the family</h2>
            <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
          </div>
        </div>
        <div className="second-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="895" height="320"><path fill="#5C6779" fill-rule="evenodd" d="M100 0h795v320H0V100C0 44.772 44.772 0 100 0z" opacity=".077" /></svg>          <div className="sub-second-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7"><g fill="none" fill-rule="evenodd"><path fill="#9E7F66" d="M15 3h56v1H15z" /><circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" /></g></svg>
            <h2>The most locally sourced food</h2>
            <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

