const express = require('express')
const app = express()
const port = 3000

var libxmljs = require("libxmljs");

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const Vulnerability1 = (req, res) => {
    if (req.files.products && req.files.products.mimetype=='text/xml'){

		var products = libxmljs.parseXmlString(req.files.products.data.toString('utf8'), {noent:true,noblanks:true})

		products.root().childNodes().forEach( product => {

			var newProduct = new db.Product()

			newProduct.name = product.childNodes()[0].text()

			newProduct.code = product.childNodes()[1].text()

			newProduct.tags = product.childNodes()[2].text()

			newProduct.description = product.childNodes()[3].text()

			newProduct.save()

		})
    }
    res.end('hello world')
}


app.get('/vuln1', Vulnerability1);