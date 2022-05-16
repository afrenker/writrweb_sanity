import {MdAccessibility as icon} from 'react-icons/md';
import { language } from './languages';

export default {
  name: 'useCase',
  title: 'Use case',
  type: 'document',
  icon,
  fields: [
    language,
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
      name: 'useCaseBottomLinkRef',
      title: 'Use case bottom link ref',
      type: 'reference',
      to: [{type: 'useCase'}],
      description: 'This is a link to another use case',
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
      subtitle: 'toolType',
    },
  },
}
  