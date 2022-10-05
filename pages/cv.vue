<template>
  <div>
    <TopBanner img="cv.jpg" title="Resume / Curriculum" />

    <v-row>
      <v-col
        v-for="(section, section_idx) in sections"
        :key="section_idx"
        cols="12"
        md="6"
        lg="6"
        xl="3"
      >
        <v-card class="mx-auto mb-3">
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
                <v-card elevation="0" color="#333">
                  <v-card-title class="py-0 secondary--text">
                    {{ subsection.name }}
                    <a
                      v-if="subsection.link"
                      :href="subsection.link"
                      class="ml-3"
                    >
                      <v-icon>mdi-link</v-icon>
                    </a>
                  </v-card-title>
                  <div
                    v-for="(topic, subsub_idx) in subsection.topics"
                    :key="subsub_idx"
                  >
                    <v-card-subtitle
                      class="font-weight-bold py-1 warning--text"
                      >{{ topic.name }}</v-card-subtitle
                    >
                    <v-card-text class="py-0">
                      <ul class="py-1">
                        <li
                          v-for="(point, point_idx) in topic.points"
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
      </v-col>

      <v-col cols="12" md="6" lg="6" xl="3">
        <v-card class="mx-auto mb-3">
          <v-card-title class="primary white--text">
            <span class="text-h6">Publications</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text class="py-0"> </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import sections from '@/assets/cv-sections.json'
export default {
  data() {
    return sections
  },
}
</script>
