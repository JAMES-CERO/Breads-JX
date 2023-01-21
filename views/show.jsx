const React = require("react")
const bread = require("../models/bread")
const Default = require("./layouts/Default")

function Show ({bread}) {
    // make sure we are geting data in the terminal 
    console.log(bread.name)
    return (
        <Default>
            <h2> Show Page </h2>
            <h3 className="showPage">{bread.name}</h3>

            <p>
                It 
                {
                    bread.hasGluten
                    ? <span> does </span>
                    : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name} ></img>
            <li>
                <a href="/breads" > Go Home</a>
            </li>
        </Default>
    )
}

module.exports = Show