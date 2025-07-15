export type Todo = {
    id: string;
    title: string;
    completed: boolean;
}

export type ChangeTodoActionType = 'delete' | 'checkboxUpd';