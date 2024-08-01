import Image from 'next/image'

export default function page() {
  return (
    <section>
      <div className='relative h-52'>
        <Image src='/placeholder.svg' objectFit='cover' fill alt='Image' />
      </div>

      <div className='flex flex-col md:flex-row gap-5'>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          tenetur ducimus eius repudiandae sapiente fugit ullam facilis atque
          provident maxime at asperiores, quod ab sequi perspiciatis eaque non
          architecto aut.
        </div>

        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          tenetur ducimus eius repudiandae sapiente fugit ullam facilis atque
          provident maxime at asperiores, quod ab sequi perspiciatis eaque non
          architecto aut.
        </div>
      </div>
    </section>
  )
}
