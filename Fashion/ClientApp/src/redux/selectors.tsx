

export const getTodosState = (store : any) => store.todos;

export const getTodoList = (store: any) =>
    getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store : any, id : any) =>
    getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

export const getTodos = (store: any) =>
    getTodoList(store).map((id : any) => getTodoById(store, id));