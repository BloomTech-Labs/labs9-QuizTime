import Link from "next/link";
import Counter from "../components/Counter";
import { Button } from "@rebass/emotion";

export default () => (
	<div>
		<Link href='/quizzes' prefetch>
			<a>quizzes</a>
		</Link>
		<Link href='/classes' prefetch>
			<a>classes</a>
		</Link>
		<Link href='/billing' prefetch>
			<a>billing</a>
		</Link>
		<Link href='/settings' prefetch>
			<a>settings</a>
		</Link>
		<Counter />
		<Button variant='primary' p={3}>
			Hello
		</Button>
		<Button variant='primary-outline' p={3}>
			World
		</Button>
		<Button variant='success' p={3}>
			Success
		</Button>
	</div>
);
