import sanityClient from '@sanity/client'

export default sanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: '8g6ip0m6',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-02-03',
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
})
