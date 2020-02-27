const articleForCitySuffix = "/index";

export const getters = {
    allArticles: () => {
        const articleContexts = require.context("~/articles/", true, /\.md$/);
        const articles = articleContexts.keys().map(key => ({
            attributes: articleContexts(key).attributes,
            path: `/${key.replace(".md", "").replace("./", "")}`
        }));
        return articles.slice(0).filter(article => !article.attributes.draft).sort((a, b) => a.title > b.title)
    },
    allArticlesFromCity: () => (trip, city) => getters.allArticles().slice(0).filter(article => article.path.startsWith(`/${trip}/${city}`)),
    singleArticleAsMarkdownFile: () => (trip, city, article) => require(`~/articles/${trip}/${city}/${article}.md`),
    allCities: () => getters.allArticles().slice(0).filter(article => article.path.endsWith(articleForCitySuffix)),
    allTimelineItems: () => [
        {
            city: "Kraków",
            color: "secondary",
            arrivalDate: "11.02.",
            description: "Um so ca. 06:05 in der Früh werden wir in Kraków ankommen. Danach haben wir die Stadt drei Tage lang nur für uns. Wir müssen auf alle Fälle ein Zapiekanka und Pirogi probieren."
        },
        {
            city: "Berlin",
            color: "secondary",
            arrivalDate: "14.02.",
            description: "In Berlin sollten wir auch echt zeitig in der Früh ankommen. Hier haben wir nur zwei Tage, aber auf alle Fälle genug Zeit für ein Döner."
        },
        {
            city: "Amsterdam",
            color: "secondary",
            arrivalDate: "16.02.",
            description: "Für Amsterdam haben wir ganze 4 Tage Zeit. Also echt genug um uns von den ganzen Busfahrten erholen zu können."
        },
        {
            city: "Paris",
            color: "secondary",
            arrivalDate: "20.02.",
            description: "Yea, endlich Paris. Hier kommen wir auch wieder mal rechtzeitig für ein Frühstücks-Croissant an. Der Bernd kommt auch an dem Tag, nur a bissl später, glaub irgendwann so um 11 herum. Ich hoff halt nur, der stresst nicht den ganzen Tag voll rum."
        },
        {
            city: "Irgendwo zwischen Paris und Wien",
            color: "secondary",
            arrivalDate: "nach 23.02.",
            description: "Mmmmh"
        },
        {
            city: "Wien",
            color: "secondary",
            arrivalDate: "??.??.",
            description: "Endlich in Wien, endlich wieder Uni, endlich wieder Office."
        }
    ]
}