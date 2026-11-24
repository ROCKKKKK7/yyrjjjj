export interface Product {
    id: number;
    /** Путь к картинке, например "/images/plate-deep.jpg". Если не задан — показывается заглушка «фото». */
    image?: string;
    title: string;
    description: string;
    price: number;
}

export const products: Product[] = [
    {
        id: 1,
        title: 'тарелка глубокая',
        description: 'тарелка диаметром 30 см с высокими бортиками',
        price: 2500
    },
    {
        id: 2,
        title: 'кружка',
        description: 'кружка объемом 350 мл для самого вкусного кофе',
        price: 2000
    },
    {
        id: 3,
        title: 'ваза',
        description: 'ваза объемом 2 литра для ваших ярких букетов',
        price: 4000
    },
    {
        id: 4,
        title: 'тарелка объемная',
        description: 'тарелка-блюдце диаметром 20 см под разные вкусности',
        price: 3500
    }
];
