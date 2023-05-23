`use strict`;

window.onscroll = function () {
  const navbar = document.querySelector(".navbar");
  const sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  const scrollToTopButton = document.querySelector(".scroll-to-top-button");

  // Отображаем кнопку для возврата наверх страницы после прокрутки
  if (window.pageYOffset > 0) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

// Функция для плавной прокрутки страницы наверх
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


 function getDayInfo(dateString) {
   const months = [
     "Января",
     "Февраля",
     "Марта",
     "Апреля",
     "Мая",
     "Июня",
     "Июля",
     "Августа",
     "Сентября",
     "Октября",
     "Ноября",
     "Декабря",
   ];

   const days = [
     "Воскресенье",
     "Понедельник",
     "Вторник",
     "Среда",
     "Четверг",
     "Пятница",
     "Суббота",
   ];

   const date = new Date(dateString);
   const dayOfWeek = days[date.getDay()];
   const weekNumber = Math.ceil(date.getDate() / 7);
   const month = months[date.getMonth()];
   const year = date.getFullYear();

   return `${dayOfWeek}, ${weekNumber} неделя ${month} ${year} года`;
 }


 const productDates = document.getElementsByClassName("product-date");
 for (let i = 0; i < productDates.length; i++) {
   const dateString = "05.23.2023"; 
   const formattedDate = getDayInfo(dateString);
   productDates[i].textContent = formattedDate;
 }


   function showBuyForm() {
     const modal = document.getElementById("buyModal");
     modal.style.display = "block";
   }

   function closeBuyForm() {
     const modal = document.getElementById("buyModal");
     modal.style.display = "none";
   }

   function submitForm(event) {
     event.preventDefault(); // Предотвратить отправку формы
     // Обработка отправки формы - здесь вы можете добавить свой код обработки данных формы
     alert("Форма отправлена!");
     closeBuyForm(); // Закрыть модальное окно после отправки
   }


window.onload = function () {
  var categories = document.querySelectorAll("footer ul li a");
  for (var i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", function (event) {
      event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
      var pageUrl = this.getAttribute("href");
      window.location.href = pageUrl; // Переходим на страницу с контентом категории
    });
  }
};

// Получаем кнопку переключения темы и добавляем обработчик события по клику
const themeToggleButton = document.getElementById('theme-toggle-button');
themeToggleButton.addEventListener('click', toggleTheme);

// Функция переключения темы
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');
}
