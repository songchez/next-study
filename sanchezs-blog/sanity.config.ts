import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanchez\'s blog',

  projectId: 'dkpx0jrt',
  dataset: 'blog',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
