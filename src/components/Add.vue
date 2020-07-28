<template>
    <v-row dense>
      <v-col cols="12">
        <v-list>
          <v-list-item v-for="item in items" :key="item.title">
            <v-list-item-avatar color="indigo">
              <v-icon dark color="white">fas fa-plus</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </v-list>
      </v-col>

        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card :color="item.color" dark max-width="400" class="mx-auto">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline" v-text="item.title2"></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar class="ma-3" size="100" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
    </v-row>
</template>

<script>
  export default {
    data: () => ( {
      items: [ {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Add credit card',
        title2: 'Upgrade your plan to GOLG',
        artist: 'With Gold account plan you get access to premium features',

      }, ],
    } ),
  }
</script>