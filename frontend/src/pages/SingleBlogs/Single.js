import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import { Link } from "react-router-dom";

function Single() {
  return (
    <>
      <Header />
      <div>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white ">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue ">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                    <img
                      className="mr-4 w-16 h-16 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Jese Leos"
                    />
                    <div>
                      <Link
                        href="#"
                        rel="author"
                        className="text-xl font-bold text-gray-900"
                      >
                        Jese Leos
                      </Link>
                      <p className="text-base font-light text-gray-500">
                        Graphic Designer, educator &amp; CEO Flowbite
                      </p>
                      <p className="text-base font-light text-gray-500">
                        <time
                          pubdate
                          dateTime="2022-02-08"
                          title="February 8th, 2022"
                        >
                          Feb. 8, 2022
                        </time>
                      </p>
                    </div>
                  </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                  Best practices for successful prototypes
                </h1>
              </header>
              <p className="lead">
                Flowbite is an open-source library of UI components built with
                the utility-first classes from Tailwind CSS. It also includes
                interactive elements such as dropdowns, modals, datepickers.
              </p>
              <p>
                Before going digital, you might benefit from scribbling down
                some ideas in a sketchbook. This way, you can think things
                through before committing to an actual design project.
              </p>
              <p>
                But then I found a . It comes with the most commonly used UI
                components, such as buttons, navigation bars, cards, form
                elements, and more which are conveniently built with the utility
                classes from Tailwind CSS.
              </p>
              <figure>
                <img
                  src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                  alt
                />
                <figcaption>Digital art by Anonymous</figcaption>
              </figure>
              <h3>Best practices for setting up your prototype</h3>
              <p>
                <strong>Low fidelity or high fidelity?</strong> Fidelity refers
                to how close a prototype will be to the real deal. If you’re
                simply preparing a quick visual aid for a presentation, a
                low-fidelity prototype — like a wireframe with placeholder
                images and some basic text — would be more than enough. But if
                you’re going for more intricate usability testing, a
                high-fidelity prototype — with on-brand colors, fonts and
                imagery — could help get more pointed results.
              </p>
              <p>
                <strong>Consider your user</strong>. To create an intuitive user
                flow, try to think as your user would when interacting with your
                product. While you can fine-tune this during beta testing,
                considering your user’s needs and habits early on will save you
                time by setting you on the right path.
              </p>
              <p>
                <strong>Start from the inside out</strong>. A nice way to both
                organize your tasks and create more user-friendly prototypes is
                by building your prototypes ‘inside out’. Start by focusing on
                what will be important to your user, like a Buy now button or an
                image gallery, and list each element by order of priority. This
                way, you’ll be able to create a prototype that puts your users’
                needs at the heart of your design.
              </p>
              <p>
                And there you have it! Everything you need to design and share
                prototypes — right in Flowbite Figma.
              </p>
            </article>
          </div>
        </main>
        <aside
          aria-label="Related articles"
          className="py-8 lg:py-24 bg-gray-50"
        >
          <div className="px-4 mx-auto max-w-screen-xl">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              Related articles
            </h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <article className="max-w-xs">
                <a href="#">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                    className="mb-5 rounded-lg"
                    alt="Image 1"
                  />
                </a>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900">
                  <a href="#">Our first office</a>
                </h2>
                <p className="mb-4 font-light text-gray-500">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 hover:no-underline"
                >
                  Read in 2 minutes
                </a>
              </article>
              <article className="max-w-xs">
                <a href="#">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
                    className="mb-5 rounded-lg"
                    alt="Image 2"
                  />
                </a>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900">
                  <a href="#">Enterprise design tips</a>
                </h2>
                <p className="mb-4 font-light text-gray-500">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 hover:no-underline"
                >
                  Read in 12 minutes
                </a>
              </article>
              <article className="max-w-xs">
                <a href="#">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
                    className="mb-5 rounded-lg"
                    alt="Image 3"
                  />
                </a>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900">
                  <a href="#">We partnered with Google</a>
                </h2>
                <p className="mb-4 font-light text-gray-500">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 hover:no-underline"
                >
                  Read in 8 minutes
                </a>
              </article>
              <article className="max-w-xs">
                <a href="#">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
                    className="mb-5 rounded-lg"
                    alt="Image 4"
                  />
                </a>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900">
                  <a href="#">Our first project with React</a>
                </h2>
                <p className="mb-4 font-light text-gray-500">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 hover:no-underline"
                >
                  Read in 4 minutes
                </a>
              </article>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default Single;
