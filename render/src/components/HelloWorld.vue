<template>
    <div class="hello">
        <p class="title">HELLO ELECTRON-VUE-TEMPLET</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.title {
    font-size: 40px;
    color: orange;
    border: 1px solid orange;
}
</style>
