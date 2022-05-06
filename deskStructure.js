// prettier-ignore
import S from '@sanity/desk-tool/structure-builder';
import {
  MdDashboard,
} from 'react-icons/md';

// We filter document types defined in structure to prevent
// them from being listed twice

export default () =>
    S.list()
        .title('Pages')
        .items([
          S.listItem()
            .title('Use cases')
            .icon(MdDashboard)
            .schemaType('useCases')
            .child(S.documentTypeList('useCases').title('Use cases')),
        
          S.listItem()
            .title('Use case')
            .icon(MdDashboard)
            .schemaType('useCase')
            .child(S.documentTypeList('useCase').title('Use case')),
        
            // S.listItem()
            // .title('Use cases overview pages')
            // .schemaType('useCases')
            // .child(
            // S.documentList()
            //     .title('Use cases overview')
            //     .filter('_type == "useCases"')),
        
          
            // S.listItem()
            // .title('Use cases overview')
            // .icon(MdDashboard)
            // .child(
            //   S.list()
            //     .title('Use cases overview')
            //     .items([
                

             
                  
                  
                //   S.listItem()
                //   .title('Norsk')
                //   .schemaType('page')
                //   .child(
                //     S.documentList()
                //       .title('Norsk')
                //       .filter('_type == "page" && language == "no"')),
                  
                //   S.listItem()
                //   .title('All Pages')
                //   .icon(MdDashboard)
                //   .schemaType('page')
                //   .child(S.documentTypeList('page').title('Pages')),
                // ]),
        //   ),
                         
        ]);
