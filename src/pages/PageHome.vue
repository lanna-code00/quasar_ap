<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-gutter-md">
      <div class="col">
        <q-input 
        bottom-slots 
        v-model="text" 
        placeholder="What's happening?" 
        counter 
        maxlength="250" 
        dense
        class="quasar-input"
        autogrow
      >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
          </template>

          <template v-slot:append>
            <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
          </template>
        </q-input>
      </div>
      <div class="col col-shrink ">
            <q-btn 
            unelevated 
            rounded 
            color="primary" 
            label="Tweet" 
            no-caps
            class="q-mb-lg"
            :disable="!text"
            />

      </div>
    </div>
      <q-separator size="10px" class="divider" color="grey-2"/>
  </q-page>
</template>

<script>

export default {
  name: 'PageHome',
  data(){
    return {
        text: ""
    }
  }
}
</script>

<style lang="sass" scoped>
.quasar-input
   textarea 
      font-size: 20px
      line-height: 1.4px !important
.divider
   border-top: 1px solid
   border-bottom: 1px solid      
   border-color: $grey-4
</style>
