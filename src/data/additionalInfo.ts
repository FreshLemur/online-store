interface AdditionalInfo {
  id: number;
  details: string[];
}

const additionalInfo: AdditionalInfo[] = [
  {
    id: 1,
    details: [
      "Розмір дисплея: 6.1 дюймів",
      "Камера: 12 МП основна камера, 12 МП ультраширококутна камера",
      "Процесор: A15 Bionic",
      "Акумулятор: До 19 годин відтворення відео",
      "Захист від води та пилу: IP68",
    ],
  },
  {
    id: 2,
    details: [
      "Процесор: Intel Core i7-1185G7",
      "Оперативна пам'ять: 16 ГБ LPDDR4x",
      "Зберігання: 512 ГБ SSD",
      "Дисплей: 13.4 дюймів, 1920x1200, 60Hz",
      "Вага: 1.2 кг",
      "Порт USB-C з підтримкою Thunderbolt 4",
    ],
  },
  {
    id: 3,
    details: [
      "Активне шумозаглушення: Так",
      "Підтримка Bluetooth: Версія 5.0",
      "Час роботи від батареї: До 30 годин",
      "Підтримка аудіокодеків: LDAC, SBC, AAC",
    ],
  },
  {
    id: 4,
    details: [
      "Процесор: Exynos W920",
      "Дисплей: 1.4 дюйми Super AMOLED",
      "Підтримка GPS: Так",
      "Підтримка LTE: Опціонально",
      "Час роботи: До 40 годин",
    ],
  },
  {
    id: 5,
    details: [
      "Дисплей: 10.9 дюймів Liquid Retina",
      "Процесор: A14 Bionic",
      "Зберігання: 256 ГБ",
      "Підтримка Apple Pencil: 2-го покоління",
      "Підтримка Magic Keyboard: Так",
    ],
  },
];

export default additionalInfo;
