import React, { useEffect, useState } from 'react';
import { bucket } from '../appwrite/config';  // Import the Appwrite configuration
import conf from "../conf/conf"
const ImageGallery = ({ imageName }) => {
    const [imageURL, setImageURL] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                // Replace 'bucketID' with your actual bucket ID
                const result = await bucket.getFilePreview(conf.appwriteBucketId, imageName);

                // Create URL to access the image
                const imageURL = result.href;
                setImageURL(imageURL);
            } catch (error) {
                console.error("Error fetching the image: ", error);
            }
        };

        fetchImage();
    }, [imageName]);

    return (
        <div>
            {imageURL ? (
                <img  src={imageURL} alt={imageName} />
            ) : (
                <p>Loading image...</p>
            )}
        </div>
    );
};

export default ImageGallery;
