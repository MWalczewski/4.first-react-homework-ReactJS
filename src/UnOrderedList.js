const UnOrderedList = ({ hobbies }) => {
  return (
    <ul>
      Unordered List of hobbies:
      {hobbies.map((hobby) => (
        <li>{hobby}</li>
      ))}
    </ul>
  );
};
export default UnOrderedList;
