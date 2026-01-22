import heroImage from "../assets/hero-image.jpg"

export const Hero = () => {
  return (
    <section className="w-full h-[80vh]">
      <img className="w-full h-full object-cover" src={heroImage} alt="Burger Image"/>
      <p className="text-[40px] font-serif text-lg absolute bottom-12 left-8">Le Catering</p>
    </section>
  )
}
