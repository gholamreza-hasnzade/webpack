import webpackImage from "./webpack_image.png";

class Image {
    render() {
        const $ = document;
        const img = $.createElement("img");
        img.alt = "webpack iamge";
        img.src = webpackImage;
        img.width = 450;
        const body = $.querySelector("body");
        body.appendChild(img);
    }
}
export default Image;
