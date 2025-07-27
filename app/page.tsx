"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Github, Linkedin, Code, Download, Mail, MapPin, ExternalLink, Calendar, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/contact-form"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#212121] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3F51B5]/20 to-[#8A2BE2]/20"></div>
          <div className="particles absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="particle absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div
          className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#3F51B5] to-[#8A2BE2] bg-clip-text text-transparent">
            Vishal Ranjan
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-300">
            Software Developer | Backend & Cloud Enthusiast
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="lg"
              className="border-[#3F51B5] text-[#3F51B5] hover:bg-[#3F51B5] hover:text-white transition-all duration-300 bg-transparent"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#3F51B5] text-[#3F51B5] hover:bg-[#3F51B5] hover:text-white transition-all duration-300 bg-transparent"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white transition-all duration-300 bg-transparent"
            >
              <Code className="mr-2 h-5 w-5" />
              LeetCode
            </Button>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-[#3F51B5] to-[#8A2BE2] hover:from-[#3F51B5]/80 hover:to-[#8A2BE2]/80 transition-all duration-300 transform hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#3F51B5] to-[#8A2BE2] bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3F51B5] to-[#8A2BE2] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a backend developer passionate about distributed systems, cloud infrastructure, and real-time
                applications. I love building scalable solutions that can handle complex challenges and deliver
                exceptional user experiences.
              </p>
              <div className="flex items-center text-[#8A2BE2]">
                <MapPin className="mr-2 h-5 w-5" />
                <span className="text-lg">Bangalore, India</span>
              </div>
            </div>

            <div className="relative">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-[#3F51B5] to-[#8A2BE2] rounded-full flex items-center justify-center">
                <div className="w-60 h-60 bg-[#212121] rounded-full flex items-center justify-center">
                  <Code className="h-24 w-24 text-[#8A2BE2]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#3F51B5] to-[#8A2BE2] bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3F51B5] to-[#8A2BE2] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCategory
              title="Languages"
              skills={["C++", "JavaScript", "Python", "Java", "SQL", "Dart"]}
              color="from-[#3F51B5] to-[#5C6BC0]"
            />
            <SkillCategory
              title="Backend/DevOps"
              skills={["Node.js", "REST APIs", "Docker", "AWS", "GitHub Actions", "CI/CD"]}
              color="from-[#8A2BE2] to-[#9C27B0]"
            />
            <SkillCategory
              title="Databases"
              skills={["PostgreSQL", "MongoDB", "Redis", "Firebase"]}
              color="from-[#3F51B5] to-[#8A2BE2]"
            />
            <SkillCategory
              title="Tools"
              skills={["React.js", "GDB", "Valgrind", "Linux", "Bash", "VS Code"]}
              color="from-[#8A2BE2] to-[#3F51B5]"
            />
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#3F51B5] to-[#8A2BE2] bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3F51B5] to-[#8A2BE2] mx-auto"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#3F51B5] to-[#8A2BE2]"></div>

            <div className="space-y-12">
              <ExperienceCard
                title="Software Developer"
                company="Chimple Learning"
                period="Apr 2025 – Present"
                description="Backend development with Node.js, PostgreSQL, AWS, and CI/CD implementation"
                isLeft={true}
              />
              <ExperienceCard
                title="R&D Intern, C++ Developer"
                company="LG Soft India"
                period="Jun 2024 – Apr 2025"
                description="Low-level C++ development for webOS, voice features, and multithreading optimization"
                isLeft={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#3F51B5] to-[#8A2BE2] bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3F51B5] to-[#8A2BE2] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Collaborative Code Editor"
              description="Real-time multi-user editor with syntax highlighting and authentication"
              technologies={["React", "Socket.IO", "Supabase", "AWS"]}
              gradient="from-[#3F51B5] to-[#5C6BC0]"
            />
            <ProjectCard
              title="AI-Powered Real Estate Agent"
              description="AI voice agent for handling real estate calls and scheduling appointments"
              technologies={["Vapi", "OpenAI", "Supabase", "Google Calendar", "Twilio"]}
              gradient="from-[#8A2BE2] to-[#9C27B0]"
            />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#3F51B5] to-[#8A2BE2] bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3F51B5] to-[#8A2BE2] mx-auto"></div>
          </div>

          <div className="flex justify-center">
            <Card className="bg-[#1a1a1a] border-[#3F51B5] hover:border-[#8A2BE2] transition-all duration-300 transform hover:scale-105 max-w-md">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#3F51B5] to-[#8A2BE2] rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">AWS Cloud Practitioner</CardTitle>
                <CardDescription className="text-gray-400">
                  <Calendar className="inline mr-2 h-4 w-4" />
                  April 2025
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#3F51B5] to-[#8A2BE2] bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3F51B5] to-[#8A2BE2] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-4 h-6 w-6 text-[#8A2BE2]" />
                  <a
                    href="mailto:ranjanv353@gmail.com"
                    className="text-lg text-gray-300 hover:text-[#8A2BE2] transition-colors"
                  >
                    ranjanv353@gmail.com
                  </a>
                </div>
                <div className="flex space-x-4 mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#3F51B5] text-[#3F51B5] hover:bg-[#3F51B5] hover:text-white bg-transparent"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#3F51B5] text-[#3F51B5] hover:bg-[#3F51B5] hover:text-white bg-transparent"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white bg-transparent"
                  >
                    <Code className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

function SkillCategory({ title, skills, color }: { title: string; skills: string[]; color: string }) {
  return (
    <Card className="bg-[#212121] border-gray-700 hover:border-[#3F51B5] transition-all duration-300 transform hover:scale-105">
      <CardHeader>
        <CardTitle className={`text-lg bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-[#1a1a1a] text-gray-300 hover:bg-[#3F51B5] hover:text-white transition-all duration-300"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function ExperienceCard({
  title,
  company,
  period,
  description,
  isLeft,
}: {
  title: string
  company: string
  period: string
  description: string
  isLeft: boolean
}) {
  return (
    <div className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      <div className={`w-full md:w-5/12 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
        <Card className="bg-[#1a1a1a] border-[#3F51B5] hover:border-[#8A2BE2] transition-all duration-300 transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-xl text-white">{title}</CardTitle>
            <CardDescription className="text-[#8A2BE2] font-semibold">{company}</CardDescription>
            <CardDescription className="text-gray-400">{period}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">{description}</p>
          </CardContent>
        </Card>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#3F51B5] to-[#8A2BE2] rounded-full border-4 border-[#212121]"></div>

      <div className="w-full md:w-5/12"></div>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  technologies,
  gradient,
}: {
  title: string
  description: string
  technologies: string[]
  gradient: string
}) {
  return (
    <Card className="bg-[#212121] border-gray-700 hover:border-[#3F51B5] transition-all duration-300 transform hover:scale-105 group">
      <CardHeader>
        <div
          className={`w-full h-32 bg-gradient-to-r ${gradient} rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
        >
          <Code className="h-12 w-12 text-white" />
        </div>
        <CardTitle className="text-xl text-white flex items-center justify-between">
          {title}
          <ExternalLink className="h-5 w-5 text-[#8A2BE2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-[#1a1a1a] text-gray-300 hover:bg-[#3F51B5] hover:text-white transition-all duration-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

