<template>

    <v-list two-line subheader>

      <v-list-item
        v-for="item in items"
        :key="item.title"
      >
        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>


        <v-list-item-action align="end">
          <v-btn icon>
            <v-icon small color="grey lighten-1">fas fa-sign-out-alt</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
<v-divider></v-divider>
    </v-list>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { avatar: 'avatar-2.png', iconClass: 'grey lighten-1 white--text', title: 'AAE IdeaPro', subtitle: 'aaeideapro@gmaol.com' },
        { avatar: 'avatar-3.png', iconClass: 'grey lighten-1 white--text', title: 'Nakochi', subtitle: 'paccinco@gmaol.com' },
      ],
    }),
  }
</script>