const sortStringsDesc = (a, b) => a < b ? -1 : b > a ? 1 : 0
export const getters = {
    allArticles: () => {
        const articleContexts = require.context("~/articles/", true, /\.md$/);
        const articles = articleContexts.keys().map(key => ({
            attributes: articleContexts(key).attributes,
            path: `/${key.replace(".md", "").replace("./", "")}`
        }));
        return articles.filter(article => !article.attributes.draft)
    },
    singleArticleAsMarkdownFile: () => (trip, city, article) => require(`~/articles/${trip}/${city}/${article}.md`),
    articleExists: () => (trip, city, article) => getters.allArticles()
        .filter(a => a.path.startsWith(`/${trip}/${city}/${article}`)),
    allArticlesFromCity: () => (trip, city) => getters.allArticles()
        .filter(article => article.path.startsWith(`/${trip}/${city}`))
        .sort((a, b) => sortStringsDesc(a.attributes.title, b.attributes.title)),
    allCities: () => getters.allArticles()
        .filter(article => article.path.endsWith("/index"))
}