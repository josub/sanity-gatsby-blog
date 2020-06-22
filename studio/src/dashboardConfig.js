export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ef0ae46c4db5bac98aeb7af',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-va3o27v2',
                  apiId: '20a6c737-c9d9-46e8-8f42-271f73965b4f'
                },
                {
                  buildHookId: '5ef0ae461b1f32989874d7e8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dgggdjf7',
                  apiId: '6fbdd044-6b20-4ea5-a349-48083bd16c50'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/josub/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dgggdjf7.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
