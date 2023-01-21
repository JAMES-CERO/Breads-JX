const React = require('react')
const Default = require('./layouts/Default')

function New () {
    return (
      <Default>
        <h2>Add a new bread</h2>
        <form action='/breads' method='POST'>
          <label htmlFor="name">Name</label>
          <input
          className='uppercase'
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="image">Image</label>
          <input type="url" id="website" name="image"
  pattern="https?://.+" title="Include http://"></input>

          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked
          />
          <br />
          <input className='submit-button' type="submit"/>
        </form>
      </Default>
    )
}

module.exports = New

