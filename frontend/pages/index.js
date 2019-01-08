import Link from "next/link";
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
	</div>
);
