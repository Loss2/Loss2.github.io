// Массив с книгами
const books = [
    {
        title: "Война и мир",
        author: "Лев Толстой",
        price: 450,
        image: "images/book1.jpg"
    },
    {
        title: "Преступление и наказание",
        author: "Фёдор Достоевский",
        price: 380,
        image: "images/book2.jpg"
    },
    {
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        price: 420,
        image: "images/book3.jpg"
    },
    {
        title: "1984",
        author: "Джордж Оруэлл",
        price: 350,
        image: "images/book4.jpg"
    }
];

// Функция для отображения книг
function displayBooks() {
    const bookContainer = document.getElementById('bookContainer');
    
    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book-card');
        
        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Автор: ${book.author}</p>
            <p>Цена: ${book.price} руб.</p>
            <button>В корзину</button>
        `;
        
        bookContainer.appendChild(bookElement);
    });
}

// Запускаем функцию при загрузке страницы
window.onload = displayBooks;
