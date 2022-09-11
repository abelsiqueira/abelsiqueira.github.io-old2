<template>
  <div>
    <TopBanner img="abel.jpg" name="CV" />

    <v-container>
      <v-card
        v-for="(section, section_idx) in sections"
        :key="section_idx"
        class="mx-auto mb-3"
      >
        <v-card-title class="primary white--text">
          <span class="text-h6">{{ section.name }}</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text class="py-0">
          <v-timeline dense>
            <v-timeline-item
              v-for="(subsection, subsection_idx) in section.subsections"
              :key="subsection_idx"
              small
              fill-dot
            >
              <v-card elevation="0">
                <v-card-title class="py-0">{{ subsection.name }}</v-card-title>
                <div
                  v-for="(subsubsection, subsub_idx) in subsection.subsubsections"
                  :key="subsub_idx"
                >
                  <v-card-subtitle class="py-1">{{
                    subsubsection.name
                  }}</v-card-subtitle>
                  <v-card-text class="py-0">
                    <ul class="py-1">
                      <li
                        v-for="(point, point_idx) in subsubsection.points"
                        :key="point_idx"
                      >
                        {{ point }}
                      </li>
                    </ul>
                  </v-card-text>
                </div>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          name: 'Professional Career',
          subsections: [
            {
              name: 'Netherlands eScience Center | Sep/2021 -',
              subsubsections: [
                {
                  name: 'Senior Research Software Engineer',
                  points: ['Helped maintain', '-'],
                },
              ],
            },
            {
              name: 'Federal University of Paraná | Nov/2014 - Aug/2021',
              subsubsections: [
                {
                  name: 'Professor Adjunto',
                  points: ['-', '-'],
                },
                {
                  name: 'Data Science specialization program',
                  points: ['-', '-'],
                },
              ],
            },
          ],
        },
        {
          name: 'Projects',
          subsections: [
            {
              name: 'cffinit - Citation File Format initializer',
              subsubsections: [
                {
                  name: 'https://citation-file-format.github.io/cff-initializer-javascript/',
                  points: [
                    'Web application to generate valid CITATION.cff files.',
                    'I joined the project during the implementation of v2.',
                    'Uses Typescript, Vue 3, and Quasar, which I learned on the job.',
                  ],
                }
              ]
            }
          ]
        },
      ],
    }
  },
}
</script>
