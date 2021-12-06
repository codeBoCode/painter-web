export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61ae3284cbaf514b2f18d5b8',
                  title: 'Sanity Studio',
                  name: 'painter-web-studio',
                  apiId: 'c665b7a3-8d89-4e83-aeb9-e7ab1d16e6cf'
                },
                {
                  buildHookId: '61ae3284607f18d9aae9fedd',
                  title: 'Landing pages Website',
                  name: 'painter-web',
                  apiId: 'd0cc0143-682b-4b60-bd72-c1c5961220af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codeBoCode/painter-web',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://painter-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
