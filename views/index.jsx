const React = require("react")
const Default = require("./layouts/Default")

function Index ({breads, title}) {
    return (
        <Default title= {title}>
            <div className="titles">
                <h2>Ours Delicious Breads!</h2>
            </div>
            <ul>
                {
                    breads.map((bread, index) => {
                        return (
                          <li key={index}>
                            {/* classname for uppercase */}
                              <a className="showPage" href={`/breads/${bread.id}`}>
                                  {bread.name}
                              </a>
                              <ul> {bread.getBakedBy()}</ul>
                          </li>
                          
                        )
                    })
                }

            </ul>
            <div>
                <img src="https://o.remove.bg/downloads/3ec82f17-fa86-436b-8a63-09d5faf2dcd7/Screen_Shot_2023-01-30_at_10.39.54_PM-removebg-preview.png" alt="welcome logo"/>
            </div>
            <div className="newButton">
                  <a href="/breads/new">
                       <button>Add a new bread</button>
                  </a>
            </div>
        </Default>
    )
}

module.exports = Index