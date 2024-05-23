const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

  const getTitle = function(arr) {
    return arr.map((book) => book.title)
  }