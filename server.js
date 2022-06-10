const express = require('express')
const app = express()

let companies = [
    {
        // 'id' = 1,
        'company': 'amazon',
        'industry': 'technology'
    },
    {
        // 'id' = 2,
        'company': 'apple',
        'industry': 'technology',
    },
    {
        'company': 'microsof',
        'industry': 'technology'
    }
]

app.get('/api', (req, res) => {
    res.json(companies)
})

const PORT = 3002
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on ${PORT}`)
})