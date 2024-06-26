import { defineEntries } from '@redwoodjs/vite/entries'

export default defineEntries(
  // getEntry
  async (id) => {
    switch (id) {
      case 'AboutPage':
        return import('./pages/AboutPage/AboutPage')
      case 'HomePage':
        return import('./pages/HomePage/HomePage')
      case 'ServerEntry':
        return import('./entry.server')
      default:
        return null
    }
  }
)
