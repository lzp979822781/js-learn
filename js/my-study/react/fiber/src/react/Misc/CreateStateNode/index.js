import {createDOMElement} from '../../DOM';
import {createReactInstance} from '../createReactInstance';

export default function CreateStateNode(fiber) {
    if (fiber.tag === 'host_component') {
        return createDOMElement(fiber);
    } else {
        return createReactInstance(fiber);
    }
};