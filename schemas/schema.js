// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
// import crewMember from './crewMember'
// import castMember from './castMember'
// import movie from './movie'
// import person from './person'
// import plotSummary from './plotSummary'
// import plotSummaries from './plotSummaries'

// import screening from './screening'
// import useCases from './useCases'
import useCase from './useCase'
import callToActionButton from './callToActionButton'
import useCaseStep1 from './useCaseStep1'
import useCaseStep2 from './useCaseStep2'
import useCaseStep3 from './useCaseStep3'
import UseCaseStepResult from './UseCaseStepResult'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // // The following are document types which will appear
    // // in the studio.
    // screening,
    // useCases,
    useCase,
    callToActionButton,
    useCaseStep1,
    useCaseStep2,
    useCaseStep3,
    blockContent,
    UseCaseStepResult
    // movie,
    // person,
    // // When added to this list, object types can be used as
    // // { type: 'typename' } in other document schemas
    // plotSummary,
    // plotSummaries,
    // castMember,
    // crewMember,
  ]),
})
