// Imports
import * as React from 'react'
import * as PropTypes from 'prop-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Define components
const ImageGalleryCaptions = ({ images }) => {

    let imagesColumn1 = {height:0, images:[]};
    let imagesColumn2 = {height:0, images:[]};
    let imagesColumn3 = {height:0, images:[]};
    images.forEach(image => {
        // If imagesColumn1 is smallest
        if (imagesColumn3.height < imagesColumn2.height && imagesColumn3.height < imagesColumn1.height) {
            imagesColumn3.images.push(image)
            imagesColumn3.height += image.image.childImageSharp.gatsbyImageData.height
        } else if (imagesColumn2.height < imagesColumn1.height) { // Here imagesColumn2 or 1 or both are smaller than 3. Smallest of 2 or 1 is smallest.
            imagesColumn2.images.push(image)
            imagesColumn2.height += image.image.childImageSharp.gatsbyImageData.height
        } else { // Here 1 must be <3 and < 2
            imagesColumn1.images.push(image)
            imagesColumn1.height += image.image.childImageSharp.gatsbyImageData.height
        }
    }); 

    //Return final layout here
    return (
        <div className='w-full grid grid-cols-1 md:gap-2 md:grid-cols-3'>
            <div className='flex flex-col col-span-1'>
                {imagesColumn1.images.map( (galleryImage, i) => (
                    <div key={"c1-" + i} className='flex flex-col relative mb-2'>
                        <GatsbyImage image={getImage(galleryImage.image)} alt="" className='rounded-2xl relative' />
                        <div className='text-center absolute inset-x-0 bottom-0 rounded-b-2xl bg-gray-500/30'>
                            {galleryImage.caption && <h3 className='text-center'>{galleryImage.caption}</h3>}
                            {galleryImage.captionDesc && <p className='text-center'>{galleryImage.captionDesc}</p>}
                        </div>
                    </div>
                    ))
                }
            </div>
            <div className='flex flex-col col-span-1'>
                {imagesColumn3.images.map( (galleryImage, i) => (
                    <div key={"c1-" + i} className='flex flex-col relative mb-2'>
                        <GatsbyImage image={getImage(galleryImage.image)} alt="" className='rounded-2xl relative' />
                        <div className='text-center absolute inset-x-0 bottom-0 rounded-b-2xl bg-gray-500/30'>
                            {galleryImage.caption && <h3 className='text-center'>{galleryImage.caption}</h3>}
                            {galleryImage.captionDesc && <p className='text-center'>{galleryImage.captionDesc}</p>}
                        </div>
                    </div>
                    ))
                }
            </div>
            <div className='flex flex-col col-span-1'>
                {imagesColumn2.images.map( (galleryImage, i) => (
                    <div key={"c1-" + i} className='flex flex-col relative mb-2'>
                        <GatsbyImage image={getImage(galleryImage.image)} alt="" className='rounded-2xl relative' />
                        <div className='text-center absolute inset-x-0 bottom-0 rounded-b-2xl bg-gray-500/30'>
                            {galleryImage.caption && <h3 className='text-center'>{galleryImage.caption}</h3>}
                            {galleryImage.captionDesc && <p className='text-center'>{galleryImage.captionDesc}</p>}
                        </div>
                        
                    </div>
                    ))
                }
            </div>
        </div>
    )
}


// Define prop types
ImageGalleryCaptions.propTypes = {
    images: PropTypes.array.isRequired,
}

// Exports
export default ImageGalleryCaptions