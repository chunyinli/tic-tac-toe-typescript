import React from 'react';
import Square from './square';

type SquareValue = 'X' | 'O' | null;
interface propsType {
	squares: Array<SquareValue>;
	onClick: (i:Number) => void;
}

class Board extends React.Component<propsType> {
	renderSquare(i: number) {
		return (
			<Square
				square={this.props.squares[i]}
				onClick={() => this.props.onClick(i)}
			/>
		);
	}

	render() {
		return (
			<div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

export default Board