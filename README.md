# xxe-example

## there is 1 vulnerability

1. xxe in `index.vuln.js` line `12`

```js

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
```
