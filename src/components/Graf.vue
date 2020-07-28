<template>
    <div id="app">
        <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
    </div>
</template>

<script>
    export default {
        data: () => ( {
            chartData: [
                [ "Year", "Sales", "Expenses", "Profit" ],
                [ "2014", 1000, 400, 200 ],
                [ "2015", 1170, 460, 250 ],
                [ "2016", 660, 1120, 300 ],
                [ "2017", 1030, 540, 350 ],
                [ "2018", 1025, 530, 302 ],
                [ "2019", 1040, 560, 356 ],
            ],
            chartOptions: {
                chart: {
                    title: "Company performance",
                    subtitle: "Sales, Expenses, and Profit: 2016-2019"
                }
            }
        } )
    }
</script>

<style>

</style>