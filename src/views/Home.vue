<template>
  <div class="home">
    <v-container>

      <v-app>
        <v-row>
          <v-col cols="12" md="8">  
            <v-container>
              <v-row>
                <v-col cols="12" md="9" offset-md="1">
                  <Search />
                </v-col>
                <v-col cols="12" md="2">
                  <Badge />
                </v-col>
                <v-col cols="12">
                  <h1 class="headline mb-2 grey--text">Money Status</h1>
                  <Graf />
                </v-col>
                <v-col cols="12">
                  <h1 class="headline mb-2 grey--text">Budgets</h1>
                  </v-col>
                <v-col cols="12" md="8">
                  <Budgets />
                </v-col>
                <v-col cols="12" md="4">
                  <Info />
                </v-col>
              </v-row>
            </v-container>  
          </v-col>
  
          <v-col cols="12" md="4">  
            <v-container>
              <v-row>
                <v-col cols="12">
                  <Customer />
                  <Credit />
                  <Add />
                </v-col>
              </v-row>
            </v-container>
  
  
  
          </v-col>
        </v-row>
      </v-app>
    </v-container>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import Search from '@/components/Search'
  import Badge from '@/components/Badge'
  import Graf from '@/components/Graf'
  import Budgets from '@/components/Budgets'
  import Info from '@/components/Info'
  import Customer from '@/components/Customer'
  import Credit from '@/components/Credit'
  import Add from '@/components/Add'
  export default {
    name: 'Home',
    components: {
      Search,
      Badge,
      Graf,
      Budgets,
      Info,
      Customer,
      Credit,
      Add,

    }
  }
</script>

<style scoped>
.home {
   background-image:url('https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg');
   background-repeat: repeat;
}
</style>