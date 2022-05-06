import Instruction from './Instruction';

export default function InstructionsList({ instructions }) {
  return (
    <div>
      {instructions.map((instruction) => (
        <Instruction key={instruction} instruction={instruction} />
        // what does instruction={instruction} mean?
      ))}
    </div>
  );
}
