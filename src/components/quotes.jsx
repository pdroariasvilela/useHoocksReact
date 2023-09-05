function Quotes({name , base_experience}) {
  return (
    <blockquote>
      <p>{name}</p>
      <footer> {base_experience} </footer>
    </blockquote>
  );
}

export default Quotes;
