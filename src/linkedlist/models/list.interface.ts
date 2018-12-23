import {Node} from './node';

export interface List<T> {
    add(value: T): void;

    find(value: T): Node<T> | undefined;

    getTail(): Node<T> | null;

    traverse(fun: Function): void;
}