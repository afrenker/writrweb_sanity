export const language = {
    name: 'language',
    title: 'Language',
    type: 'string',
      Validation: (Rule) => Rule.required,
      options: {
          list: [
              { title: 'English', value: 'en' },
          ],
          layout: 'dropdown',
      },
  }