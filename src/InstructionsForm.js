export default function InstructionsForm({ handleSubmit, setFormInstruction }) {
  return (
    <section>
      <form onSubmit={handleSubmit}>
        Add Instructions!
        <input onChange={(e) => setFormInstruction(e.target.value)} />
      </form>
    </section>
  );
}
