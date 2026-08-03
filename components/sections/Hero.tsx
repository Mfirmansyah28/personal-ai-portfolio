"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import profile from "@/data/profile";
import skills from "@/data/skillsData";
import socials from "@/data/socials";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden py-24"
    >
      {/* ================= Background Grid ================= */}

      <div className="
        absolute 
        inset-0
        -z-30
        bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] 
        bg-size-[70px_70px]" 
    />

      {/* ================= Aurora Glow ================= */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="
          absolute
          -left-56
          -top-56 
          h-130
          w-130
          rounded-full
        bg-cyan-500/20 
          blur-[180px]" 
      />

        <div className="
        absolute 
        -right-44 
        -bottom-44 
        h-125 
        w-125 
        rounded-full
        bg-fuchsia-500/20 
        blur-[170px]" 
      />
      </div>
      <div className="relative z-10 mx-auto w-full grid max-w-350 items-center gap-12 px-6 md:px-10 lg:grid-cols-2 xl:gap-20">
        
        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <Badge className="w-fit rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 backdrop-blur-sm">
            {profile.role}
          </Badge>

          <div>
            <h1 className="
                text-4xl 
                font-extrabold 
                leading-tight 
                tracking-tight 
                sm:text-5xl 
                lg:text-6xl 
                xl:text-7xl"
          >
              <span
                className="
                bg-linear-to-r
                from-cyan-400
                via-blue-500
                to-fuchsia-500
                bg-clip-text
                text-transparent
                "
              >
                {profile.name}
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground sm:text-xl lg:text-2xl">
              {profile.headline}
            </p>
          </div>

          <p className="max-w-xl text-base leading-8 text-accent-foreground sm:text-lg lg:leading-9">
            {profile.description}
          </p>

          {/* CTA */}

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/projects">
              <Button 
                size="lg"
                className="
                rounded-xl
                px-8
                py-6
                font-semibold
                shadow-lg
                transition-all
                duration-300 
                hover:-translate-y-1 
                hover:shadow-cyan-500/30 
                cursor-pointer"
             >
                View Projects →
              </Button>
            </Link>

            <Link href={profile.resume}>
              <Button 
                size="lg" 
                variant="outline"
                className="
                rounded-x1 
                px-8 
                py-6 
              border-cyan-500/40 
                transition-all 
                duration-300 
              hover:border-cyan-400 
              hover:bg-cyan-500/10 
                hover:-translate-x-1 
                cursor-pointer"
              >
                Download CV
              </Button>
            </Link>
          </div>

          {/* Social */}

          <div className="flex flex-wrap items-center gap-4">
            {socials.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.name}
                  initial={{
                  opacity: 0,
                  y: 15,
                }}
                  animate={{
                  opacity: 1,
                  y: 0,
                }}
                  transition={{
                  delay: 0.5 + index * 0.12,
                  duration: 0.4,
                }}
                  whileHover={{
                  y: -6,
                  scale: 1.15,
                }}
                >
                <Link
                  href={item.href}
                  aria-label={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex 
                    h-12 
                    w-12 
                    items-center 
                    justify-center 
                    rounded-full 
                    border 
                  border-white/10
                  bg-white/5 
                    backdrop-blur-md 
                    transition-all 
                    duration-300
                  hover:border-cyan-400
                  hover:bg-cyan-500/10
                  hover:text-cyan-300
                    hover:shadow-lg
                    hover:shadow-cyan-500/30"
                >
              <Icon size={22} />
              </Link>
            </motion.div>
          );
      })}
    </div>

          {/* Skills */}

          <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{
                  opacity: 0,
                  y: 20, 
                }}
                  animate={{
                  opacity: 1,
                  y: 0,
                }}
                  transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                }}
                  whileHover={{
                  scale: 1.08,
                  y: -3,
                }}
            >
              <Badge
                variant="secondary"
                className="
                  rounded-full
                  border
                 border-cyan-500/20
                 bg-white/5
                  px-4
                  py-2
                  text-sm
                  backdrop-blur-md
                  transition-all
                  duration-300
                hover:border-cyan-400
                hover:bg-cyan-500/10
                hover:text-cyan-300
                  hover:shadow-lg
                  hover:shadow-cyan-500/20"
              >
              {skill.name}
            </Badge>
          </motion.div>
       ))}
    </div>
        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute 
              h-107.5 
              w-107.5 
              rounded-full 
              bg-linear-to-r 
            from-cyan-500 
            via-blue-500 
            to-fuchsia-500 
              blur-[120px]"
        />
          {/* ================= Glass Card ================= */}

          <motion.div
            whileHover={{
              scale: 1.03,
              rotate: -1,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              relative 
              z-10 
              overflow-hidden 
              rounded-[36px] 
              border 
            border-white/10 
            bg-white/5 
              p-3 
              backdrop-blur-xl 
              shadow-[0_35px_90px_rgba(59,130,246,0.35)]"
          >
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={520}
              height={650}
              priority
              sizes="(max-width:1024px) 100vw, 460px"
              className=" w-70 rounded-[32px] object-cover select-none sm:w-86 lg:w-115 xl:w-115"
            />
          </motion.div>
          
          {/* ================= Floating Badge AI ================= */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute 
              left-0 
              top-8 
              z-20
              hidden 
              rounded-full 
              border 
            border-cyan-500/30 
              bg-background/70 
              px-5 
              py-3 
              backdrop-blur-xl 
              shadow-lg
              lg:block"
          >
            <span className="text-sm font-semibold">🤖 AI Engineer</span>
          </motion.div>

          {/* ================= Floating Badge Open To Work ================= */}

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute 
              bottom-16 
              right-0 
              z-20
              hidden 
              rounded-full 
              border 
            border-fuchsia-500/30 
              bg-background/70 
              px-5 
              py-3 
              backdrop-blur-xl 
              shadow-lg
              lg:block"
          >

            <span className="text-sm font-semibold">🚀 Open to Work</span>
          </motion.div>
        </motion.div>
      </div>
            
        <motion.div
          animate={{
          y: [0, 10, 0],
        }}
          transition={{
          duration: 2,
          repeat: Infinity,
        }}
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            hidden
            lg:flex
            flex-col
            items-center
            text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">
            Scroll
          </span>

        <div
          className="
            mt-2
            h-10
            w-6
            rounded-full
            border
          border-cyan-400
            flex
            justify-center
            p-1"
        >
          <motion.div
            animate={{
            y: [0, 14, 0],
          }}
            transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
            className="
              h-2
              w-2
              rounded-full
            bg-cyan-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
