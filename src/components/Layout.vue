<template lang="pug">
  #layout
    header
      nav
        .nav-wrapper.blue-grey
          a.brand-logo(href="#") DSC GHRCE
          a.sidenav-trigger(href="#" data-target="mobile-demo")
            i.material-icons menu
          ul#nav-mobile.right.hide-on-med-and-down
            li
              router-link(:to="'/home'") Home
            li
              router-link(:to="'/about'") About
    
      ul#mobile-demo.sidenav
        li
          router-link(:to="'/home'") Home
        li
          router-link(:to="'/about'") About
        
    main
      slot
    footer
</template>

<script>
import M from 'materialize-css'
// const apiHost = process.env.API_ENDPOINT

export default {
  name: 'Layout',
  mounted: () => {
    M.AutoInit()
  }
}
</script>