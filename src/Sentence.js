const Sentence = ({ personalData }) => {
  const { firstName, lastName, age } = personalData;
  return (
    <p>
      Nazywam się {firstName} {lastName} i mam {age} lat.
    </p>
  );
};
export default Sentence;
