<template>
  <v-card
  >

    <v-list two-line subheader>
      
      <v-list-item
        v-for="item in items"
        :key="item.title"
      >
        <v-list-item-avatar>
          <v-icon
            :class="[item.iconClass]"
            v-text="item.icon"
          ></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-content align="end">
            <v-list-item-title v-text="item.title2" class="indigo--text"></v-list-item-title>
            <v-list-item-subtitle v-text="item.subtitle2"></v-list-item-subtitle>
            <v-divider inset></v-divider>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { icon: 'fas fa-car', iconClass: 'blue white--text', title: 'Auto & transport', subtitle: '$700 left',title2:'$1,200',subtitle2:'$500 of 1,200' },
        { icon: 'fas fa-utensils', iconClass: 'red white--text', title: 'Food & drinks', subtitle: '$2,100 left',title2:'$3,700',subtitle2:'$1,600 of 3,700' },
        { icon: 'fas fa-dumbbell', iconClass: 'orange white--text', title: 'Sports', subtitle: '$350 left',title2:'$950',subtitle2:'$600 of 950' },
        { icon: 'fas fa-gamepad', iconClass: 'green white--text', title: 'Game', subtitle: '$150 left',title2:'350',subtitle2:'200 of 350'},
      ],
    }),
  }
</script>