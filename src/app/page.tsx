import {cookies} from 'next/headers'
import ChangeMode from './changemode'
export default function Home() {
  let result: any = cookies().get('mode')
  console.log(result)
  return (
    <div>
      <ChangeMode />
      <p>{result.value}</p>
    </div>
  )
}
