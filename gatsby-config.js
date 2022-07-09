module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.mysite.com',
    title: 'Old New Borrowed Blue Beauty',
    description: 'Makeup for weddings and personal events',
    image:
      'https://makeup-storage-media.s3.us-east-2.amazonaws.com/images/makeup_palette.jpg',
    backgroundImage:
      'https://makeup-storage-media.s3.us-east-2.amazonaws.com/images/wedding.jpg',
  },
  plugins: [
    //PLUGIN FOR HEAD META TAGS
    'gatsby-plugin-react-helmet',
    //END PLUGIN FOR HEAD META TAGS

    //Image compression
    'gatsby-remark-images',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    //end image compression
  ],
};
