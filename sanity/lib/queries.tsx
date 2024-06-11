export const blogs = `*[ _type == "blog"]{
    title,
          slug,
          category,
          mainImage{
            asset->{
              url
            }
          },
          content,
          short_info,
          _createdAt
        }`;

        export const clicnt = `*[ _type == "clicnt"]{
          title,
                slug,
                category,
                mainImage{
                  asset->{
                    url
                  }
                },
                content,
                short_info,
                _createdAt
              }`;