<template>
    <div class="container">
        <main class="">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
    name:"set-layout",
    data(){
        return {
            user:this.$store.state.auth.user
        }
    },

}
</script>
