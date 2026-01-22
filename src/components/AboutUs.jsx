import gambarAbout from "../assets/about-us-image.jpg"

export const AboutUs = () => {
  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 py-24 px-8">
        <img className="w-full object-cover" src={gambarAbout} alt="toast bread" />
        <div>
            <h2 className="font-serif text-6xl mb-6 pt-5 text-center">About Catering</h2>
            <p className="font-serif text-xl text-center pt-4 ">Traditional since 1889</p>
            <p className="text-xl pt-6">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p>
            <p className="text-xl pt-3">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </section>
  )
}
