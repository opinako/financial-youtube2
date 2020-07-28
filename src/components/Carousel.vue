<template>
  <v-carousel
    cycle
    height="230"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="80%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        
          <div>
              <p class="white--text" align="center">{{ slide }} Slide</p>
              <v-btn outlined color="white">Read more</v-btn>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>

