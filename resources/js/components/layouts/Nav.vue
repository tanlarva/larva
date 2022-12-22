<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{name:'home'}">Larva</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <div v-if="this.$store.state.auth.authenticated">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <router-link :to="{name:'dashboard'}" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <a class="nav-link" href="#">
                            {{ user.name }}
                        </a>
                        <a class="nav-link" href="javascript:void(0)" @click="logout">Logout</a>
                    </div>
                </div>
                <div v-else>
                    <div class="d-flex">
                        <router-link class="nav-link" :to="{name:'login'}">Login </router-link>
                        <router-link class="nav-link" :to="{name:'register'}">Register</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            user:this.$store.state.auth.user
        }
    },
    methods:{
        ...mapActions({
            signOut:"auth/logout"
        }),
        async logout(){
            await axios.post('/logout').then(({data})=>{
                this.signOut()
                this.$router.push({name:"home"})
            })
        },
    }
}
</script>