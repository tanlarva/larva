<template>
    <div class="overlay" v-if="isLoad">
        <div class="load">
            <fulfilling-square-spinner
            :animation-duration="2500"
            :size="50"
            color="#fffff0"
            />
        </div>
    </div>
</template>
<script>
import { FulfillingSquareSpinner } from 'epic-spinners'

export default {
    components: {
        FulfillingSquareSpinner
    },
    data() {
        return {
            isLoad: false
        }
    },
    mounted() {
        this.emitter.on('loading', status => {
            this.isLoad = status
        })
    }
}
</script>
<style scoped>
    .overlay {
        background-color: rgba(1, 1, 1, 0.6);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2000;
    }
    .load {
        z-index: 2100;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>