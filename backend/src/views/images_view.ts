import Image from '../models/images';

export default {
    render(image: Image){
        return {
            id: image.id,
            url: `http://192.168.0.110:3333/uploads/${image.path}`,
        };
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
};