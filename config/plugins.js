module.exports = ({env}) => ({

    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('API_KEY'),
            api_secret: env('API_SECRET'),
        },
     actionOptions: {
        upload: {},
        delete: {},
     },

    },
});