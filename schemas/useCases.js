import {MdAccessibility as icon} from 'react-icons/md';

export default {
  name: 'useCases',
  title: 'Use cases list',
  type: 'document',
  icon,
  fields: [
    
    {
      name: 'toolType',
      title: 'Tool type',
      type: 'string',
        Validation: (Rule) => Rule.required,
        options: {
            list: [
                { title: 'Video', value: 'video' },
                { title: 'Blog', value: 'blog' },
                { title: 'Article', value: 'article' },
                { title: 'Facebook', value: 'facebook' },
                { title: 'Twitter', value: 'twitter' },
                { title: 'Meta', value: 'meta' },
                { title: 'Linkedin', value: 'linkedin' },
                { title: 'Copy', value: 'copy' },
            ],
            layout: 'dropdown',
        },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      maxLength: 50,
    }, 
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'subTitle',
      title: 'Sub title',
      type: 'text',
      maxLength: 160,
    },
    {
      name: 'teaser',
      title: 'Teaser',
      type: 'text',
    },
    {
      name: 'metaKeyWords',
      title: 'Meta keywords',
      type: 'string',
      description: 'SEO meta keywords',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
  