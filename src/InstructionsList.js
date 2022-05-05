

export default function InstructionsList({instructions}) {
  return (
    <div>
      {
        instructions.map((instruction) => <Instruction key={instruction} instruction={instruction} />)
      }
    </div>

  );
}