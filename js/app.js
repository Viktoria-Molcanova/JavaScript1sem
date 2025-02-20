/*Задание 1
• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

*/
  const musicCollection = {
  albums: [
    { title: "Группа крови", artist: "КИНО", year: "1988" },
    { title: "Судно", artist: "Molchat Doma", year: "2017" },
    { title: "Купе", artist: "Сова", year: "2024" }
  ],


  [Symbol.iterator]: function() {
    let index = 0;
    const albums = this.albums;

    return {
      next: function() {
        if (index < albums.length) {
          return { value: albums[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
/*
Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах.
Клиенты приходят и делают заказы на разные блюда.
Необходимо создать систему управления этими заказами, которая позволит:

• Отслеживать, какой повар готовит какое блюдо.
• Записывать, какие блюда заказал каждый клиент.

Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента.
В качестве ключей для клиентов используйте объекты.
*/
const chefs = {
  'Виктор': 'Пицца',
  'Ольга': 'Суши',
  'Дмитрий': 'Десерты'
};

const dishToChef = new Map();
dishToChef.set('Пицца "Маргарита"', 'Виктор');
dishToChef.set('Пицца "Пепперони"', 'Виктор');
dishToChef.set('Суши "Филадельфия"', 'Ольга');
dishToChef.set('Суши "Калифорния"', 'Ольга');
dishToChef.set('Тирамису', 'Дмитрий');
dishToChef.set('Чизкейк', 'Дмитрий');

const alexey = { name: 'Алексей' };
const maria = { name: 'Мария' };
const irina = { name: 'Ирина' };

const orders = new Map();
orders.set(alexey, ['Пицца "Пепперони"', 'Тирамису']);
orders.set(maria, ['Суши "Калифорния"', 'Пицца "Маргарита"']);
orders.set(irina, ['Чизкейк']);

console.log("Перечень заказов:");
for (const [client, dishes] of orders) {
  const dishesWithChefs = dishes.map(dish => `${dish} (готовит ${dishToChef.get(dish)})`);
  console.log(`Клиент ${client.name} заказал: ${dishesWithChefs.join(', ')}`);
}

