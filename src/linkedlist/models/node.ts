export class Node<T> {

    private _next: Node<T> | null;

    constructor(private _value: T) {
        this._next = null;
    }

    get value(): T {
        return this._value;
    }

    set value(value: T) {
        this._value = value;
    }

    get next(): Node<T> | null {
        return this._next;
    }

    set next(next: Node<T> | null) {
        this._next = next;
    }
 }
