<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" name="home" @click="loading">Larva</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <div class="d-flex navbar-nav" v-if="this.$store.state.auth.authenticated">
                    <a name="dashboard" class="nav-link nav-item" @click="loading">Home</a>
                    <a class="nav-link" href="javascript:void(0)" @click="logout">Logout</a>
                </div>
                <div class="d-flex navbar-nav" v-else>
                    <a class="nav-link nav-item" name="login" @click="loading">Login</a>
                    <a class="nav-link nav-item" name="register" @click="loading">Register</a>
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
            this.emitter.emit('loading', true)
            await axios.post('/logout').then(({data})=>{
                this.signOut()
                setTimeout(function() {
                    this.emitter.emit('loading', false)
                    this.$router.push({name:"home"})
                }.bind(this), 2000)
            })
        },
        loading(e) {
            if(this.$route.name != e.target.name) {
                this.emitter.emit('loading', true)
                this.$nextTick(() => {
                    setTimeout(function () {
                        this.emitter.emit('loading', false)
                        this.$nextTick(() => {
                            this.$router.push({name:e.target.name})
                        })
                    }.bind(this), 2000)
                })
            }
        }
    }
}
</script>