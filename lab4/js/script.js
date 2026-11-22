class OrderForm {
    constructor(name, email, candle, delivery, comment, agree) {
        // this — это создаваемый объект, т.к. вызов идёт через new
        this.name = name;
        this.email = email;
        this.candle = candle;
        this.delivery = delivery;
        this.comment = comment;
        this.agree = agree;
    }

    // метод попадёт в OrderForm.prototype, а не в каждый объект
    print() {
        console.log("Новый заказ:");
        console.log("Имя: " + this.name);
        console.log("Email: " + this.email);
        console.log("Свеча: " + this.candle);
        console.log("Доставка: " + this.delivery);
        console.log("Комментарий: " + (this.comment || "нет"));
        console.log("Согласие: " + (this.agree ? "да" : "нет"));
    }
}

// Обработчик отправки формы
const form = document.getElementById("order-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const candle = document.getElementById("candle").value;
    const delivery = document.querySelector('input[name="delivery"]:checked').value;
    const comment = document.getElementById("comment").value;
    const agree = document.getElementById("agree").checked;
    
    if (!agree) {
        alert("Поставьте галочку согласия на обработку данных");
        return;
    }
    const order = new OrderForm(name, email, candle, delivery, comment, agree);
    order.print();

    alert("Заказ отправлен! Результат в консоли.");
});