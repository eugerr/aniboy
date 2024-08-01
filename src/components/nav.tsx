import { PilcrowIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'

export default function Nav() {
  return (
    <nav className='flex'>
      <div className='flex-1'>
        <Button>
          <PilcrowIcon />
        </Button>
      </div>
      <div className='flex-1'>
        <Button>Search</Button>
      </div>

      <Button>Recent Release</Button>
      <Button>Popular</Button>
      <Button>Trending</Button>
    </nav>
  )
}
