const React = require("react")
const Default = require("./layouts/Default")

function Edit({ bread, bakers}) {
    return (
        <Default>
            <div className="titles">
                <h2>Edit a Bread! </h2>
            </div>
            <form action={`/breads/${bread.id}?_method=PUT`} method="POST">

                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    defaultValue={bread.name}
                />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    defaultValue={bread.image}
                />
                <label htmlFor="baker">Baker</label>
                <select name="baker" id="baker" defaultValue={bread.baker}>
                    
                    {bakers.map((baker) => {
                        return(
                            <option value={baker.id} key={baker.id}>{baker.name}</option>
                        )
                    })}
                </select>

                <label htmlFor="hasGluten">Has Gluten?</label>
                <input
                    type="checkbox"
                    name="hasGluten"
                    id="hasGluten"
                    defaultChecked={bread.hasGluten}
                />
                <br />
                <input type="submit" />
            </form>
            <li>
                <a href="/breads" > Go Home</a>
            </li>

        </Default>
    )

}


module.exports = Edit