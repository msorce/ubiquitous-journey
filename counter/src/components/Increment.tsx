import { ReactHTMLElement } from "react"

type Props = {
	count: number;
	inc: (num: number) => void;
}

const Increment: React.FC<Props> = ({count, inc}) => {
	return (
		<button onClick={() => inc(count + 1)}>inc</button>
	)
}

export default Increment
