# wrap-to-handle

package to wrap async functions on express router and error handling using express default handling.
Necessary if you have severals route functions with try/catch to handle with.

## Without wrapt-to-handle: 

```
const express = require('express')

const app = express()

app.get('/persons', async (req, res) => {
  try {
    const persons = await findPersons({ ...req.query })
    return res.json({ persons })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

app.post('/persons', async (req, res) => {
  try {
    const person = await createPerson(req.body)
    return res.json({ person })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})
```

## With wrap-to-handle:
```
const express = require('express')
const { wrapAsync, errorHandler } = require('wrap-to-handle')

const app = express()

app.get('/persons', wrapAsync(async (req, res) => {
  const persons = await findPersons({ ...rer.query })
  return res.json({ persons })
})

app.post('/persons', wrapAsync(async (req, res) => {
  const person = await createPerson({ ...req.body })
  return res.json({ person })
})

app.use(errorHandler)
```