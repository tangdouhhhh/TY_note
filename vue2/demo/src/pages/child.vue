<template>
    <div> age:{{ id }}</div>
</template>

<script>

export default {
    name: 'child_',
    props:['id'],
    mounted() {
        console.log(this.id);
    },
}

</script>
<style  lang="scss" scoped></style>