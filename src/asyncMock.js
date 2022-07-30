const products = [
    {
        id: '1',
        name: 'Los suicidas del fin del mundo',
        author: 'Leila Guerriero',
        price: 2500,
        picture: 'https://i.ibb.co/gVFTtYt/portada-los-suicidas-del-fin-del-mundo-leila-guerriero.jpg',
        alt: 'Portada del libro Los suicidas del fin del mundo',
        stock: 20,
        category: 'Crónicas',
        description: 'Descripción de Los suicidas del fin del mundo'
    },
    {
        id: '2',
        name: 'Rayuela',
        author: 'Julio Cortázar',
        price: 3500,
        picture: 'https://i.ibb.co/fdnhQ4H/Rayuela-julio-cortazar.png',
        alt: 'Portada de Rayuela',
        stock: 10,
        category: 'Ficción',
        description: 'Descripción de Rayuela'
    },
    {
        id: '3',
        name: 'El fin del amor',
        author: 'Tamara Tenembaum',
        price: 2500,
        picture: 'https://i.ibb.co/2ZT91Rn/portada-el-fin-del-amor-tamara-tenenbaum.jpg',
        alt: 'Portada de El fin del amor',
        stock: 15,
        category: 'Ensayos',
        description: 'Descripción de El fin del amor'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(products)}, 2000)
    })
}