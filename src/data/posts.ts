// ─────────────────────────────────────────────────────────────────────────────
// BLOG POSTS DATA FILE
// ─────────────────────────────────────────────────────────────────────────────
//
// HOW TO ADD A NEW POST:
//   1. Copy one of the post objects below and paste it at the top of the array.
//   2. Fill in all the fields.
//   3. For the image:
//        - Drop your image into:  public/images/blog/
//        - Set  coverImage: "/images/blog/your-filename.jpg"
//        - If you have no image yet, set  coverImage: null
//
// ─────────────────────────────────────────────────────────────────────────────

export type Post = {
  slug: string;           // URL-friendly ID — no spaces, use hyphens
  title: string;
  subtitle: string;
  excerpt: string;        // Short preview shown on the listing page (1-2 sentences)
  content: string;        // Full post body — supports line breaks (\n\n for paragraphs)
  coverImage: string | null; // Path like "/images/blog/my-photo.jpg" — or null
  category: string;       // e.g. "Philosophy", "Personal", "Blueprint Theory"
  tags: string[];
  date: string;           // Format: "Month DD, YYYY"
  readTime: string;       // e.g. "5 min read"
  featured: boolean;      // Set to true to highlight on the listing page
};

export const posts: Post[] = [
  {
    slug: "smarter-than-ever-dumber-than-we-think",
    title: "Smarter Than Ever, Dumber Than We Think",
    subtitle: "Humanity's Illusion of Understanding",
    excerpt:
      "We like to think of ourselves as the dominant species, the apex of intelligence, the ones who figured it out. But the more you actually look at reality, the more obvious it becomes — we haven't even scratched the surface.",
    content: `We like to think of ourselves as the "dominant species," the apex of intelligence, the ones who "figured it out." But the more you actually look at reality, the more obvious it becomes — we haven't even scratched the surface. We are stumbling through existence, high on our own cleverness, while the universe smirks in the background.

Here's a brutal list of real, undeniable facts — things we can measure, observe, or scientifically admit — that prove we still don't understand much of anything.

1. We Don't Know What Consciousness Is

Neuroscience can tell you how neurons fire, how signals jump across synapses, how chemicals influence mood. But what is awareness itself? Why does electricity in a brain somehow become an inner world?

No scientist can explain why you experience being you instead of being just a pile of meat reacting to stimuli. This is called "the hard problem of consciousness," and it's not fringe — it's one of the most famous gaps in science.

If we don't even know what's creating the voice in our own head, how can we pretend to understand reality?

2. We Don't Control Most of Our Own Body

Your heart beats. Your lungs breathe. Your cells repair and replicate. Your gut digests food. Your liver detoxifies.

You're not "deciding" to do any of this. Your body is essentially an alien ecosystem running on autopilot while you sit in the control room pretending you're the one in charge.

The illusion of control is so strong we forget we don't even know how we move our own hand — we just "decide" to, and it happens.

3. We Don't Know What 95% of the Universe Is Made Of

Look at the stars, planets, and galaxies — that's only 5% of the universe's mass and energy.

The rest? Scientists call it dark matter and dark energy — placeholders for "we have no idea what this stuff is, but it's there."

Imagine bragging about how "advanced" we are while admitting that we can't identify most of reality.

4. We Don't Know How the Brain Stores Memory

We can see which parts of the brain light up when you recall a memory. But we can't explain how the brain stores your grandmother's face, or the sound of rain, or the exact taste of your favourite food.

Memories aren't stored like files on a computer — there's no "memory bank." They're smeared across billions of connections, and the system is so complex that we don't actually know how your "self" even holds together.

5. We Don't Know What Happens When We Sleep

We know the "stages" of sleep. We can measure REM cycles. But why do we need sleep at all?

Why do we dream? Why do those dreams sometimes predict things, process emotions, or combine random nonsense into meaning?

Science can't fully explain it. Sleep might be the most universal human experience — and yet it's still a mystery.

6. We Can't Explain Basic Phenomena Like Time

We measure time. We schedule our lives around it. But what actually is it?

Physics hints that time might not be linear. Quantum mechanics suggests it might be reversible, or not fundamental at all. And relativity shows that time bends and slows depending on gravity and speed.

In other words, we live by the clock — but we don't even know what the clock is made of.

7. We Don't Know Why Placebos Work

Give someone a sugar pill, tell them it's medicine, and their body starts healing.

The placebo effect is real and measurable — it literally changes biology — but science can't fully explain why belief alone rewires the body.

If thoughts can heal… what else are they doing that we haven't noticed?

8. We Don't Understand Animal Consciousness

Your dog dreams. Birds solve puzzles. Octopuses escape aquariums like criminal masterminds.

We know animals are aware to some degree, but we have no real framework for what their consciousness "feels" like — or if some animals experience reality in ways we can't even imagine.

For all we know, the "hierarchy of intelligence" we built could be upside down.

9. We Can't Define Life Properly

What's the difference between something alive and something not?

Viruses blur the line. Artificial intelligence might one day blur it further. Scientists have a dozen definitions for "life," but none work universally.

We've been alive this whole time and we can't even define what that means.

10. We Don't Know What Thought Really Is

You "think" a thought. But where did it come from?

Did you create it? Did your brain generate it automatically? Or did it "arrive" from somewhere else?

Every major culture has its own mythology for inspiration, intuition, and "divine ideas." Maybe it's not mythology. Maybe it's an admission that thought itself is a doorway we don't understand.

The Conclusion: We're Infants Pretending We're Engineers

Every single one of these facts is mainstream science. No woo, no speculation — just things we already know we don't know.

We can split atoms and edit genes, but we don't understand the basic nature of self, thought, time, or life.

We are a young species — and maybe that's exciting. Because if there's this much we don't understand, imagine how much is still waiting.`,
    coverImage: null,
    category: "Philosophy",
    tags: ["consciousness", "science", "humanity", "knowledge", "mystery"],
    date: "August 2, 2025",
    readTime: "4 min read",
    featured: true,
  },
  {
    slug: "punjab-the-frontline-that-never-wanted-your-war",
    title: "Punjab: The Frontline That Never Wanted Your War",
    subtitle: "A reckoning. A wound you keep hiding.",
    excerpt:
      "They're at it again. India. Pakistan. The old game. The same smoke, the same speeches, the same broken promises behind louder explosions. And once again — who's in the middle of it? Punjab.",
    content: `They're at it again.

India. Pakistan. The old game.

The same smoke, the same speeches, the same broken promises behind louder explosions.

And once again — who's in the middle of it?

Punjab.

Again.

Not Delhi.

Punjab.

Not as a voice, not as a negotiator, not as a citizen.

But as a target.

Every Time They Go to War, They Borrow Our Blood First

They want our loyalty.

They want our bravery.

They want our silence.

They want our sons, our land, our sacrifice.

But they don't want us.

Not when the missiles stop flying.

Not when the wheat needs water.

Not when our youth are dying quietly in forgotten towns filled with addiction they let in through the back door.

When it's war — we're warriors.

When it's peace — we're liabilities.

When we protest — we're terrorists.

When we bleed — we're statistics.

You can't keep calling us saviors and threats in the same breath.

This Isn't the First Time You've Burned Us To Keep Yourself Warm

1947 — You split us in half and called it independence.

1984 — You burned us alive and called it necessary.

1990s — You silenced us and called it stability.

2020 — We protested starvation and you called us separatists.

And now?

2025 — You put us in the middle of missiles and drone strikes — again — and call it defense.

You didn't ask us if we were ready.

You just assumed we'd take the hit again.

Punjab Is Not Your Shield. It's a Wound You Keep Hiding.

You parade us on Republic Day.

You sell us in tourism reels.

You chant Bhagat Singh like a brand.

But you never asked why he picked the bomb over the ballot.

Maybe because he saw what we're still living.

A nation that loves what we give, but never who we are.

This Current War? This Isn't Ours. But You'll Still Make Us Pay.

Missiles fall. Sirens scream.

Tarn Taran shakes. Khadur Sahib listens. Goindwal watches windows explode.

And what do you say?

Nothing.

No headlines.

No compensation.

No acknowledgement.

Just silence and then a whisper:

"Punjab is always strong."

No.

We're not always strong.

We're always sacrificed.

We're Not Asking for Glory. We're Asking for Memory.

Remember:

Who guards your borders.

Who buries your dead.

Who grows your grain.

Who never said no, even when everything was taken.

We don't want separation.

We want truth.

We want you to stop pretending we're only Indian when you need heroes, and not Indian when we ask for respect.`,
    coverImage: null,
    category: "Politics",
    tags: ["Punjab", "India", "Pakistan", "war", "identity", "justice"],
    date: "May 11, 2025",
    readTime: "2 min read",
    featured: true,
  },
  {
    slug: "why-everyone-is-secretly-hoping-the-world-ends",
    title: "Why Everyone Is Secretly Hoping the World Ends",
    subtitle: "It's not a death wish. It's a rebirth fantasy.",
    excerpt:
      "Something's off. You can feel it. Like a quiet hum beneath everything. The world is functioning — lights on, phones charged, deliveries on time — but underneath the hum of this well-oiled machine is a silent scream.",
    content: `1. The Whisper We're All Ignoring

Something's off. You can feel it.

Like a quiet hum beneath everything.

The world is "functioning," sure. Lights are on. Phones are charged. Deliveries arrive on time. But underneath the hum of this well-oiled machine is a silent scream:

"End it."

Not in words. Not even consciously.

But in how people act, you can see it.

When a cyclone warning hits Brisbane and people get weirdly hyped.

When India and Pakistan nearly go to war and it turns into memes.

When someone whispers "solar flare" and half the internet Googles "will we lose Wi-Fi forever?"

People aren't afraid.

They're curious. Some are excited.

Why?

2. The Global Pattern of Silent Collapse

Look around. Doesn't matter where you are:

Australia: Cyclone warnings trigger not panic, but group chats saying "yo bro did you feel that wind?"

South Asia: India–Pakistan airstrikes escalate. One side claims jets downed. The other calls it fake. Meanwhile, social media floods with war-core aesthetic edits.

Europe: Ukraine is still at war. It's now background noise.

US: School shootings, climate disasters, economic anxiety — scroll, like, scroll.

Global: Solar storms trending. AI-generated apocalypse cities going viral. "What if society collapsed tomorrow?" Reels with 200K likes.

This isn't about any one event.

It's about how we respond to them now.

Desensitised. Addicted. Awakened — but only when the world breaks.

3. Why Collapse Feels More Real Than Everyday Life

Let's face it: most people aren't living.

They're performing.

Swiping through apps to find fake love.

Posting gym selfies to prove fake progress.

Copy-pasting motivational quotes to signal fake depth.

Clapping for politicians whose souls were sold 20 years ago.

Playing "productive citizen" while spiraling inside.

So when the world shakes — through war, disaster, or global blackout warnings — it jolts people awake.

Not because they want death.

But because it's finally not fake.

Fear is real.

Uncertainty is real.

A missile siren doesn't ask for likes.

A cyclone doesn't do brand deals.

4. Apocalypse as Content: The Ultimate Entertainment Loop

In 2025, collapse is a genre.

On X, people break news in threads while posting war-zone memes.

On Instagram Reels, time-lapses of cities dying over melancholic music.

On Reddit, they simulate nuclear strikes for fun.

AI-generated apocalypse art is now a vibe — neon ruins, glitching skies, divine darkness.

We used to fear the end.

Now we scroll it, like it, save it, remix it.

5. It's Not Death We Crave. It's the Death of This Version of Life.

This is the heart of it.

People aren't hoping the world ends.

They're hoping this world ends.

The world of corporate smiles and algorithmic love. Clickbait truths and performance grief. Dead jobs, rigged systems, plastic connection.

They want to watch it fall because it betrayed them.

And maybe — just maybe — if it all breaks, something real can rise.

A system built on truth.

On chaos, yes — but at least honest chaos.

Not the smooth, smiling lie of modern life.

6. The Final Truth: This Is a Rebirth Fantasy, Not a Death Wish

This blog isn't about doom.

It's about recognizing a collective scream for something better.

The real sickness isn't war, or weather, or AI.

It's that we live in a world where people feel more alive imagining destruction than they do inside their daily lives.

That's the indictment.

That's the reason.

So when you feel that voice inside you whisper:

"Let it all fall…"

Know this:

It's not a desire for death.

It's a desire for truth.

For reality.

For rebirth.

7. So Now What?

You've got two choices:

Keep sleepwalking through this fake-ass reality, sedated by content and caffeine.

OR

Accept the truth. That you're not crazy. That this world is broken. And that maybe — just maybe — you were born to be one of the few who rebuild when the old world finally collapses.

The world is ending.

But maybe that's the beginning.`,
    coverImage: null,
    category: "Personal",
    tags: ["society", "collapse", "rebirth", "consciousness", "truth", "modern life"],
    date: "May 8, 2025",
    readTime: "3 min read",
    featured: false,
  },
  {
    slug: "unleashing-the-power-of-words",
    title: "Unleashing the Power of Words",
    subtitle: "My Journey as a Modern Thinker",
    excerpt:
      "Words have always held a unique power — the ability to inspire, challenge, and transform. For me, writing isn't just about putting pen to paper; it's a way to explore the intricacies of life, question the status quo, and connect with others on a deeper level.",
    content: `Words have always held a unique power — the ability to inspire, challenge, and transform. For me, writing isn't just about putting pen to paper; it's a way to explore the intricacies of life, question the status quo, and connect with others on a deeper level.

My journey began with a simple yet profound curiosity: What drives human thought? Growing up, I was fascinated by the vastness of the universe, the beauty of stories, and the complexity of our minds. Over time, this curiosity evolved into a mission — to create work that resonates, inspires, and pushes boundaries.

Through my books, blogs, and research, I aim to bridge the gap between philosophy, creativity, and the human experience. Whether it's dissecting the concept of self-discovery or narrating stories that reflect the world's rawness and beauty, my goal is simple: to spark thought and encourage growth.

This blog is more than a platform — it's a space where ideas can flourish. Here, I'll share my reflections on life, insights from my writings, and glimpses into the creative process. Expect everything from philosophical deep dives to practical tips on embracing creativity and purpose.

Join me on this journey of words — to explore unspoken truths, challenge conventional ideas, and discover new perspectives. Isn't that what storytelling is all about?

What's Next?

Stay tuned for upcoming posts where I'll delve into topics like:

The balance between ego and enlightenment.

How storytelling shapes our perception of the world.

Practical insights from my research and books.

Thank you for being part of this journey. Here's to the power of words.`,
    coverImage: null,
    category: "Personal",
    tags: ["writing", "philosophy", "creativity", "storytelling", "journey"],
    date: "February 1, 2025",
    readTime: "1 min read",
    featured: false,
  },
  {
    slug: "the-ego-is-not-your-enemy",
    title: "The Ego Is Not Your Enemy",
    subtitle: "A defence of the self in an age of self-erasure",
    excerpt:
      "Everyone tells you to kill the ego. But what if the ego is the very tool you need to build something worth transcending?",
    content: `We live in a culture obsessed with ego death.

From ancient Eastern philosophy to modern wellness influencers, the message is relentless: the ego is the problem. Dissolve it. Surrender it. Transcend it.

But I want to ask a different question: what if the ego is not your enemy, but your most misunderstood ally?

The ego — that sense of "I", of selfhood, of distinctness from the world — is not a wall between you and enlightenment. It is the door. And like any door, you cannot walk through it if you have demolished it first.

Blueprint Theory begins here. Not with the destruction of the self, but with its conscious construction. You cannot architect something you have declared a ruin.

The ego is the blueprint. Enlightenment is what you build on top of it.

I wrote Ego & Enlightenment because I got tired of philosophies that asked me to disappear. I wanted a philosophy that asked me to show up — fully, consciously, and without apology.

This is that philosophy.`,
    coverImage: null,
    category: "Blueprint Theory",
    tags: ["ego", "philosophy", "enlightenment", "identity"],
    date: "March 15, 2026",
    readTime: "4 min read",
    featured: true,
  },
  {
    slug: "what-does-it-mean-to-be-alive",
    title: "What Does It Mean to Be Alive?",
    subtitle: "Notes from the other side of survival",
    excerpt:
      "Not alive in the biological sense — breathing, pulse, metabolism. Alive in the way that matters. Present. Burning. Conscious of the fact that you exist.",
    content: `There is a moment — I think most people have had it — where you catch yourself going through the motions and wonder: am I actually here?

Not dead. But not exactly alive either.

I wrote my first book, Alive, because I could not answer that question. I needed to write my way into it. And the answer I found was not comfortable.

To be alive, in the way that actually matters, is to be in contact with your own experience. Not managing it, not optimising it, not performing it for an audience — but actually feeling it.

Most of us spend extraordinary amounts of energy avoiding exactly that.

We build elaborate systems of distraction. We call it productivity. We call it mindfulness. We call it being busy. But underneath all of it is the same terror: if I stop, if I get quiet, if I actually look — what will I find?

My answer, after writing an entire book about it: you will find yourself. And that is both the most ordinary and the most extraordinary thing in the universe.

The question "am I alive?" is not a crisis. It is an invitation. The only wrong answer is to never ask it.`,
    coverImage: null,
    category: "Philosophy",
    tags: ["alive", "consciousness", "existence", "presence"],
    date: "February 28, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "blueprint-theory-an-introduction",
    title: "Blueprint Theory: An Introduction",
    subtitle: "Identity is not discovered. It is designed.",
    excerpt:
      "Blueprint Theory is the philosophical framework that underpins everything I create. Here is what it is, where it came from, and why I believe it changes everything.",
    content: `I did not set out to build a philosophy.

I set out to understand why I kept making the same mistakes, constructing the same versions of myself, and wondering why nothing felt like it fit.

Blueprint Theory emerged from that failure.

At its core, the idea is simple: you are not a fixed thing waiting to be discovered. You are an ongoing design. Every thought, every habit, every story you tell yourself about who you are — these are not facts about you. They are choices, even when they do not feel like choices.

The blueprint is the set of assumptions you are living from. Most people inherit theirs. They absorb it from family, culture, trauma, and circumstance. And then they spend the rest of their lives wondering why they feel like they are living someone else's life.

Blueprint Theory says: you can read the blueprint. You can question it. And you can redesign it.

This is not positive thinking. This is not manifestation. This is architectural work — slow, deliberate, often uncomfortable.

The three pillars of Blueprint Theory are:

1. Awareness — seeing the blueprint you are currently living from
2. Interrogation — questioning which parts serve you and which parts were handed to you
3. Design — consciously building the version of yourself you choose to be

Everything I write, film, and create is an exploration of one or more of these pillars.

Welcome to the blueprint.`,
    coverImage: null,
    category: "Blueprint Theory",
    tags: ["blueprint theory", "philosophy", "identity", "self-design"],
    date: "January 20, 2026",
    readTime: "6 min read",
    featured: true,
  },
];

export const categories = [...new Set(posts.map((p) => p.category))];
