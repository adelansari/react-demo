import './Box.css';
const Box = (props) => {
  return (
    <div className='Box'>
      <h1>Name: {props.name}</h1>
      <p>Title: {props.title}</p>
      <p>Location: {props.location}</p>
    </div>
  );
};

export default Box;
