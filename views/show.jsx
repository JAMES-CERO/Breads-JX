const React = require("react")
const bread = require("../models/bread")
const Default = require("./layouts/Default")

function Show({ bread}) {
    // make sure we are geting data in the terminal 
    console.log(bread.name)
    return (
        <Default>
            <h2> Show Page </h2>
            <h3 className="showPage">{bread.name}</h3>
            <h4>
                {bread.ingredients}
            </h4>
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
            <p> Made by {bread.baker}</p>
            <li>
                <a href="/breads" > Go Home</a>
            </li>

            <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                <input  type='submit' value="DELETE" />
            </form>

            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>



        </Default>
    )
}

module.exports = Show