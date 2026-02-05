export default function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About YohDev</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We are a team of passionate developers and designers dedicated to creating exceptional digital
                experiences.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Founded in 2020, YohDev has been helping businesses of all sizes establish their online presence and
                grow their digital footprint. Our team combines technical expertise with creative thinking to deliver
                solutions that not only look great but also perform exceptionally well.
              </p>
              <p className="text-muted-foreground">
                We believe in building long-term relationships with our clients, understanding their unique needs, and
                delivering solutions that exceed expectations.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                About Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
