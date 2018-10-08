import _ from "lodash";

const component = () => {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'World!'], ', ');
    return element;
}

document.body.appendChild(component());
