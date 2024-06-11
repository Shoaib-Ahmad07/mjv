export const post = {
    name: 'post',
    type: 'document',
    title: 'post',
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
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      
      {
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}]
      },
     
    ],
  };