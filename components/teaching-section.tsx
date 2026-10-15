const courses = [
  { code: "CORE 103", title: "Processes of Change in Science", description: "Social and economic impacts of natural hazards; the power and limitations of science through a geophysical lens; and the roles of media, government, and lobbyists in hazard response." },
  { code: "GEOL 240", title: "Earthquakes", description: "Causes of earthquakes and the nature of large faults, earthquake hazard and risk, the world’s great earthquakes, and understanding the Richter scale." },
  { code: "GEOL 160", title: "Introduction to Geosystems", description: "Natural geological and environmental systems, their variability, and processes near Earth’s surface in the region that supports most life: the biosphere." },
  { code: "GEOL 107", title: "Oceanography", description: "The physical, chemical, and geological character of oceans and ocean basins, ocean processes and agents, and the economic value of the oceans." },
]

const reviews = [
  { quote: "You can tell that Brianna really cares about the course and [is] in tandem with the students. It was a pleasure getting to have her as our TA, and she will go far with the passion that is based in her teaching. Each lab she certainly did her best to communicate effectively, and work with students' learning types.", source: "GEOL 240 student · Fall 2024" },
  { quote: "Brianna was super informative and had virtually every answer for any question that I asked. Her quizzes were rigorous, but she prepared me for the midterms and reflected the information discussed in the pre labs. She also made labs very interactive and fostered a fun environment.", source: "GEOL 240 student · Fall 2024" },
  { quote: "Brianna Birkel has proven to be a very knowledgeable and helpful teaching assistant. While working in the laboratory, she provides clear and concise instruction and even demonstrates experiments for us in a fascinating and informative manner. The best part about her is that she is quite approachable and will always help you understand the content and subject matter.", source: "GEOL 240 student · Fall 2024" },
  { quote: "This discussion section was a rock this entire semester! With other classes feeling unimportant and irrelevant to the world around us, our discussions were always engaging and super pertinent to what we are all experiencing outside of the classroom. It was a super safe and encouraging learning environment.", source: "CORE 103 student · Fall 2020" },
  { quote: "Brianna did an absolutely phenomenal job of guiding the discussion. She really proposed ideas which made us rethink the way that disaster mitigation, the government, and even science in general are structured. I like that we were able to submit our own discussion questions because it enabled me to think really critically of the texts before class. The amount of reading each week was very manageable, but extremely effective at giving us the proper background information to contribute to the discussion. The breakout rooms were my favorite part of class because I was able to connect with other students and chat with them in a way that felt very casual and comfortable. Brianna was also very considerate of our mental health during this extremely chaotic time, which is greatly appreciated and allowed us to engage with the course material without too much stress. I am really happy to have taken this class and know that it has changed my perspective in many ways.", source: "CORE 103 student · Fall 2020" },
  { quote: "Brianna served as an excellent TA for the lecture. She managed to explain all the concepts very well that even a business student like myself was able to understand. I also loved how she was always able to utilize her labs to help us understand the world around us. I certainly learned a lot through this course because of her.", source: "GEOL 107 student · Spring 2020" },
]

export function TeachingSection() {
  return (
    <section id="teaching" aria-labelledby="teaching-heading" className="scroll-mt-24 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 md:py-32 text-foreground">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-12 max-w-3xl">
        <h2 id="teaching-heading" className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">Teaching &amp; Mentorship</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Teaching is one of my favorite parts of academic life — I love helping students build intuition around complex Earth systems. My approach emphasizes curiosity, real-world relevance, and active engagement. I aim to create an inclusive, supportive learning environment where students feel confident asking questions and exploring ideas.</p>
        </header>
        <h3 className="mb-2 text-2xl font-semibold">Courses taught</h3>
        <p className="mb-6 leading-relaxed text-muted-foreground">Teaching assistant · University of Southern California</p>
        <div className="grid gap-5 md:grid-cols-2">
          {courses.map((course) => (
            <article key={course.code} className="rounded-xl border border-border bg-card p-6 text-card-foreground">
              <p className="mb-2 text-sm font-semibold tracking-wide text-primary">{course.code}</p>
              <h4 className="mb-3 text-xl font-semibold text-balance">{course.title}</h4>
              <p className="leading-relaxed text-muted-foreground">{course.description}</p>
            </article>
          ))}
        </div>
        <h3 className="mb-6 mt-12 text-2xl font-semibold">In students&apos; words</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { ...reviews[2], quote: "While working in the laboratory, she provides clear and concise instruction and even demonstrates experiments for us in a fascinating and informative manner." },
            { ...reviews[3], quote: "It was a super safe and encouraging learning environment." },
          ].map((review) => (
            <figure key={review.source} className="rounded-xl bg-background p-6 text-foreground">
              <blockquote className="text-lg leading-relaxed">{`“${review.quote}”`}</blockquote>
              <figcaption className="mt-5 text-sm font-medium text-primary">{review.source}</figcaption>
            </figure>
          ))}
        </div>
        <details className="mt-6 rounded-xl border border-border bg-card p-6 text-card-foreground">
          <summary className="cursor-pointer font-medium text-primary focus-visible:outline-2 focus-visible:outline-ring">Read more student feedback</summary>
          <div className="mt-6 flex flex-col gap-8">
            {reviews.map((review, index) => (
              <figure key={index}>
                <blockquote className="leading-relaxed text-muted-foreground">{`“${review.quote}”`}</blockquote>
                <figcaption className="mt-3 text-sm font-medium">{review.source}</figcaption>
              </figure>
            ))}
          </div>
        </details>
      </div>
    </section>
  )
}

