import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useHomeItemsStore = defineStore('homeItems', () => {

    const darkTheme = ref(false)

    const changeTheme = () => {

        darkTheme.value = !darkTheme.value;

    }

    const itemsVidget = [1,2,3,4,5,6,7,8,9,10]

    const themeCheck = computed(()=> darkTheme.value)

    const appInfo = ref([{
        avatar:'./src/assets/images/app/app-avatar.png',
        avatar_description:'Character image',
        header:'Lorem Ipsum is simply dummy',
        total:'./src/assets/images/app/app-total.png',
        total_votes:'12',
        own_rating:'5.2'
    }]


)

    const downloadItems = ref([

        {
            id:1,
            icon:'./src/assets/icons/homepage-links/android-icon.png',
            link:'/',
            icon_description:'Android Download',
            text:'Android'
        },

        {
            id:2,
            icon:'@/assets/icons/homepage-links/apple-icon.png',
            link:'/',
            icon_description:'Apple Download',
            text:'iOS'
        },

        {
            id:3,
            icon:'assets/icons/homepage-links/download-icon.png',
            link:'/',
            icon_description:'PC Download',
            text:'Download on PC'
        },



    ])

    const templatesItemsBurger = ref([

        {
            id:1,
            text:'item'
        },

        {
            id:2,
            text:'item'
        },

        {
            id:3,
            text:'item'
        },

        {
            id:4,
            text:'item'
        },

        {
            id:5,
            text:'item'
        },

        {
            id:6,
            text:'item'
        },


    ])

    const templatesItems = templatesItemsBurger.value.filter((item) => item.id<5)


    const articleItems = ref([

        {
          id:1,
          text:'Red Shot',
          author:'RED HORNS',
          image: './src/assets/images/items/cup-red.png',
          image_description:'Red Shot'
        },

        {
          id:2,
          text:"Deer's dream",
          author:'RED HORNS',
          image: '@/assets/images/items/cup-red.png',
          image_description:'Нитковий живопис #2'
        },

        {
          id:3,
          text:'Forest Energy',
          author:'RED HORNS',
          image: '../src/assets/images/items/cup-red.png',
          image_description:'Forest Energy'
        },

        {
          id:4,
          text:'Wild cappuccino',
          author:'RED HORNS',
          image: '/assets/images/items/cup-red.png',
          image_description:'Wild cappuccino'
        },

        {
          id:5,
          text:'Red Velvet Latte',
          author:'RED HORNS',
          image: './src/assets/images/items/cup-red.png',
          image_description:'Red Velvet Latte'
        },

        {
          id:6,
          text:'Forest Americano',
          author:'RED HORNS',
          image: './src/assets/images/items/cup-red.png',
          image_description:'Forest Americano'
        },
        {
          id:7,
          text:'Fiery Mocha',
          author:'RED HORNS',
          image: './src/assets/images/items/cup-red.png',
          image_description:'Fiery Mocha'
        },
        {
          id:8,
          text:'Deer\'s gold',
          author:'RED HORNS',
          image: './src/assets/images/items/cup-red.png',
          image_description:'Deer\'s gold'
        },

    ])

    const articleItems2 = ref([

        {
            id:1,
            text:'Ice Red Energy',
            author:'RED HORNS',
            image: './src/assets/images/items/cup-cream.png',
            image_description:'Ice Red Energy'
        },

        {
            id:2,
            text:"Horn's breeze",
            author:'RED HORNS',
            image: './src/assets/images/items/cup-cream.png',
            image_description:'Horn\'s breeze'
        },

        {
            id:3,
            text:'Cranberry Spark',
            author:'RED HORNS',
            image: './src/assets/images/items/cup-cream.png',
            image_description:'Cranberry Spark'
        },

        {
            id:4,
            text:'Choco Mint Bliss',
            author:'RED HORNS',
            image: './src/assets/images/items/cup-cream.png',
            image_description:'Choco Mint Bliss'
        },

        {
            id:5,
            text:'Minted Coffee',
            author:'RED HORNS',
            image: './src/assets/images/items/cup-cream.png',
            image_description:'Minted Coffee'
        },

        {
            id:6,
            text:'Maple Cream Fizz',
            author:'RED HORNS',
            image: './src/assets/images/items/cup-cream.png',
            image_description:'Maple Cream Fizz'
        },
        {
            id:7,
            text:'Citrus Horn Cooler',
            author:'RED HORNS',
            image: './src/assets/images/items/cup-cream.png',
            image_description:'Citrus Horn Cooler'
        },
        {
            id:8,
            text:'Espresso Tonic Wild',
            author:'RED HORNS',
            image: './src/assets/images/items/cup-cream.png',
            image_description:'Espresso Tonic Wild'
        },

    ])



    return { appInfo, downloadItems, templatesItems, templatesItemsBurger, articleItems, articleItems2, darkTheme, changeTheme, themeCheck, itemsVidget}
})
