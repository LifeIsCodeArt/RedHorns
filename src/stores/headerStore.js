import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderItemsStore = defineStore('headerItems', () => {

  const headerNavigation = ref([

    {
      id:1,
      text:'Horns',
      link:'/',
      icon:'assets/icons/logos/cream-horns.png',
      icon_dark:'assets/icons/logos/red-horns.png',
      icon_description:'Phone',
      class_id:'Menu'
    },

    {
      id:2,
      text:'About Horns',
      link:'/',
      icon:'assets/icons/logos/cream-horns.png',
      icon_dark:'assets/icons/logos/red-horns.png',
      icon_description:'Tools',
      class_id:'About'
    },

    {
      id:3,
      text:'Menu',
      link:'/',
      icon:'assets/icons/logos/cream-horns.png',
      icon_dark:'assets/icons/logos/red-horns.png',
      icon_description:'12',
      class_id:'Works'
    },

    {
      id:4,
      text:'Links',
      link:'/',
      icon:'assets/icons/logos/cream-horns.png',
      icon_dark:'assets/icons/logos/red-horns.png',
      icon_description:'11',
      class_id:'Links'
    },

  ])

  const menuThree = headerNavigation.value.filter((item) => item.id<4)


  const socialLinks = ref([

    {
      id:1,
      icon:'assets/icons/socials/facebook-icon.svg',
      icon_dark:'assets/icons/footer/facebook-icon.svg',
      link:'/',
      icon_description:'Facebook'
    },

    {
      id:2,
      icon:'assets/icons/socials/twitter-icon.svg',
      icon_dark:'assets/icons/footer/twitter-icon.svg',
      link:'/',
      icon_description:'Twitter'
    },

    {
      id:3,
      icon:'assets/icons/socials/instagram-icon.svg',
      icon_dark:'assets/icons/footer/instagram-icon.svg',
      link:'/',
      icon_description:'Instagram'
    },

    {
      id:4,
      icon:'assets/icons/socials/youtube-icon.svg',
      icon_dark:'assets/icons/footer/youtube-icon.svg',
      link:'/',
      icon_description:'Youtube'
    },

    {
      id:5,
      icon:'assets/icons/socials/google-sheets-icon.svg',
      icon_dark:'assets/icons/footer/google-sheets-icon.svg',
      link:'/',
      icon_description:'Google sheets'
    },

    {
      id:6,
      icon:'assets/icons/socials/share-icon.svg',
      icon_dark:'assets/icons/footer/share-icon.svg',
      link:'/',
      icon_description:'Share'
    },


  ])

  const headerMenu = ref([

    {
      id:1,
      text:'Item',
      path:'/'
    },

    {
      id:2,
      text:'Item',
      path:'/'
    },

    {
      id:3,
      text:'Item',
      path:'/'
    },

    {
      id:4,
      text:'Item',
      path:'/'
    },

    {
      id:5,
      text:'Item',
      path:'/'
    },

    {
      id:6,
      text:'Item',
      path:'/'
    },

    {
      id:7,
      text:'Item',
      path:'/'
    },

    {
      id:8,
      text:'Item',
      path:'/'
    },


  ])

  return { headerNavigation, socialLinks, headerMenu, menuThree}
})
