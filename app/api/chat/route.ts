import OpenAI from "openai";
import { NextResponse } from "next/server";
import systemPrompt from "@/lib/systemPrompt";
import projectsData from "@/data/projectsData";
import profile from "@/data/profile";
import skillsData from "@/data/skillsData";
import experienceData from "@/data/experienceData";

const profileContext = `
Name: ${profile.name}
Role: ${profile.role}
Headline: ${profile.headline}
Description: ${profile.description}
Location: ${profile.location}
Email: ${profile.email}
GitHub: ${profile.github}
LinkedIn: ${profile.linkedin}
Availability: ${profile.availability}
`;

const skillsContext = skillsData
  .map(
    (skill) => `
Name: ${skill.name}
Category: ${skill.category}
Level: ${skill.level}
Percentage: ${skill.percentage}%
`
  )
  .join("\n");

const experienceContext = experienceData
  .map(
    (experience) => `
Year: ${experience.year}
Title: ${experience.title}
Organization: ${experience.organization}
Status: ${experience.status}
Description: ${experience.description}
Technologies: ${experience.technologies.join(", ")}
`
  )
  .join("\n");

const portfolioProjects = projectsData
  .map((project) => {
    return `
        Title: ${project.title}
        Category: ${project.category}
        Status: ${project.status}
        Description: ${project.description}
        Technologies: ${project.technologies.join(", ")}
        `;
  })
  .join("\n");

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,

  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;
    if (!message) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is required.",
        },
        {
          status: 400,
        }
      );
    }

    const completion =
      await client.chat.completions.create({
        model: "openai/gpt-oss-20b:free",
        messages: [
        {
            role: "system",
            content: `
        ${systemPrompt}
        ${portfolioProjects}
        ${profileContext}
        ${skillsContext}
        ${experienceContext}
        ${portfolioProjects}

        Answer only using the information above whenever possible.
        If a user asks about M. Firmansyah, his projects, skills, experience, technologies, portfolio, or services, prioritize the information provided above.
        If the requested information is not available, politely answer that you don't have that information instead of making it up.
        `,
            },
            {
                role: "user",
                content: message,
            },
            ],
      });

    return NextResponse.json({
      success: true,
      reply:
        completion.choices[0].message.content ??
        "No response.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}