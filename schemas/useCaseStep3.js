export default {
    name: 'useCaseStep3',
    title: 'Use case step 3',
    type: 'object',
    fields: [
        {
            name: 'align',
            title: 'Use case step alignment',
            type: 'string',
            Validation: (Rule) => Rule.required,
            options: {
                list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Right', value: 'right' },
                ],
                layout: 'dropdown',
            },
        },
        {
        name: 'heading',
        title: 'Use case step heading',
        type: 'string',
        },
        {
        name: 'description',
        title: 'Use case step description',
        type: 'text',
        },
        {
            name: 'language',
            title: 'Use case step language',
            type: 'string',
        },
        {
            name: 'input',
            title: 'Use case step input',
            type: 'string',
        },
        {
            name: 'tone',
            title: 'Use case step tone',
            type: 'string',
        },
    ],
    preview: {
        select: {
        title: 'heading',
        subTitle: 'description',
        },      
    },
};