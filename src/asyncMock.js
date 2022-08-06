const products = [
    {
        id: '1',
        name: 'Los suicidas del fin del mundo',
        author: 'Leila Guerriero',
        price: 2500,
        picture: 'https://i.ibb.co/gVFTtYt/portada-los-suicidas-del-fin-del-mundo-leila-guerriero.jpg',
        alt: 'Portada del libro Los suicidas del fin del mundo',
        stock: 20,
        category: 'cronicas',
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
        category: 'ficcion',
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
        category: 'ensayos',
        description: 'Descripción de El fin del amor'
    },
    {
        id: '4',
        name: 'Cuando me muera quiero que me toquen cumbia',
        author: 'Cristina Alarcón',
        price: 2500,
        picture: 'https://i.ibb.co/jzz8sx7/portada-cuando-me-muera-quiero-que-me-toquen-cumbia.jpg',
        alt: 'Portada del libro Cuando me muera quiero que me toquen cumbia',
        stock: 10,
        category: 'cronicas',
        description: 'Descripción de Cuando me muera quiero que me toquen cumbia'
    },
    {
        id: '5',
        name: 'Los amantes de Estocolmo',
        author: 'Prueba2',
        price: 3000,
        picture: 'https://i.ibb.co/YddLnym/portada-los-amantes-de-estocolmo.jpg',
        alt: 'Portada de Los amantes de Estocolmo',
        stock: 5,
        category: 'ficcion',
        description: 'Descripción de Los amantes de Estocolmo'
    },
    {
        id: '6',
        name: 'Derivas para una Psicología Social',
        author: 'Juan Evangelista Díaz',
        price: 3000,
        picture: 'https://i.ibb.co/0rX1Yxs/portada-derivas-para-una-psicologia-social.jpg',
        alt: 'Portada de Derivas para una Psicología Social',
        stock: 15,
        category: 'ensayos',
        description: 'Descripción de Derivas para una Psicología Social'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(products)}, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId))
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === id))
        }, 2000)
    })
}

