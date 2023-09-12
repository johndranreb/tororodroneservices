export default async function graphqlRequest(query) {
  const url = "http://tororo-drone-service.local/graphql";
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(url, {
    headers,
    method: 'POST',
    body: JSON.stringify(query)
  });

  const resJson = await res.json();
  return resJson;
}

export async function getSinglePost(slug) {
  const query = {
    query: `query getSinglePost {
      post(id: "${slug}", idType: SLUG) {
        content(format: RENDERED)
        date
        excerpt(format: RENDERED)
        modified
        slug
        title(format: RENDERED)
        featuredImage {
          node {
            mediaDetails {
              sizes {
                sourceUrl
                width
                height
              }
            }
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }`
  };
  const resJson =await graphqlRequest(query);
  const getSinglePost = resJson.data.post;

  return getSinglePost;

}