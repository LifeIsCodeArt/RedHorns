
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFooterItemsStore = defineStore('footerItems', () => {


    const socialLinks = ref([

        {
            id: 1,
            icon: '/assets/icons/footer/facebook-icon.svg',
            icon_white: '/assets/icons/footer/facebook-white-icon.svg',
            link: '/',
            icon_description: 'Facebook'
        },

        {
            id: 2,
            icon: '/assets/icons/footer/twitter-icon.svg',
            icon_white: '/assets/icons/footer/twitter-white-icon.svg',
            link: '/',
            icon_description: 'Twitter'
        },

        {
            id: 3,
            icon: '/assets/icons/footer/instagram-icon.svg',
            icon_white: '/assets/icons/footer/instagram-white-icon.svg',
            link: '/',
            icon_description: 'Instagram'
        },

        {
            id: 4,
            icon: '/assets/icons/footer/youtube-icon.svg',
            icon_white: '/assets/icons/footer/youtube-white-icon.svg',
            link: '/',
            icon_description: 'Youtube'
        },

        {
            id: 5,
            icon: '/assets/icons/footer/google-sheets-icon.svg',
            icon_white: '/assets/icons/footer/google-sheets-white-icon.svg',
            link: '/',
            icon_description: 'Google sheets'
        },

        {
            id: 6,
            icon: '/assets/icons/footer/share-icon.svg',
            icon_white: '/assets/icons/footer/share-white-icon.svg',
            link: '/',
            icon_description: 'Share'
        },


    ])

    const footerList = ref([

        {
            id: 1,
            header: 'Usefull links',
            items:['Magic link #1','Magic link #2','Magic link #3','Magic link #4','Magic link #5']
        }


    ])

    return { socialLinks, footerList }
})