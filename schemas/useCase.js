import {MdAccessibility as icon} from 'react-icons/md';

export default {
  name: 'useCase',
  title: 'Use case',
  type: 'document',
  icon,
  fields: [
    // {
    //   name: 'icon',
    //   title: 'Icon',
    //   type: 'string',
    //   maxLength: 50,
    // }, 
    // {
    //   name: 'iconColor',
    //   title: 'Icon color',
    //   type: 'string',
    //     Validation: (Rule) => Rule.required,
    //     options: {
    //         list: [
    //             { title: 'red', value: 'red' },
    //             { title: 'Teal', value: 'teal' },
    //         ],
    //         layout: 'dropdown',
    //     },
    // },
    {
      name: 'toolType',
      title: 'Tool type',
      type: 'string',
        Validation: (Rule) => Rule.required,
        options: {
            list: [
                { title: 'video', value: 'video' },
                { title: 'blog', value: 'blog' },
                { title: 'article', value: 'article' },
                { title: 'facebook', value: 'facebook' },
                { title: 'twitter', value: 'twitter' },
                { title: 'meta', value: 'meta' },
                { title: 'linkedin', value: 'linkedin' },
                { title: 'copy', value: 'copy' },
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
      name: 'callToActionButton',
      title: 'Call to action button',
      type: 'callToActionButton',
    },
    {
      name: 'useCaseStepsHeading',
      title: 'Use case steps heading',
      type: 'string',
    },
    {
      name: 'useCaseStepsHeadingHighlighted',
      title: 'Use case steps heading highlighted',
      type: 'string',
    },
    {
      name: 'teaser',
      title: 'Teaser',
      type: 'text',
    },
    {
      name: 'useCaseSteps',
      title: 'Use case steps',
      type: 'array',
      of: [{type: 'useCaseStep1'},{type: 'useCaseStep2'},{type: 'useCaseStep3'},{type: 'UseCaseStepResult'}], 
    },
    {
      name: 'useCaseBottomLink',
      title: 'Use case bottom link',
      type: 'reference',
      to: [{type: 'useCase'}],
      description: 'This is a link to another use case',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subTitle: 'subTitle',
    },
  },
}
  