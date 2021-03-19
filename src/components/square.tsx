
type SquareValue = 'X' | 'O' | null;

interface SquareProps {
	onClick: () => void;
	square: SquareValue;
}

function Square(props: SquareProps) {
	return (
		<button
			className="square"
			onClick={props.onClick}
		>
			{props.square}
		</button>
	);
}

export default Square