const articleForCitySuffix = "/index";
const sortStringsDesc = (a, b) => {
    if (a < b) return -1;
    if (b > a) return 1;
    return 0;
}

export const getters = {
    allArticles: () => {
        const articleContexts = require.context("~/articles/", true, /\.md$/);
        const articles = articleContexts.keys().map(key => ({
            attributes: articleContexts(key).attributes,
            path: `/${key.replace(".md", "").replace("./", "")}`
        }));
        return articles.slice(0).filter(article => !article.attributes.draft)
    },
    allArticlesFromCity: () => (trip, city) =>
        getters.allArticles().slice(0)
            .filter(article => article.path.startsWith(`/${trip}/${city}`))
            .sort((a, b) => sortStringsDesc(a.attributes.title, b.attributes.title)),
    singleArticleAsMarkdownFile: () => (trip, city, article) => require(`~/articles/${trip}/${city}/${article}.md`),
    allCities: () => getters.allArticles().slice(0).filter(article => article.path.endsWith(articleForCitySuffix))
}