export const insight = {
    name: 'insight',
    type: 'document',
    title: 'Insight',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',   
      },
      
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'category',
        title: 'Category',
        type: 'array',
  of: [
    {
      type: 'reference',
      to: [
        {type: 'category'},
      ]
    }
  ]
      }, 
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'short_info',
        title: 'Short Info',
        type: 'text',
      }, 
      
  
      {
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}]
      },
     
    ],
  };