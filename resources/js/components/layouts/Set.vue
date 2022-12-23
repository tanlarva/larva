<template>
    <loading></loading>
    <navbar></navbar>
    <div class="container">
        <main class="">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import navbar from './Nav.vue'
import loading from './Loading.vue'
export default {
    name:"set-layout",
    data(){
        return {
            user: this.$store.state.auth.user,
        }
    },
    components: {
        navbar: navbar, 
        loading: loading
    },

}
</script>
