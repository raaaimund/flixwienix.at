const sortStringsDesc = (a, b) => (a < b ? -1 : b > a ? 1 : 0);
export const getters = {
  allArticles: () => {
    const articleContexts = require.context("~/articles/", true, /\.md$/);
    const articles = articleContexts.keys().map((key) => ({
      attributes: articleContexts(key).attributes,
      path: `/${key.replace(".md", "").replace("./", "")}`,
    }));
    return articles.filter((article) => !article.attributes.draft);
  },
  articleExists: (_, getters) => (trip, city, article) =>
    getters.allArticles.filter((a) =>
      a.path.startsWith(`/${trip}/${city}/${article}`)
    ),
  allArticlesFromCity: (_, getters) => (trip, city) =>
    getters.allArticles
      .filter((article) => article.path.startsWith(`/${trip}/${city}`))
      .sort((a, b) => sortStringsDesc(a.attributes.title, b.attributes.title)),
  allCities: (_, getters) =>
    getters.allArticles.filter((article) => article.path.endsWith("/index")),
};
