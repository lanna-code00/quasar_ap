<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="text-black bg-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" class="gt-sm" @click="toggleLeftDrawer" />
    
        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span> 
            <q-icon name="fab fa-twitter" class="header-icon q-pa-md lt-md" color="primary" size="sm"/>
          Quasar

        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left"  bordered :width="283">
      <!-- drawer content -->
      <q-icon name="fab fa-twitter" class="q-pa-md" color="primary" size="lg"/>
      <q-list>
        <q-item clickable v-ripple to="/" exact>
           <q-item-section avatar>
              <q-icon name="home" class="md text-weight-bold"/>
            </q-item-section>
            <q-item-section class="text-h6">Home</q-item-section>
        </q-item>

         <q-item clickable v-ripple to="/about" exact>
            <q-item-section avatar>
              <q-icon name="help" class="md text-weight-bold"/>
              </q-item-section>
            <q-item-section class="text-h6">About</q-item-section>
         </q-item>

          <q-item clickable v-ripple to="/settings" exact>
            <q-item-section avatar>
              <q-icon name="fas fa-cog" class="md text-weight-bold"/>
              </q-item-section>
            <q-item-section class="text-h6">Setting</q-item-section>
          </q-item>
      </q-list>


    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered :width="350">
      <q-input outlined rounded dense class="q-ma-md" placeholder="Search Quasar">
        <template v-slot:prepend>
          <q-icon name="fas fa-search" size="sm"/>
        </template>
      </q-input>
    
    <q-list padding>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline color="text-grey">Education</q-item-label>
          <q-item-label class="text-weight-bold">Having issues with Qlist separator. But, it's workig now phew!</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.Lorem ipsum dolor sit amet, consectetur adipiscit elit</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
<q-separator />
     <q-list padding separator>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline color="text-grey">Education</q-item-label>
          <q-item-label class="text-weight-bold">Having issues with Qlist separator. But, it's workig now phew!</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.Lorem ipsum dolor sit amet, consectetur adipiscit elit</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
<q-separator />
    </q-drawer> 

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>