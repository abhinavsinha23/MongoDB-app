const Book = require("./model")

// CREATE
const addBook = async (req, res) => {

    try {
        // const newBook = await Book.create({
        //     title: req.body.title,
        //     author: req.body.author,
        //     genre: req.body.genre
        // })
        console.log(req.body)
        const newBook = await Book.create(req.body)
        const successResponse = {
            message: "Success",
            newBook: newBook
        }
        res.status(201).json(successResponse)
    }
    catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({})

        const successResponse = {
            message: "success",
            books: allBooks
        }
        res.status(200).json(successResponse)
    }
    catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}

const searchBook = async (req, res) => {
    try {
        const book = await Book.find({title: req.params["title"]})
        const successResponse = {
            message: "success",
            book: book
        }
        res.status(200).json(successResponse)
    }
    catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}

const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findOneAndUpdate({title: req.body.title}, {author: req.body.author})
        const successResponse = {
            message: "success",
            updatedBook: updatedBook
        }
        res.status(200).json(successResponse)
    }
    catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}

const searchAndUpdate = async (req, res) => {
    try {
        const searchedBook = await Book.updateOne({title: req.body.title}, {[req.body.key]: req.body.newKey})

        const successResponse = {
            message: "success",
            searchedBook: searchedBook
        }
        res.status(200).json(successResponse)
    }
    catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}

const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.deleteOne({title: req.body.title})
        const successResponse = {
            message: "success",
            deletedBook: deletedBook
        }
        res.status(200).json(successResponse)
    }
    catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}

const deleteBookSeries = async (req, res) => {
    try {
        
        const bookSeries = await Book.deleteMany({title: {$regex: req.params['title']}})
        const successResponse = {
            message: "success",
            deletedBookSeries: bookSeries
        }
        res.status(200).json(successResponse)
    }
    catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}

const deleteAll = async (req, res) => {
    try {
        const deletedBooks = await Book.deleteMany({})
        const successResponse = {
            message: "success",
            deletedBooks: deletedBooks
        }
        res.status(200).json(successResponse)
    }
    catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}

module.exports = {
    addBook,
    getAllBooks,
    updateBook,
    deleteBook,
    searchBook,
    deleteBookSeries,
    searchAndUpdate,
    deleteAll
}