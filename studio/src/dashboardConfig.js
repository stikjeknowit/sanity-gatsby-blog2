export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6165978b2489362d07567fdf",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-2-studio-n6dpsjyh",
                  apiId: "d492a99f-5073-46db-811a-4f5d51fa5d9f",
                },
                {
                  buildHookId: "6165978bd972812f74336bde",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-2-web-rimhd2ci",
                  apiId: "fc9482a6-4ccd-43a3-95e4-5d474b0c268f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/stikjeknowit/sanity-gatsby-blog2",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-2-web-rimhd2ci.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
