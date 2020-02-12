<template>
  <v-timeline>
    <v-timeline-item
      v-for="(stops, i) in stops"
      :key="i"
      :color="stops.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${stops.color}--text`"
          v-text="stops.arrivalDate"
        />
      </template>
      <div class="py-4">
        <h2
          :class="`headline font-weight-light mb-4 ${stops.color}--text`"
        >{{ stops.city }}</h2>
        <div>{{ stops.description }}</div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data: () => ({
    stops: [
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
        description: "In Berlin sollten wir auch echt scheiss zeitig in der Früh ankommen. Hier haben wir nur zwei Tage, aber auf alle Fälle genug Zeit für ein Döner."
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
  })
};
</script>