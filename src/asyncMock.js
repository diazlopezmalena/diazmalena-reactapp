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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ipsum dolor. Sed elementum nulla vel mauris lobortis ullamcorper ac non mi. Donec ipsum mi, venenatis vel bibendum vel, ullamcorper vel massa. Donec consectetur ornare est. In diam justo, facilisis quis consectetur in, vestibulum quis lacus. Ut varius erat nec sollicitudin pulvinar. In fringilla velit id mauris mollis, eget efficitur dolor ultrices.'
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ipsum dolor. Sed elementum nulla vel mauris lobortis ullamcorper ac non mi. Donec ipsum mi, venenatis vel bibendum vel, ullamcorper vel massa. Donec consectetur ornare est. In diam justo, facilisis quis consectetur in, vestibulum quis lacus. Ut varius erat nec sollicitudin pulvinar. In fringilla velit id mauris mollis, eget efficitur dolor ultrices.'
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ipsum dolor. Sed elementum nulla vel mauris lobortis ullamcorper ac non mi. Donec ipsum mi, venenatis vel bibendum vel, ullamcorper vel massa. Donec consectetur ornare est. In diam justo, facilisis quis consectetur in, vestibulum quis lacus. Ut varius erat nec sollicitudin pulvinar. In fringilla velit id mauris mollis, eget efficitur dolor ultrices.'
    },
    {
        id: '4',
        name: 'Cuando me muera quiero que...',
        author: 'Cristina Alarcón',
        price: 2500,
        picture: 'https://i.ibb.co/jzz8sx7/portada-cuando-me-muera-quiero-que-me-toquen-cumbia.jpg',
        alt: 'Portada del libro Cuando me muera quiero que me toquen cumbia',
        stock: 10,
        category: 'cronicas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ipsum dolor. Sed elementum nulla vel mauris lobortis ullamcorper ac non mi. Donec ipsum mi, venenatis vel bibendum vel, ullamcorper vel massa. Donec consectetur ornare est. In diam justo, facilisis quis consectetur in, vestibulum quis lacus. Ut varius erat nec sollicitudin pulvinar. In fringilla velit id mauris mollis, eget efficitur dolor ultrices.'
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ipsum dolor. Sed elementum nulla vel mauris lobortis ullamcorper ac non mi. Donec ipsum mi, venenatis vel bibendum vel, ullamcorper vel massa. Donec consectetur ornare est. In diam justo, facilisis quis consectetur in, vestibulum quis lacus. Ut varius erat nec sollicitudin pulvinar. In fringilla velit id mauris mollis, eget efficitur dolor ultrices.'
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ipsum dolor. Sed elementum nulla vel mauris lobortis ullamcorper ac non mi. Donec ipsum mi, venenatis vel bibendum vel, ullamcorper vel massa. Donec consectetur ornare est. In diam justo, facilisis quis consectetur in, vestibulum quis lacus. Ut varius erat nec sollicitudin pulvinar. In fringilla velit id mauris mollis, eget efficitur dolor ultrices.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(products)}, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId))
        }, 10)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === id))
        }, 500)
    })
}

