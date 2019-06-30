import { xmlToJson } from '../utils/xmlToJson';

/**
 * considering the expected string name errors in the returned data
 * @param {*} item 
 */
const verifyIfJsonAndTransform = (item) => {
    if (item instanceof Array) {
        return item;
    }

    const XmlNode = new DOMParser().parseFromString(item, 'text/xml');
    const json = xmlToJson(XmlNode);
    console.log('xml to json', json);
    return json.tapons ? json.tapons.tampon : json.tampons.tampon;
}

const transformTamponToArray = (item) => {
    if (Array.isArray(item)) {
        return item;
    }
    return [item];
}

const transformApiToJson = (product) => {
    const transformed = {
        price: product.price,
        currency: product.currency,
        productImage: product.productImage,
        tampons: product.tampons ?
        transformTamponToArray(verifyIfJsonAndTransform(product.tampons))
            : transformTamponToArray(verifyIfJsonAndTransform(product.tapons)),
    }
    console.log('transformed', transformed);
    return transformed;
};

export default transformApiToJson;
