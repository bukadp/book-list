const baseUrl = 'http://localhost:3001/books/'

export const booksAPI = {
    async getData() {
        let response = await fetch(baseUrl)
        let data = await response.json()
        return data
    },
    async postBook(book) {
        await fetch((baseUrl), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(book)
        })
    },
    async deleteBook(id) {
        await fetch((baseUrl + id), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        await window.location.reload()
    },
    async editBook(book) {
        await fetch((baseUrl + book.id), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(book)
        })
    },
}

