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
            @click="addNewQuasar"
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

      <q-list separator>
      <q-item class="q-py-md" v-for="tweets in quasar_tweets" :key="tweets.date">
        <q-item-section avatar top>
         <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
        </q-item-section>

        <q-item-section class="q-ma-md text-subtitle1">
          <q-item-label class="text-weight-bold">Maryanne Ezeobidi
              <span class="text-grey-7">@maobi_nwa</span>
          </q-item-label>
          <q-item-label class="quasar_content text-body1">{{ tweets.content }}
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
                  @click="deleteQuasar(tweets)"
                 flat 
                 round 
                 color="grey-5" 
                 icon="fas fa-trash"
                 size="sm" 
                />
        </div>
        </q-item-section>
        <q-item-section side top>
          {{ relativeDate(tweets.date) }}
        </q-item-section>
      </q-item>

      </q-list>

  </q-page>
</template>

<script>
import { formatDistance } from 'date-fns'
export default {
  name: 'PageHome',
  data(){
    return {
        text: "",
        quasar_tweets: [
            {
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero porro tempore eius fugit modi. Perferendis id temporibus corrupti omnis! Eligendi aliquid in perspiciatis corporis ad optio totam quia voluptate laudantium',
              date: 1642487595735,
            },
            {
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero porro tempore eius fugit modi. Perferendis id temporibus corrupti omnis! Eligendi aliquid in perspiciatis corporis ad optio totam quia voluptate laudantium',
              date: 1642487632574,
            },
            {
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero porro tempore eius fugit modi. Perferendis id temporibus corrupti omnis! Eligendi aliquid in perspiciatis corporis ad optio totam quia voluptate laudantium',
              date: 1642487642867,
            }
        ]
    }
  },
 methods: {
    relativeDate(value) {
      return formatDistance(value, new Date())
    },

    addNewQuasar(){
        let quasarObject = {
            content: this.text,
            date: new Date()
        }
        this.quasar_tweets.unshift(quasarObject)
    },

    deleteQuasar(dates){
       let index = this.quasar_tweets.findIndex(quasar => quasar.date === dates.date);
       this.quasar_tweets.splice(index, 1)
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
