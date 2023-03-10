const React = require("react")
const Default = require("./layouts/Default")
// const bread = require("../models/bread.js")

function Index({ breads, bakers, title }) {
    return (
        <Default title={title}>
            <div className="titles">
                <h2>Ours Delicious Breads!</h2>
            </div>
            <div className="index-div">
                <ul>
                    {
                        breads.map((bread) => {
                            return (
                                <li key={bread._id}>
                                    <a className="showPage" href={`/breads/${bread._id}`}>
                                        {bread.name}
                                    </a>
                                    {/* <ul> {bread.getBakedBy()}</ul> */}
                                </li>

                            )
                        })
                    }

                </ul>
                <div>
                    {/* <img className="welcome-img" src="https://o.remove.bg/downloads/f9c2b0de-e0f9-4d2b-8f79-fb75c7348102/welcomebg-removebg-preview.png" alt="welcome logo" /> */}
                </div>
            </div>
            <div className="Bakers">
                <h3>Our Bakers!</h3>
                <ul>
                    {
                        bakers.map((baker) => {
                            return (
                                <li key={baker._id}>
                                    <a href={`/bakers/${baker._id}`}>{baker.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
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
