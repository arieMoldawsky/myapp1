import { items } from "../../item"



export const MainSection = () => {


  return (
    <div className="main-section main-grid grid-col-full">
      <div className="main-section-container grid-col-center">
        <div className="main-content-container">
          <div className="text-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7"><g fill="none" fill-rule="evenodd"><path fill="#9E7F66" d="M15 3h56v1H15z" /><circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" /></g></svg>
            <h2>A few highlights from our menu</h2>
            <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
          </div>
          <div className="dishes-content">
            {items.map(item => (
              <div key={item.title} className="item-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7"><g fill="none" fill-rule="evenodd"><path fill="#9E7F66" d="M15 3h56v1H15z" /><circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" /></g></svg>
                <img src={item.imgUrl} alt={item.title} />
                <div className="item-text-container">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

