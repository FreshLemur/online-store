export interface ProductData {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const productsData: ProductData[] = [
  {
    id: 1,
    name: "Смартфон Apple iPhone 13",
    price: 999,
    description:
      "Новітній смартфон від Apple з потужним процесором A15 Bionic.",
    imageUrl: "https://picsum.photos/200/200?random=1",
  },
  {
    id: 2,
    name: "Ноутбук Dell XPS 13",
    price: 1299,
    description: "Компактний та продуктивний ноутбук з екраном 13 дюймів.",
    imageUrl: "https://picsum.photos/200/200?random=2",
  },
  {
    id: 3,
    name: "Бездротові навушники Sony WH-1000XM4",
    price: 349,
    description:
      "Навушники з активним шумозаглушенням та високою якістю звуку.",
    imageUrl: "https://picsum.photos/200/200?random=3",
  },
  {
    id: 4,
    name: "Смарт-годинник Samsung Galaxy Watch 4",
    price: 299,
    description:
      "Розумний годинник з численними функціями для фітнесу та здоров'я.",
    imageUrl: "https://picsum.photos/200/200?random=4",
  },
  {
    id: 5,
    name: "Планшет Apple iPad Air",
    price: 599,
    description: "Потужний і легкий планшет для роботи та розваг.",
    imageUrl: "https://picsum.photos/200/200?random=5",
  },
];

export default productsData;
