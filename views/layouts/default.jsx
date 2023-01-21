const React = require("react")

function Default(html) {
    return (
        <html>
            <head>
                <title>{html.title || 'Default'}</title>
            </head>
            <body>
                <h1>HTML Rendered!</h1>
                <div className="wrapper">
                    <header>
                        <h1>
                            <a href="/breads" >BreadCRUD</a>
                        </h1>
                    </header>
                </div>
                <div className="container" >
                    {html.children}
                </div>
            </body>
        </html>
    )
}




module.exports = Default