<template>
    <div id="app">
        <Header
            :genres="genresList"
            :authors="authorsList"
            @changedGenere="startGenreSearch"
            @changedAuthor="startAuthorSearch"
        />
        <!-- L'emit era scritto in modo sbagliato -->

        <Main
            :selectedGenre="genreToSearch"
            :selectedAuthor="authorToSearch"
            @genresAndAuthorsReady="getGenresAndAuthorsList"
        />
    </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";

export default {
    name: "App",
    components: {
        Header,
        Main,
    },
    data() {
        return {
            genresList: [],
            authorsList: [],
            genreToSearch: "",
            authorToSearch: "",
        };
    },
    methods: {
        getGenresAndAuthorsList(allGenresAndAuthors) {
            // !allGenresAndAuthors = {}; perchè? resettare
            this.genresList = allGenresAndAuthors.genres;
            this.authorsList = allGenresAndAuthors.authors;
        },
        startGenreSearch(genreToSearch) {
            console.log(genreToSearch);
            // !genreToSearch = ""; perchè? resettare
            this.genreToSearch = genreToSearch;
        },
        startAuthorSearch(authorToSearch) {
            console.log(authorToSearch);
            this.authorToSearch = authorToSearch;
        },
    },
};
</script>

<style lang="scss">
@import "./assets/styles/general";
</style>
