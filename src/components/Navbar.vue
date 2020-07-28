<template>
    <nav>
        <v-navigation-drawer v-model="drawer" app dark src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
            <v-col cols="12" align="center" class="mt-10 mb-8">
                <v-abatar>
                    <v-icon class="fas fa-store"></v-icon>
                </v-abatar>
            </v-col>

            <v-list>
                <v-list-item v-for="([icon, text,route], i) in items" :key="i" link router :to="route">
                    <v-list-item-icon>
                        <v-icon>{{ icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <Carousel />

        </v-navigation-drawer>
    </nav>
</template>

<script>
import Carousel from '@/components/Carousel'

    export default {
        data: () => ( {
            drawer: true,
            items: [
                [ 'fas fa-home', 'Home', '/' ],
                [ 'fas fa-credit-card', 'Balance', '/balance' ],
                [ 'fas fa-chart-line', 'Investments', '/investments' ],
                [ 'fas fa-balance-scale-right', 'Insurance', '/insurance' ],
                [ 'fas fa-briefcase', 'Business', '/business' ],
            ],
        } ),
        components: {
            Carousel,
        }
    }
</script>

<style>

</style>