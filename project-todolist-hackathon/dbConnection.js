const { Pool } = require('pg')

const client = new Pool({
    connectionString: 'postgres://cqntpzbsejwpmg:b49298ce3bc73d668f8db19d172c9e5135988752412da99628ce49a6aef7dc8c@ec2-52-200-215-149.compute-1.amazonaws.com:5432/d672r4e82pbklm',
    ssl: {
        rejectUnauthorized: false
    }
})

client.connect()

// function connectTeste() {
//     client.query('SELECT $1:: text as message', ['Olá mundo'], (error, result) => {
//         console.log(result)
//     })
// }

// connectTeste()
module.exports = client