<template lang="pug">
  #layout
    header
      nav
        .nav-wrapper.white
          a.brand-logo.black-text(href="#") DSC GHRCE
          a.sidenav-trigger.black-text(href="#" data-target="mobile-demo")
            i.material-icons menu
          ul#nav-mobile.right.hide-on-med-and-down
            li
              router-link.black-text(:to="'/home'") Home
            li
              router-link.black-text(:to="'/about'") About
    
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

<style lang="scss" scoped>
@media only screen and (min-width: 601px) {
  nav,
  nav .nav-wrapper i,
  nav a.sidenav-trigger,
  nav a.sidenav-trigger i {
    height: 48px;
    line-height: 48px;
  }

  .brand-logo {
    margin-left: 16px;
  }
}
</style>