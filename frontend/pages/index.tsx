import Link from "next/link";
import Counter from "../components/Counter";
<<<<<<< HEAD
=======
import { Button } from "@rebass/emotion";

>>>>>>> bd4f8655d5cad65818add7b5b4d47c18d335e678
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
		<Button variant='error' p={3}>
			Error
		</Button>
	</div>
);
