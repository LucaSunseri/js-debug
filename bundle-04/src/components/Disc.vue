<template>
    <div class="disc p-3 text-center">
        <div class="p-3">
            <img class="img-fluid mb-3" :src="disc.poster" :alt="disc.name" />
            <!-- discs invece di disc.poster  -->
            <p class="title text-uppercase fw-bold">{{ disc.title }}</p>
            <p class="author lead mb-0">{{ disc.author }}</p>
            <!-- mancano le doppie parentesi graffe -->
            <p class="year">{{ disc.year }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Disc",
    props: {
        // !disc: String, non passiamo una stringa ma un oggetto
        disc: Object,
    },
};
</script>

<style lang="scss" scoped>
.disc {
    flex-basis: calc(100% / 5);

    .author,
    .year {
        color: #7d7977;
    }
}

div {
    background-color: #2e3a46;
    height: 100%;
}
</style>
