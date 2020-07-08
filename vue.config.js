module.exports = {
    css:{
        loaderOptions: {
            sass: {
                prependData: "@import './src/css/app.scss';"
            }
        }
    },
    configureWebpack: {
        externals: {
            "vue": "Vue",
            "vue-router": "VueRouter",
            "vuex": "Vuex"
        }
    }
}