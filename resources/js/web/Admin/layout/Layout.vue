<template>
    <div>
        <Navbar />
        <slot></slot>
    </div>
</template>

<script>
import Navbar from "../components/Navbar";
    export default {
        components:{
            Navbar,
        }
    }
</script>

<style>

</style>