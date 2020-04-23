const { todos, initialState } = require('./index');
const { expect } = require('chai');
const { ADD_TODO, TOGGLE_TODO } = require('./actions')

it('todos should be a function', () => {
    expect(todos).to.be.a("function")
});
it("should add a item", () => {
    const before = [];
    const action = {
        type: ADD_TODO,
        payload: {
            id: 0,
            text: "qualquer"
        }
    };
    const after = [{
        id: 0,
        text: "qualquer",
        isDone: false
    }]
    expect(todos(before, action)).to.be.deep.equal(after)
});
it("should add a new todo item", () => {
    const before = [{
        id: 0,
        text: "qualquer",
        isDone: false
    }]
    const action = {
        type: ADD_TODO,
        payload: {
            id: 1,
            text: "qualquer 2"
        }
    }
    const after = [{
        id: 0,
        text: "qualquer",
        isDone: false
    },
    {
        id: 1,
        text: "qualquer 2",
        isDone: false
    }
]
expect(todos(before, action)).to.be.deep.equal(after)
});
it("should toggle first todo", () =>{
    const before = [
        {id: 0, text: "qualquer", isDone: false},
        {id: 1, text: "qualquer 2", isDone: false}
    ];
    const action = {
        type: TOGGLE_TODO,
        payload: {id: 0}
    }
    const after = [
        {id: 0, text: "qualquer", isDone: true},
        {id: 1, text: "qualquer 2", isDone: false}
    ];
    expect(todos(before, action)).to.be.deep.equal(after)
})
it("should toggle second todo", () =>{
    const before = [
        {id: 0, text: "qualquer", isDone: false},
        {id: 1, text: "qualquer 2", isDone: false}
    ];
    const action = {
        type: TOGGLE_TODO,
        payload: {id: 1}
    }
    const after = [
        {id: 0, text: "qualquer", isDone: false},
        {id: 1, text: "qualquer 2", isDone: true}
    ];
    expect(todos(before, action)).to.be.deep.equal(after)
})
it("should return the latest state when action is unknown", () => {
    const before = [{id: 0, text: "qualquer", isDone: false}];
    const action = {type: "UNKNOWN"}
    const after = [{id: 0, text: "qualquer", isDone: false}]
    expect(todos(before, action)).to.be.deep.equal(after)
})

it("should return initial state when before is undefined", () => {
    const before = undefined;
    const action = {};
    const after = initialState;
    expect(todos(before, action)).to.be.deep.equal(after)
}
)