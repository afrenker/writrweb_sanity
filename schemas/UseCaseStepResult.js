export default {
    name: 'UseCaseStepResult',
    title: 'Use case step result',
    type: 'object',
    fields: [
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
        {
            name: 'result',
            title: 'Use case step Result',
            type: 'blockContent',
        },

    ],
    preview: {
        select: {
        title: 'heading',
        subTitle: 'description',
        },      
    },
};