export const state = () => ({
  items: [
    {
      city: "Kraków",
      color: "secondary",
      arrivalDate: "11.02.",
      description:
        "Um so ca. 06:05 in der Früh werden wir in Kraków ankommen. Danach haben wir die Stadt drei Tage lang nur für uns.",
    },
    {
      city: "Berlin",
      color: "secondary",
      arrivalDate: "14.02.",
      description:
        "In Berlin sollten wir auch echt zeitig in der Früh ankommen und können zwei Tage lang die Stadt erkunden.",
    },
    {
      city: "Amsterdam",
      color: "secondary",
      arrivalDate: "16.02.",
      description:
        "Für Amsterdam haben wir ganze 4 Tage Zeit. Also echt genug um uns von den Busfahrten erholen zu können.",
    },
    {
      city: "Paris",
      color: "secondary",
      arrivalDate: "20.02.",
      description:
        "Yea, endlich Paris. Hier kommen wir auch wieder mal rechtzeitig für ein Frühstücks-Croissant an. Der Bernd kommt auch an dem Tag, nur a bissl später, glaub irgendwann so um 11 herum.",
    },
    {
      city: "Wien",
      color: "secondary",
      arrivalDate: "nach 23.02.",
      description: "Dann mal zurück nach Meidling.",
    },
  ],
});
export const getters = {
  allItems: (state) => state.items,
};
