import React from 'react';
import {connect} from 'react-redux';
import * as ToDoCreators from '../actions/toDoCreator';

const ToDoList = (props) => {
  const {tasks, updateTaskAction, deleteTaskAction} = props;
  return (
    <section>
      <h2>ToDo</h2>
      <ol>
        {
          tasks.map((task)=>(
            <li key={task.id}>
              <p>{task.id}: {task.body}
              <input type='checkbox' checked={task.isDone}
              onChange={({target:{checked}})=>{updateTaskAction({id:task.id, values:{isDone:checked}})}}/>
              <button onClick={()=>{deleteTaskAction(task.id)}}>Delete</button>
              </p>
            </li>
          ))
        }
      </ol>
    </section>
  );
}

const mapStateToProps = ({todo}) => todo;
const mapDispatchToProps = (dispatch) =>({
  updateTaskAction:({id, values}) => dispatch(ToDoCreators.updateTask({id, values})),
  deleteTaskAction: (id) => dispatch(ToDoCreators.deleteTask(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);