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

      <q-list >
      <q-item class="q-py-md">
        <q-item-section avatar top>
         <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
        </q-item-section>

        <q-item-section class="q-ma-md text-subtitle1">
          <q-item-label class="text-weight-bold">Maryanne Ezeobidi 
              <span class="text-grey-7">@maryanne_obidi</span>
          </q-item-label>
          <q-item-label class="quasar_content text-body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
             
                  Libero porro tempore eius fugit modi. 
                  Perferendis id temporibus corrupti omnis! 
                  Eligendi aliquid in perspiciatis corporis ad optio totam quia voluptate laudantium?
          </q-item-label>
        <div class="quasar-icons row justify-between q-mt-sm">
                <q-btn 
                 flat 
                 round 
                 color="grey-5" 
                 icon="far fa-comment"
                 size="sm" 
                />

                   <q-btn 
                 flat 
                 round 
                 color="grey-5" 
                 icon="fas fa-retweet"
                 size="sm" 
                />

                   <q-btn 
                 flat 
                 round 
                 color="grey-5" 
                 icon="far fa-heart"
                 size="sm" 
                />

                   <q-btn 
                 flat 
                 round 
                 color="grey-5" 
                 icon="fas fa-trash"
                 size="sm" 
                />
        </div>
        </q-item-section>
        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>

      </q-list>

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
.quasar_content
   white-space: pre-line   
.quasar-icons
   margin-left: -5px   
</style>
