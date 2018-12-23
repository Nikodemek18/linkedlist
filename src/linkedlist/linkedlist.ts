import {List, Node} from './models';

export class LinkedList<T> implements List<T> {
    private first: Node<T> | null;
    private last: Node<T> | null;

    constructor() {
        this.first = this.last = null;
    }

    /**
     * Add value to the end of the list
     * @param value
     */
    add(value: T): void {
        const newNode = new Node<T>(value);

        if (this.isEmpty()) {
            this.first = this.last = newNode;
            return;
        }

        this.addToTail(newNode);
    }

    /**
     * Find first matched node
     * @param value
     */
    find(value: T): Node<T> | undefined {
        if (this.isEmpty()) {
            return;
        }

        return this.findNodeByValue(value);
    }

    /**
     * Return last node in the list
     */
    getTail(): Node<T> | null {
        return this.last;
    }

    /**
     * Apply incoming function to each node value
     * @param fun
     */
    traverse(fun: Function): void {
        let currentNode = this.first;

        while (currentNode) {
            fun(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    private addToTail(node: Node<T>): void {
        // @ts-ignore
        this.last.next = node;
        this.last = node;
    }

    private isEmpty(): boolean {
        return !Boolean(this.first);
    }

    private findNodeByValue(value: T): Node<T> | undefined {
        let currentNode = this.first;

        while (currentNode) {
            const isMatched = currentNode.value === value;

            if (isMatched) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }
    }

}