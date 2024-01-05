import { cookies } from 'next/headers';
import ChangeMode from './changemode';

export default function Home() {
  let result: any;

  if (typeof cookies().get('mode') !== 'undefined') {
    result = cookies().get('mode');
  }

  console.log(result);

  return (
    <div>
      <ChangeMode />
      <p>{result && result.value}</p>
    </div>
  );
}
