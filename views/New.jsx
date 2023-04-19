const React = require('react')


function New() {
    return(
        <form action='/pokemon' method='POST'>
            Name: <input type='text' name='name'/>
            <br/>
            Picture: <input type='text' name='img'/>
            <br/>
            <input type='submit' value='Create Your New Pokemon!'/>
        </form>
    )
}

module.exports = New;
