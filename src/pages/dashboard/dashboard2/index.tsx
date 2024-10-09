import { useEffect, useState } from "react";
import join from "lodash/join";

export default function Dashboard() {
	const [data, setData] = useState<string | null>(null);

	useEffect(() => {
		const loadLibrary = async () => {
			const result = join(["Hello", "World"], " ");
			setData(result);
		};

		loadLibrary();
	}, []);

	return <p>{data}</p>;
}
