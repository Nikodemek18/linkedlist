import 'jest';
import {LinkedList} from './linkedlist';

describe('LinkedList', () => {
    let list: LinkedList<string>;

    beforeEach(() => {
        list = new LinkedList();
    });


    describe('when new list was created', () => {
        test('it should be defined', () => {
            expect(list).toBeDefined();
        });

        test('tail should be null', () => {
            expect(list.getTail()).toBeNull();
        });

        test('result of "find" method should be undefined', () => {
            const nonExistingValue = 'nonExistingValue';

            expect(list.find(nonExistingValue)).toBeUndefined();
        });
    });


    test('when new node was added tail should be defined', () => {
        const newValue = 'newValue';

        list.add(newValue);

        expect(list.getTail()).toBeDefined();
    });

    describe('when list contains one node', () => {
        test('and new one was added tail should be changed', () => {
            const initialValue = 'initialValue';
            const newValue = 'newValue';

            list.add(initialValue);
            const initialTail = list.getTail();

            list.add(newValue);

            expect(list.getTail()).not.toBe(initialTail);
        });
    });

    describe('when list contains several nodes', () => {
        test('and "find" method was called with existing values it should return appropriate nodes', () => {
            const firstValue = 'firstValue';
            const secondValue = 'secondValue';

            list.add(firstValue);
            const firstExpectedNode = list.getTail();

            list.add(secondValue);
            const secondExpectedNode = list.getTail();

            expect(list.find(firstValue)).toBe(firstExpectedNode);
            expect(list.find(secondValue)).toBe(secondExpectedNode);
        });
    });

    test('when "traverse" method is called with some function it should be applied to all nodes', () => {
        const firstValue = 'firstValue';
        const secondValue = 'secondValue';
        const expectedNumberOfCalls = 2;
        const appliedFunction = jest.fn(x => {});

        list.add(firstValue);
        list.add(secondValue);

        list.traverse(appliedFunction);

        expect(appliedFunction.mock.calls.length).toBe(expectedNumberOfCalls);
    })
});