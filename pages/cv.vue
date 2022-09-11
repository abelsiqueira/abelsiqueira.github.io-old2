<template>
  <div>
    <TopBanner img="abel.jpg" title="Resume / Curriculum" />

    <v-row>
      <v-col v-for="(section, section_idx) in sections" :key="section_idx" cols="12" md="12" lg="6" xl="4">
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
    </v-row>
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
              name: 'Netherlands eScience Center | Sep/2021 - Current',
              topics: [
                {
                  name: 'Senior Research Software Engineer',
                  points: [
                    'Helped maintain, developed and consulted on research software in various languages.',
                    'Learned about new languages, tools and practices quickly, having worked on projects ranging from web applications to CUDA C++ wrappers.',
                    'Organized and talked at a Julia for High-Performance Computing online webinar with external speakers and over 50 attendants.',
                  ],
                },
              ],
            },
            {
              name: 'Federal University of Paraná | Nov/2014 - Aug/2021',
              topics: [
                {
                  name: 'Professor Adjunto (equivalent to Assistant Professor)',
                  points: [
                    'Taught around 5 courses a year.',
                    'Advised over 15 students.',
                    '10 talks, 5 at international conferences.',
                    'Industrial Mathematics curriculum planning committee.',
                  ],
                },
                {
                  name: 'Data Science specialization program',
                  points: [
                    'Taught optimization and machine learning.',
                    'Advised students in various topics.',
                  ],
                },
                {
                  name: 'Researcher in optimization',
                  points: [
                    'Co-creator of several packages related to nonlinear optimization and numerical linear algebra inside the JuliaSmoothOptimizers organization.',
                    'Advised students in nonlinear optimization, operations research, and machine learning.',
                    'Co-creator of the CiDAMO study and research group.',
                    '3 published papers.',
                    'Referee in various journals.',
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'Education and courses',
          subsections: [
            {
              name: 'Udemy',
              topics: [
                {
                  name: 'Machine Learning A-Z, 2019',
                  points: ['https://ude.my/UC-BZ056X6A'],
                },
              ],
            },
            {
              name: 'State University of Campinas',
              topics: [
                {
                  name: 'PhD in Applied Mathematics, 2009-2013',
                  points: [
                    'Title: Dynamic Control of Infeasibility for Nonlinear Programming',
                    'Advisor: Francisco de Assis Magalhães Gomes Neto',
                  ],
                },
                {
                  name: "Bachelor's degree in Computational and Applied Mathematics, 2005-2008",
                  points: [],
                },
              ],
            },
          ],
        },
        {
          name: 'Professional Skills',
          subsections: [
            {
              name: 'Programming and software',
              topics: [
                {
                  name: '',
                  points: [
                    '8 years experience with the Julia language.',
                    'Programming since 2005, having used multiple programming languages, including C, C++, Python, MatLab, Fortran, Javascript, Typescript, and Bash.',
                    'I manage several GitHub repositories, setting continuous integration for automated testing, building documentation, code coverage, and various other workflows. I have used GitHub Actions, Travis, Codevoc, and Coveralls.',
                    'I have experience with a Single Page Application in Vue 3 and Quasar, and site building with basic HTML and CSS.',
                  ],
                },
              ],
            },
            {
              name: 'Social and community',
              topics: [
                {
                  name: '',
                  points: [
                    'I am a native Portuguese speaker and a fluent English speaker',
                    'I have basic knowledge of Spanish and French, and I know a few words of Dutch and Russian',
                    'I have solid written and verbal skills',
                    'I am organized, proactive, and I am a team worker',
                    'I can produce documentation in various formats, such as written tutorials and APIA reference documents, as well as videos and live coding on specific topics',
                    'I managed a team translating the Think Julia book',
                  ],
                },
              ],
            },
            {
              name: 'Open science and research software',
              topics: [
                {
                  name: '',
                  points: [
                    'I taught Shell, Git, LaTeX, and Julia in many workshops.',
                    'I helped organize 2 workshops related to Software Carpentry, 1 related to Hacktoberfest, and other local tutorial sessions.',
                    'I taught at the 2017 CODATA-RDA School of Research Data Science',
                    'I have reviewed for the Journal of Open Source Software and the Journal of Open Research Software',
                  ],
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
              topics: [
                {
                  name: 'https://citation-file-format.github.io/cff-initializer-javascript/',
                  points: [
                    'Web application to generate valid CITATION.cff files.',
                    'I joined the project during the implementation of v2.',
                    'Uses Typescript, Vue 3, and Quasar, which I learned on the job.',
                  ],
                },
              ],
            },
            {
              name: 'CiDAMO',
              topics: [
                {
                  name: 'https://cidamo.com.br',
                  points: [
                    'Study and research group on data science, machine learning, and optimization.',
                    'Co-creator of the group and supervisor of several students.',
                    'Organized a week-long data science event with over 300 participants and 8 companies, named CiDWeek.',
                  ],
                },
              ],
            },
            {
              name: 'JuliaSmoothOptimizers',
              topics: [
                {
                  name: 'https://JuliaSmoothOptimizers.github.io',
                  points: [
                    'GitHub organization with over 60 packages related to Linear Algebra and Nonlinear Optimization in Julia.',
                    'Co-creator of around 20 of those packages. My contributions span over 700 commits and tens of thousands of lines of code.',
                    'My involvement included software programming, reviewing, planning, theoretical research, advising, and publicizing the work through papers, talks, posts, and videos.',
                  ],
                },
              ],
            },
            {
              name: 'Jill',
              topics: [
                {
                  name: 'https://github.com/abelsiqueira/jill',
                  points: [
                    'Bash script to install various versions of Julia on Linux and MacOS',
                  ],
                },
              ],
            },
            {
              name: 'Intro a Julia BR (Think Julia book translation)',
              topics: [
                {
                  name: 'https://juliaintro.github.io/JuliaIntroBR.jl',
                  points: [
                    'Open source translation of Think Julia',
                    'I managed the translation team and reviewed each chapter',
                  ],
                },
              ],
            },
            {
              name: 'perprof-py',
              topics: [
                {
                  name: 'https://github.com/ufpr-opt/perprof-py',
                  points: [
                    'Python package for producing performance profiles.',
                    'One paper was published with occasional citations.',
                  ],
                },
              ],
            },
            {
              name: 'DCICPP',
              topics: [
                {
                  name: 'https://github.com/abelsiqueira/dcicpp',
                  points: [
                    'C++ implementation of a Trust Cylinder method for equality-constrained optimization',
                    'Main part of the code produced in my doctorate',
                  ],
                },
              ],
            },
          ],
        },
      ],
    }
  },
}
</script>
