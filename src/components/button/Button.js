
class Button {
    render() {
        const button = document.createElement("button");
        button.innerHTML = "ثبت";
        button.classList.add("btn-dark")
        const body = document.querySelector("body");
        body.appendChild(button);
        button.onclick = () => {
            const p = document.createElement("p");
            p.innerHTML = "this is test";
            p.classList.add("text-info")
            body.appendChild(p);
        };
    }
}
export default Button;
