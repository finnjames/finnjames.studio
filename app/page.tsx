import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hey!
      </h1>
      <p className="mb-4">
        {`My name is Finn James. How’s it going?`}
      </p>
      <p className="mb-4">
        {`I am a software engineer and amateur artist based in Durham, NC. I also build `}
        <a className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 decoration-[0.1em] hover:text-blue-600 hover:decoration-blue-400" href='https://github.com/finnjames/threepio'>
          {`systems`}
        </a>
        {` for `}
        <a className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 decoration-[0.1em] hover:text-blue-600 hover:decoration-blue-400" href='https://skynet.unc.edu/'>
          {`telescopes`}
        </a>
        {`.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
