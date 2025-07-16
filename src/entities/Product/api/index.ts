import { IProduct } from '../model';

const productsMock: IProduct[] = [
  {
    id: 1,
    name: 'Брелок - карабин для ключей JOBON',
    image: 'https://image.dev.cluster.kznexpess.com/bu4m8tith9d8oq82rlk0/original.jpg',
  },
  {
    id: 2,
    name: 'Подвеска на ремень для ключей',
    image: 'https://image.dev.cluster.kznexpess.com/bu46fghs4p4coefvb620/original.jpg',
  },
  {
    id: 3,
    name: 'Гравитационный держатель для смартфонов автомобильный',
    image: 'https://image.dev.cluster.kznexpess.com/bt4bvgrbkrvj2slul3k0/original.jpg',
  },
  {
    id: 4,
    name: 'Держатель бит магнитный с регулировкой ограничителя',
    image: 'https://image.dev.cluster.kznexpess.com/bs1kgthaof0od3ket6pg/original.jpg',
  },
  {
    id: 5,
    name: 'Шаровой карданный переходник для торцевой головки',
    image: 'https://image.dev.cluster.kznexpess.com/bs1j04t667frrduso9gg/original.jpg',
  },
  {
    id: 6,
    name: 'Линейка-трафарет многофункциональная',
    image: 'https://image.dev.cluster.kznexpess.com/brr0dlrbkrvhr55if6j0/original.jpg',
  },
  {
    id: 7,
    name: 'Контурный дубликатор пластинчатый',
    image: 'https://image.dev.cluster.kznexpess.com/bsg251haof0pupn05j7g/original.jpg',
  },
  {
    id: 8,
    name: 'Магнитный держатель телефона на воздуховод автомобиля',
    image: 'https://image.dev.cluster.kznexpess.com/bt4v9pses05mvksk48e0/original.jpg',
  },
  {
    id: 9,
    name: 'Приспособление ФЭСТ ремня безопасности для беременных',
    image: 'https://image.dev.cluster.kznexpess.com/bnlngg19dnrje17spjp0/original.jpg',
  },
];

const Api = {
  getProducts: async () => {
    try {
      return productsMock;
    } catch (e: any) {
      throw new Error('Failed to get list of products');
    }
  },

  addToFavorite: async (id: number) => Promise.resolve(id),
};

export default Api;
