<template>

<v-list>
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
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
            <v-btn icon>
                <v-icon
                :color="item.iconClass2"
                 v-text="item.icon2"
                 ></v-icon>
            </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider />
    </v-list>
</template>


<script>
  export default {
    data: () => ({
      items: [
        { icon: 'fas fa-dollar-sign', iconClass: 'grey white--text', title: '$15,423', subtitle: 'Heienberg', icon2:'fab fa-cc-visa',iconClass2: 'indigo'},
        { icon: 'fas fa-dollar-sign', iconClass: 'amber white--text', title: '$6,211', subtitle: 'Great Wall wallet', icon2:'fab fa-cc-mastercard',iconClass2: 'indigo'},
        { icon: 'fas fa-dollar-sign', iconClass: 'black white--text', title: '$15,423', subtitle: 'Stone River wallet', icon2:'fab fa-cc-paypal',iconClass2: 'success'},
      ],
    }),
  }
</script>
