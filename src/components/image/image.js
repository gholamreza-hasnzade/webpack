import $ from "query";
import webpackImage from "./webpack_image.png";

class Image {
    render() {
        /*   const $ = document;
        const img = $.createElement("img");
        img.alt = "webpack iamge";
        img.src = webpackImage;
        img.width = 450;
        const body = $.querySelector("body");
        body.appendChild(img); */
        const img = $(`<img />`, {
            alt: "webpack iamge",
            src: webpackImage,
            width: 450
        });
        const body = $("body");
        body.append(img)
    }
}
export default Image;
