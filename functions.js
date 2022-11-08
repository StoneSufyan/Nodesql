const config = require('./config.json')
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: config.rds_host,
    user: config.rds_user,
    password: config.rds_password,
    port: config.rds_port,
    database: config.rds_db
});
connection.connect();


function hello(req, res) {
    res.send('Hello World');
    console.log("hello")
}

function buybookfunc(book_id) {
    connection.query(`select * from book_mast where book_id = "${book_id}" `
        , function (error, results, fields) {

            if (error) {
                console.log(error)
                // res.send("something went wrong")
                res.json({ error: error })
            } else if (results) {
                console.log('Successfully Bought Book ' + results[0].book_name + "For" + results[0].book_price + "$"
                );
                //  return 'Successfully Bought Book ' + results[0].book_name + "For" + results[0].book_price + "$"
                ;
                // console.log("book bought")


            }


        });

}
async function buybook(req, res) {

    console.log(req.query.book_id)
    res.send()


    //  a =  buybookfunc(req.query.book_id)
     
}
async function buybooks(req, res) {

    console.log(req.body)
    var a = req.body
    // .forEach(book_id => {
    //     buybookfunc(book_id)
        
    // });
    res.send()


    //  a =  buybookfunc(req.query.book_id)
     
}



function mapbook(book) {
    return [book.book_id, book.book_name, book.book_price].join(" ");
}

function getbooks(req, res) {

    console.log("getbooks")
    connection.query(`select * from book_mast`
        , function (error, results, fields) {

            if (error) {
                console.log(error)
                res.json({ error: error })
            } else if (results) {

                var books = results.map(mapbook)
                console.log(books)
                res.send(results)


            }


        });
}

module.exports = {
    hello,
    getbooks,
    buybook,
    buybooks,
}

