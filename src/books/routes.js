const {Router} = require("express")
const bookRouter = Router()

const {addBook, getAllBooks, updateBook, deleteBook, searchBook, deleteBookSeries, searchAndUpdate, deleteAll} = require("./controllers")

bookRouter.post("/books/addBook", addBook)
bookRouter.get("/books/getBooks", getAllBooks)
bookRouter.put("/books/updateBooks", updateBook)
bookRouter.delete("/books/deleteBook", deleteBook)
bookRouter.get("/books/searchBooks/:title", searchBook)
bookRouter.delete("/books/deleteBookSeries/:title", deleteBookSeries)
bookRouter.put("/books/searchAndUpdateBook", searchAndUpdate)
bookRouter.delete("/books/deleteAll", deleteAll)

module.exports = bookRouter