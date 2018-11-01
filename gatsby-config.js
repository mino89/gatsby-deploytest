module.exports = {
    siteMetadata:{
        title: `Pandas Eating Lots`
    },
    pathPrefix: "/gatsby-deploytest",
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "GatsbyJS",
                short_name: "GatsbyJS",
                start_url: "/",
                background_color: "#6b37bf",
                theme_color: "#6b37bf",
                display: "minimal-ui",
                icon: "src/images/mino.jpg",
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
            pathToConfigModule: `src/utils/typography`,
            },
        },
        ],
  }