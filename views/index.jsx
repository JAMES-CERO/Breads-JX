const React = require("react")
const Default = require("./layouts/Default")

function Index ({breads, title}) {
    return (
        <Default title= {title}>
            <h6>Index Page</h6>
            <h2>Ours Delicious Breads!</h2>
            {/* <p>I have {breads[0].name} bread!</p> */}
            <ul>
                {
                    breads.map((bread, index) => {
                        return (
                          <li key={index}>
                            {/* classname for uppercase */}
                              <a className="showPage" href={`/breads/${bread.id}`}>
                                  {bread.name}
                              </a>
                              <li> {bread.getBakedBy()}</li>
                          </li>
                          
                        )
                    })
                }

            </ul>
            <div className="newButton">
                  <a href="/breads/new">
                       <button>Add a new bread</button>
                  </a>
            </div>
        </Default>
    )
}

module.exports = Index